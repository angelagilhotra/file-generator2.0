#!/usr/bin/env node

const args = require('minimist')(process.argv.slice(2));

switch(args['lang']) {
      case 'C++':
            //TODO: replace these console logs in each case to code block that calls the specific shell executable, and pass to that executable the boolean args['out']
            console.log('this is a cpp file');
            break;
      case 'Java':
            console.log('this is a java file');
            break;
      default:
            console.log('Not supported yet :(');
            break;
}