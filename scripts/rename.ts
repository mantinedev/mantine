// /Users/vitalyrtishchev/code/mantine/src/mantine-demos/src/demos/core

import fs from 'fs-extra';
import path from 'path';

const base = 'src/mantine-demos/src/demos/core';

function isUppercase(str: string) {
  return str[0].toUpperCase() === str[0];
}

fs.readdirSync('src/mantine-demos/src/demos/core').forEach((component) => {
  const folder = path.join(base, component);
  const files = fs
    .readdirSync(folder)
    .filter(
      (file) =>
        !fs.lstatSync(path.join(folder, file)).isDirectory() &&
        !file.startsWith('_') &&
        file !== 'index.ts' &&
        !isUppercase(file)
    );

  files.forEach((file) => {
    fs.renameSync(path.join(folder, file), path.join(folder, `${component}.demo.${file}`));
  });

  const index = fs.readFileSync(path.join(folder, 'index.ts')).toString('utf-8');
  const renamedIndex = index
    .split('\n')
    .map((line) => {
      const splitted = line.split(/'.\/(.*)';/g);
      if (splitted[1]) {
        splitted[1] = `'./${component}.demo.${splitted[1]}';`;
        return splitted.join('');
      }
      return undefined;
    })
    .join('\n');
  fs.writeFileSync(path.join(folder, 'index.ts'), renamedIndex);
});
