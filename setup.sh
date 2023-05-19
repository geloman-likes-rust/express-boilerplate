#!/bin/bash

# GET THE CURRENT DIRECTORY NAME
current_directory_name=$(basename "$PWD")

# UPDATE the "name" field in package.json
sed -i "s/\"name\": \".*\"/\"name\": \"$current_directory_name\"/" package.json

# INSTALLATION & SETUP
npm i express dotenv cors
npm i nodemon --save-dev
rm -rdf .git
git init
rm -rdf setup.sh
