#!/usr/bin/env node

'use strict';
console.clear();

var inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'language',
      message: 'What language is your source code in?',
      choices: [
        'C++',
        'Java'
      ]
    },
    {
      type: 'confirm',
      name: 'output',
      message: 'Is your output auto-generated?'
    }

  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
});