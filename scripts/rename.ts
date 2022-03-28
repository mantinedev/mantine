// /Users/vitalyrtishchev/code/mantine/src/mantine-demos/src/demos/core

import fs from 'fs-extra';
import path from 'path';

const base = 'src/mantine-demos/src/demos/spotlight';
const NAME = 'Spotlight';

function isUppercase(str: string) {
  return str[0].toUpperCase() === str[0];
}

fs.readdirSync(base)
  .filter(
    (file) =>
      !fs.lstatSync(path.join(base, file)).isDirectory() &&
      !file.startsWith('_') &&
      file !== 'index.ts' &&
      !isUppercase(file)
  )
  .forEach((file) => {
    fs.renameSync(path.join(base, file), path.join(base, `${NAME}.demo.${file}`));
  });

const index = fs.readFileSync(path.join(base, 'index.ts')).toString('utf-8');
const renamedIndex = index
  .split('\n')
  .map((line) => {
    const splitted = line.split(/'.\/(.*)';/g);
    if (splitted[1]) {
      splitted[1] = `'./${NAME}.demo.${splitted[1]}';`;
      return splitted.join('');
    }
    return undefined;
  })
  .join('\n');
fs.writeFileSync(path.join(base, 'index.ts'), renamedIndex);
