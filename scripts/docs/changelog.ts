/* eslint-disable no-console */
import chalk from 'chalk';
import simpleGit from 'simple-git';
import packageJson from '../../package.json';

const git = simpleGit();

function getPreviousRelease(message: string) {
  const splitted = message.split(' ');
  return splitted[splitted.length - 1];
}

function formatForDiscord(markdown: string) {
  const nextVersion = packageJson.version;
  return `Patch ${nextVersion} is out:\n\n${markdown.replace(/\(#\d+\)/g, '').trim()}\n\nView on GitHub – https://github.com/mantinedev/mantine/releases/tag/${packageJson.version}`;
}

async function getChangelog() {
  const logs = await git.log({ maxCount: 100 });
  const messages = logs.all.map((commit) => commit.message);
  const lastRelease = messages.findIndex(
    (message) =>
      message.includes('[release]') &&
      !message.includes(packageJson.version) &&
      !message.includes('beta') &&
      !message.includes('alpha')
  );

  console.log(chalk.cyan(`Previous release: ${getPreviousRelease(messages[lastRelease])}\n\n`));

  const notes = messages
    .slice(0, lastRelease)
    .filter((message) => /\[@mantine/.test(message))
    .map((message) => message.replace('[', '- `[').replace(']', ']`'))
    .join('\n');
  if (notes) {
    console.log(`${notes}\n\n\n\n\n`);
    console.log(formatForDiscord(notes));
  } else {
    console.log(`No significant changes yet\n\n`);
  }
}

getChangelog();
