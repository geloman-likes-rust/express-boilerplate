#!/bin/bash

# UPDATE the "name" field in package.json based on the name of your project directory
current_directory_name=$(basename "$PWD")
sed -i "s/\"name\": \".*\"/\"name\": \"$current_directory_name\"/" package.json

# INSTALLATION & SETUP
npm i express dotenv jsonwebtoken cookie-parser
npm i nodemon --save-dev
rm -rdf .git
git init
rm -rdf setup.sh
