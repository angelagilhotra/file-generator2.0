#!/usr/bin/env node
'use strict';
console.clear();

var chalk = require ('chalk');
var inquirer = require('inquirer');
var emoji = require ('node-emoji');
var shell = require ('shelljs');

console.log (chalk.magenta.bold('Welcome to ') + chalk.yellowBright.bold('File Generator 2.0!') + emoji.get('memo'));


inquirer
  .prompt([
    {
      type: 'list',
      name: 'language',
      message: 'What extension is your source code?',
      choices: [
        'C++',
        'C',
        'Java',
        'JavaScript',
        'Python',
      ]
    },
    {
      type: 'confirm',
      name: 'output',
      message: 'Require an Output? [If yes, must auto-generate input]'
    }
  ])
  .then(answers => {
    var lang = answers.language;
    var out = answers.output;
    shell.exec('./controller.js --lang=' + lang + ' --out=' + out)
});