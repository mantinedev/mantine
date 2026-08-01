/* oxlint-disable no-console */
import chalk from 'chalk';
import simpleGit from 'simple-git';
import packageJson from '../../package.json';
import { buildPatchNotes, findPreviousReleaseIndex } from '../release/patch-notes';

const git = simpleGit();

async function getChangelog() {
  const logs = await git.log({ maxCount: 100 });
  const messages = logs.all.map((commit) => commit.message);

  const index = findPreviousReleaseIndex(messages, packageJson.version);
  if (index !== -1) {
    const parts = messages[index].split(' ');
    console.log(chalk.cyan(`Previous release: ${parts[parts.length - 1]}\n\n`));
  }

  const notes = buildPatchNotes(messages, packageJson.version);
  if (!notes) {
    console.log('No significant changes yet\n\n');
    return;
  }

  console.log(`${notes.githubNotes}\n\n\n\n\n`);
  console.log(notes.discordMessage);
}

getChangelog();
