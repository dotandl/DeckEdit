#!/bin/bash

set -e
yarn build

cd dist/
git init
git add -A
git commit -m "Deploy $(date)"
git push -f https://github.com/dotandl/DeckEdit master:gh-pages

cd -
rm -rf dist/
