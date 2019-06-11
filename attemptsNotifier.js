const chalk = require('chalk');
const log = console.log;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

exports.attemptsValidator = (attempts, typeError) => {
    if(attempts < 3){
        if(typeError === 'getMediaRange'){
            log(chalk.red(`This order don't exist, or the character you type is not a number. ${chalk.green('please try again...')}`)); 
        }
        else if(typeError === 'firstValueToRemove'){
            log(chalk.red(`You cant remove items from an empty array. ${chalk.green('please try again...')}`));
        }
        else{
            log(chalk.red(`This order don't exist, please try again...`));
        }
    }
    else{
        log(chalk.red(`too many attempts...`));
        log(chalk.green(`Bye`));
        readline.close();
    }    
}