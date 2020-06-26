#!/bin/bash
# On MacOSX, -i requires '' argument
sed -i '' "s|var antlr4 = require('antlr4/index');|var antlr4 = require('./antlr4/index');|g" *.js