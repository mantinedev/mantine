import ghPages from 'gh-pages';
import chalk from 'chalk';
import { createLogger } from '../utils/signale';
import { getPath } from '../utils/get-path';

const logger = createLogger('deploy-alpha');

ghPages.publish(
  getPath('docs/out'),
  {
    dotfiles: true,
    repo: 'git@github.com-rtivital:rtivital/alpha.mantine.dev.git',
    user: {
      name: 'Vitaly Rtishchev',
      email: 'rtivital@gmail.com',
    },
  },
  (error) => {
    if (error) {
      logger.error(error);
      return;
    }

    logger.success(`Deployed to ${chalk.cyan('https://alpha.mantine.dev')}`);
  }
);
