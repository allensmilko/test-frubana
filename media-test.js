const { readline, chalk, log } = require('./helpers');
const { attemptsValidator } = require('./attemptsNotifier');

let mediaRangeNumber = 0;
let mediaisOdd = false;
let mediaInputs = [];
let attempts = 1;
  
exports.determineEvenOrOdd = media => {
    return mediaisOdd = Boolean(media % 2);
}

exports.getInputsValue = () => {
    process.stdin.write(`\n`);
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
                    this.getInputsValue();
            }else {
                if(value.toUpperCase() === 'A'){
                    this.typeNumberToAdd();
                }else if(value.toUpperCase() === 'R'){
                    if (mediaInputs.length < 1){
                        attemptsValidator(attempts, 'firstValueToRemove');
                        this.getInputsValue();
                        attempts ++;
                    }else {
                        mediaInputs.splice(-1,1);
                        log(mediaInputs);
                        this.getInputsValue();
                    }
                }else{
                    attemptsValidator(attempts, 'getInputsValue');
                    this.getInputsValue();
                    attempts ++;
                }
            }        
        });
    }
}

exports.typeNumberToAdd = () => {
    readline.question(`Please type a number: `, (value) => {
        process.stdin.write(`\n`);
        log(value);
        if(Number.isInteger(parseInt(value))){
            mediaInputs.push(value);
            log(mediaInputs);
            this.getInputsValue();
        }else{
            attemptsValidator(attempts, 'getInputsValue');
            this.getInputsValue();
            attempts++;
        }        
    });
}

exports.getMediaRange = () => {
    readline.question(`Hi!, please set the media range: `, (mediaRange) => {
        process.stdin.write(`\n`);
        if(Number.isInteger(parseInt(mediaRange))){
            mediaRangeNumber = mediaRange;
            log(chalk.blue(`Cool, you choose  ${chalk.green(mediaRangeNumber)} , like media range!`));
            this.determineEvenOrOdd(mediaRangeNumber);
            log(chalk.blue(`the media range is ${chalk.green(mediaisOdd ? "ODD" : "EVEN")}`));
            attempts = 1;
            this.getInputsValue();
        }else{
            attemptsValidator(attempts,'getMediaRange');
            this.getMediaRange();
            attempts ++;
        }        
    });
}