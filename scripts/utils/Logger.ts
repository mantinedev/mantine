import chalk from 'chalk';

export class Logger {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  private log(message: string, breaks: number = 1) {
    process.stdout.write(`${chalk.cyan(`[${this.name}]`)} ${message}${'\n'.repeat(breaks)}`);
  }

  info(message: string, breaks: number = 1) {
    this.log(`${chalk.cyan('→')} ${message}`, breaks);
  }

  success(message: string, breaks: number = 1) {
    this.log(`${chalk.green('✓')} ${message}`, breaks);
  }

  error(message: string, breaks: number = 1) {
    this.log(`${chalk.red('✗')} ${message}`, breaks);
  }
}
