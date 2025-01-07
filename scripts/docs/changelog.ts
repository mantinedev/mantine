import chalk from 'chalk';
import simpleGit from 'simple-git';
import packageJson from '../../package.json';

const git = simpleGit();

function getPreviousRelease(message: string) {
  const splitted = message.split(' ');
  return splitted[splitted.length - 1];
}

function removeIssueReferences(markdown: string) {
  return markdown.replace(/\(#\d+\)/g, '').trim();
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

  process.stdout.write(
    chalk.cyan(`Previous release: ${getPreviousRelease(messages[lastRelease])}\n\n`)
  );

  const notes = messages
    .slice(0, lastRelease)
    .filter((message) => /\[@mantine/.test(message))
    .map((message) => message.replace('[', '- `[').replace(']', ']`'))
    .join('\n');
  if (notes) {
    process.stdout.write(`${notes}\n\n\n\n\n`);
    process.stdout.write(removeIssueReferences(notes));
  } else {
    process.stdout.write(`No significant changes yet\n\n`);
  }
}

getChangelog();
