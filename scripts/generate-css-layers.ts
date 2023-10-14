import fs from 'fs';
import path from 'path';
import glob from 'fast-glob';

const files = glob.sync(path.resolve(__dirname, '../src/mantine-*/esm/index.css'));

files.forEach((filePath) => {
  const directory = path.normalize(path.join(filePath, '..'));
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const fileContentWitLayer = `@layer mantine {${fileContent}}`;
  fs.writeFileSync(path.join(directory, 'index.layer.css'), fileContentWitLayer);
});
