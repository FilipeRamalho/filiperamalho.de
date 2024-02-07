# filiperamalho.de

[![Release Image](https://github.com/FilipeRamalho/filiperamalho.de/actions/workflows/publish.yml/badge.svg)](https://github.com/FilipeRamalho/filiperamalho.de/actions/workflows/publish.yml)

This is the repo of [filiperamalho.de](https://filiperamalho.de).

Created with [WebTemplate - CapyIT](https://github.com/capyit/WebTemplate)

**Development mode**

If you want to build the project or develop on it, then run

`yarn install`

to install dependencies.

**Build natively**

Build a prod-build with:

`yarn build`

Enter development mode with:

`yarn start`

The build is under /dist. Copy the contents of the folder to deploy.

**Docker**

There is an accompanying Dockerfile, with which you can build a docker image to run the webpage.

This repo includes a GitHub workflow, which automatically creates a Docker image on each release.

## Notes

The Fontawesome css is a reduced set of the original css files
