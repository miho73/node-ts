# NodeJS on Typescript Template

This library includes essential router and library with setup.

Implemented on express

## Setup
1. Clone this template repostory to your local machine or make your own repository based on this template.
2. Rename project folder to your project name.
3. Fill out **name**, **description**, **author** and **license** in *package.json* file.
4. Run `npm i` to install all required packages.

## Development
To watch ts code changes, automatically build and start server with changes, run following two commands in two different shell.
```
npm run watch:script
npm run watch:server
```
**You have to copy `config.json` into a build directory**

## Build
To build project to js file, run following command
```
npm run build
```
Or to build and run with production, run following command
```
npm run run
```

## Includes
This template includes
* Basic Response (404, index response)
* Logging (winston)
* Configuration system