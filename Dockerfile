# Use an official Node.js runtime as the base image
FROM --platform=$BUILDPLATFORM node:20-alpine as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package.json ./
COPY yarn.lock ./

# Install app dependencies
RUN yarn install

# Copy the rest of the application files to the container
COPY assets/ ./assets
COPY src/ ./src

RUN yarn build


FROM --platform=$BUILDPLATFORM alpine as run

RUN apk update \
    && apk add lighttpd \
    && rm -rf /var/cache/apk/*

COPY --from=build /usr/src/app/dist /var/www/localhost/htdocs
COPY lighttpd.conf /temp/

CMD ["lighttpd","-D","-f","/temp/lighttpd.conf"]