#!/bin/bash
ENV=development

rm -r dist
mkdir dist
cp -r icons ./dist/icons

cross-env WEBPACK_ENV=$ENV webpack  --config webpack.main.ts 
cross-env WEBPACK_ENV=$ENV  webpack --config webpack.render.ts


wait-on ./dist/app.html && \
wait-on ./dist/config.html && \
cross-env NODE_ENV=$ENV ./node_modules/.bin/electron .