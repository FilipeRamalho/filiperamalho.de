FROM --platform=$BUILDPLATFORM oven/bun:1-alpine AS build

WORKDIR /app

COPY package.json ./
COPY bun.lockb ./

RUN bun -c install --frozen-lockfile --production

# Copy the rest of the application files to the container
ENV NODE_ENV=production

COPY public/ ./public
COPY src/ ./src
COPY tsconfig.json ./tsconfig.json
COPY astro.config.ts ./astro.config.ts
COPY package.json ./

RUN bun -c run build


FROM --platform=$BUILDPLATFORM alpine:latest AS run

RUN apk add --no-cache lighttpd

COPY lighttpd.conf /etc/lighttpd/lighttpd.conf

WORKDIR /app

COPY --from=build /app/dist /var/www/localhost

EXPOSE 80
CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]