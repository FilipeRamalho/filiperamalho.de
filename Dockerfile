FROM --platform=$BUILDPLATFORM node:lts-alpine AS build

RUN corepack enable

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY .yarnrc.yml ./

RUN corepack yarn install --immutable

# Copy the rest of the application files to the container
COPY public/ ./public
COPY src/ ./src
COPY tsconfig.json ./tsconfig.json
COPY astro.config.ts ./astro.config.ts
COPY package.json ./
COPY yarn.lock ./

RUN corepack yarn build


FROM --platform=$BUILDPLATFORM node:lts-alpine AS run

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

ENV NODE_ENV="production"

ENV HOST=0.0.0.0
ENV PORT=4321

CMD ["node", "./dist/server/entry.mjs"]