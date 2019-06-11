module.exports.readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
module.exports.chalk = require('chalk');
module.exports.log = console.log;