#!/bin/bash

# Update the "name" field in package.json based on your project directory name
current_directory_name=$(basename "$PWD")
sed -i "s/\"name\": \".*\"/\"name\": \"$current_directory_name\"/" package.json

# INSTALLATION & SETUP
npm i express dotenv cors jsonwebtoken cookie-parser
npm i nodemon --save-dev
rm -rdf .git
git init
rm -rdf setup.sh
