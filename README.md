# filiperamalho.de

[![Release Image](https://github.com/FilipeRamalho/filiperamalho.de/actions/workflows/publish.yml/badge.svg)](https://github.com/FilipeRamalho/filiperamalho.de/actions/workflows/publish.yml)

This is the repo of [filiperamalho.de](https://filiperamalho.de).

**Development mode**

If you want to build the project or develop on it, then run

`corepack yarn`

to install dependencies.

**Build natively**

Build a prod-build with:

`corepack yarn build`

Enter development mode with:

`corepack yarn dev`

**Docker**

An accompanying Dockerfile is provided, which you can use to build a Docker image to run the webpage.

This repository includes a GitHub workflow that automatically creates a Docker image with each release.