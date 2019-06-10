const chalk = require('chalk');
const log = console.log;

let mediaRangeNumber = 0;
let mediaisOdd = false;
let mediaInputs = [];
let attempts = 1;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
determineEvenOrOdd = media => {
    return mediaisOdd = Boolean(media % 2);
}

attemptsValidator = (typeError) => {
    if(attempts < 3){
        attempts ++;
        if(typeError === 'getMediaRange'){
            log(chalk.red(`This order don't exist, or the character you type is not a number. ${chalk.green('please try again...')}`));
            getMediaRange();
        }
        else if(typeError === 'firstValueToRemove'){
            log(chalk.red(`You cant remove items from an empty array. ${chalk.green('please try again...')}`));
            getInputsValue();
        }
        else{
            log(chalk.red(`This order don't exist, please try again...`));
            getInputsValue();
        }
    }
    else{
        log(chalk.red(`too many attempts...`));
        log(chalk.green(`Bye`));
        readline.close();
    }    
}

getInputsValue = () => {
    if(mediaInputs.length == mediaRangeNumber) {
        log('To operate')
        if(mediaisOdd){
            let middle = parseInt(mediaInputs[Math.round((mediaInputs.length - 1) / 2)]) / 2;
            log(chalk.green('====================================================='));
            log(chalk.blue(`Cool! this is the result`));
            log(chalk.blue(`${chalk.red(`**`)} Media numbers length: ${chalk.green(mediaRangeNumber)}`));
            log(chalk.blue(`${chalk.red(`**`)} Numbers in the array : ${chalk.green(mediaInputs)}`));
            log(chalk.blue(`${chalk.red(`**`)} The media result is!!! : ${chalk.green(middle)}`));
            log(chalk.green('----------------------------------------------------------'));
            log(chalk.blue(`Thank you for play : ${chalk.blue(`BYE!`)}`));
            log(chalk.green('====================================================='));
        }else {
            let middle = (parseInt(mediaInputs[Math.floor(mediaInputs.length / 2) - 1]) + parseInt(mediaInputs[Math.floor(mediaInputs.length / 2)])) / 2;
            log(chalk.green('====================================================='));
            log(chalk.blue(`Cool! this is the result`));
            log(chalk.blue(`${chalk.red(`**`)} Media numbers length: ${chalk.green(mediaRangeNumber)}`));
            log(chalk.blue(`${chalk.red(`**`)} Numbers in the array : ${chalk.green(mediaInputs)}`));
            log(chalk.blue(`${chalk.red(`**`)} The media result is!!! : ${chalk.green(middle)}`));
            log(chalk.green('----------------------------------------------------------'));
            log(chalk.blue(`Thank you for play : ${chalk.blue(`BYE!`)}`));
            log(chalk.green('====================================================='));
        }
        readline.close();        
    }else {
        readline.question(mediaInputs.length > 0 ? `Please indicate if you want to add ${chalk.green('A')} (or type a number) or delete ${chalk.red('R')} last number entered: `: `Please type a number: `, (value) => {
            if(Number.isInteger(parseInt(value))){
                    mediaInputs.push(value);
                    log(mediaInputs);
                    getInputsValue();
            }else {
                if(value.toUpperCase() === 'A'){
                    typeNumberToAdd();
                }else if(value.toUpperCase() === 'R'){
                    if (mediaInputs.length < 1){
                        attemptsValidator('firstValueToRemove');
                    }else {
                        mediaInputs.splice(-1,1);
                        log(mediaInputs);
                        getInputsValue();
                    }
                }else{
                    attemptsValidator('getInputsValue');
                }
            }        
        });
    }
}

typeNumberToAdd = () => {
    readline.question(`Please type a number: `, (value) => {
        log(value);
        if(Number.isInteger(parseInt(value))){
            mediaInputs.push(value);
            log(mediaInputs);
            getInputsValue();
        }else{
            attemptsValidator('getInputsValue');
        }        
    });
}

getMediaRange = () => {
    readline.question(`Hi!, please set the media range: `, (mediaRange) => {
        log(mediaRange);
        if(Number.isInteger(parseInt(mediaRange))){
            mediaRangeNumber = mediaRange;
            log(chalk.blue(`Cool, you choose  ${chalk.green(mediaRangeNumber)} , like media range!`));
            determineEvenOrOdd(mediaRangeNumber);
            log(chalk.blue(`the media range is ${chalk.green(mediaisOdd ? "ODD" : "EVEN")}`));
            attempts = 1;
            getInputsValue();
        }else{
            attemptsValidator('getMediaRange');
        }        
    });
}


getMediaRange();