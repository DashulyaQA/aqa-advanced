import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
console.log(chalk.bgYellow('lorem ipsum'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));