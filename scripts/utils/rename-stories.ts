import fg from 'fast-glob';
import fs from 'fs-extra';
import { getPath } from './get-path';

function replaceName(input: string) {
  return input.replace(/([a-z])([A-Z])/, (_match, p1, p2) => `${p1}_${p2.toLowerCase()}`);
}

function replaceFile(filePath: string) {
  const contents = fs.readFileSync(getPath(filePath), 'utf8');

  const parsed = contents
    .split('\n')
    .map((line) => {
      if (line.startsWith('export const')) {
        return replaceName(line);
      }

      return line;
    })
    .join('\n');

  fs.writeFileSync(getPath(filePath), parsed);
}

const demosStoriesPaths = fg.sync('packages/@docs/demos/src/demos/**/*.demos.story.tsx');

demosStoriesPaths.forEach((filePath) => {
  replaceFile(filePath);
});
