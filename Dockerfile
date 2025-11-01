FROM --platform=$BUILDPLATFORM oven/bun:1-alpine AS build

WORKDIR /app

COPY package.json ./
COPY bun.lock ./
COPY frontend/package.json ./frontend/
COPY backend/package.json ./backend/

RUN bun -c install --frozen-lockfile --production --filter 'filiperamalho.de_frontend'

# Copy the rest of the application files to the container
ENV NODE_ENV=production

COPY frontend/public/ ./frontend/public
COPY frontend/src/ ./frontend/src
COPY frontend/tsconfig.json ./frontend/tsconfig.json
COPY frontend/astro.config.ts ./frontend/astro.config.ts

RUN bun -c run build:website


FROM --platform=$BUILDPLATFORM alpine:latest AS run

RUN apk add --no-cache lighttpd

COPY lighttpd.conf /etc/lighttpd/lighttpd.conf

WORKDIR /app

COPY --from=build /app/frontend/dist /var/www/localhost

EXPOSE 80
CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]