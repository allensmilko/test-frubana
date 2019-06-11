const { readline, chalk } = require('./helpers');
const { attemptsValidator } = require('./attemptsNotifier');
const { getMediaRange } = require('./media-test');
const { processData } = require('./color-tree');

let attempts = 1;

getTestOptions = () => {
    readline.question(`Hi!, welcome to frubana tester, please choose a test: ${chalk.blue('A')} for media tester, or  ${chalk.blue('B')} for color tester: `, (selected) => {
        if(selected.toUpperCase() === 'A'){
            process.stdin.write(`\n`);
            getMediaRange();
        }else if(selected.toUpperCase() === 'B'){
            process.stdin.write(`\n`);
            processData();
        }else{
            process.stdin.write(`\n`);
            attemptsValidator(attempts, 'getInputsValue');
            process.stdin.write(`\n`);
            getTestOptions();
            attempts++;
        }  
    });
}
getTestOptions();