import simpleGit from 'simple-git';

const git = simpleGit();

async function getChangelog() {
  const logs = await git.log({ maxCount: 100 });
  const messages = logs.all.map((commit) => commit.message);
  const lastRelease = messages.findIndex((message) => message.includes('release'));
  const notes = messages
    .slice(0, lastRelease)
    .filter((message) => /\[@mantine/.test(message) && !message.includes('[@mantine/demos]'))
    .map((message) => message.replace('[', '- `[').replace(']', ']`'))
    .join('\n');

  process.stdout.write(`${notes || 'No significant changes yet'}\n\n`);
}

getChangelog();
