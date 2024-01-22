import path from 'node:path';
import fs from 'fs-extra';
import { getPath } from '../utils/get-path';

const changelogFolder = getPath('changelog');

const files = fs.readdirSync(changelogFolder).filter((file) => file.endsWith('.md'));

files.forEach((file) => {
  const content = fs.readFileSync(path.join(changelogFolder, file), 'utf8');
  const replacedLinks = content.replaceAll('](/', '](https://mantine.dev/');
  fs.writeFileSync(path.join(changelogFolder, file), replacedLinks);
});
