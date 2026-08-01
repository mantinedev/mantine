import fs from 'fs-extra';
import simpleGit from 'simple-git';
import packageJson from '../../package.json';
import { getPath } from '../utils/get-path';
import { createLogger } from '../utils/signale';
import { buildPatchNotes } from './patch-notes';

const git = simpleGit();
const logger = createLogger('patch-notes');

async function generate() {
  const logs = await git.log({ maxCount: 100 });
  const messages = logs.all.map((commit) => commit.message);
  const notes = buildPatchNotes(messages, packageJson.version);

  if (!notes) {
    logger.error('No @mantine changes found since the previous release');
    process.exit(1);
  }

  await fs.ensureDir(getPath('.changelog'));
  await fs.writeFile(getPath('.changelog/release-notes.md'), `${notes.githubNotes}\n`);
  await fs.writeFile(getPath('.changelog/discord.md'), `${notes.discordMessage}\n`);
  logger.success('Wrote .changelog/release-notes.md and .changelog/discord.md');
}

generate();
