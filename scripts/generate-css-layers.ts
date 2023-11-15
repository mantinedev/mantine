import fs from 'fs-extra';
import path from 'node:path';
import glob from 'fast-glob';

const files = glob.sync(path.resolve(process.cwd(), 'src/mantine-*/esm/index.css'));

files.forEach((filePath) => {
  const directory = path.normalize(path.join(filePath, '..'));
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const fileContentWitLayer = `@layer mantine {${fileContent}}`;
  fs.writeFileSync(path.join(directory, 'index.layer.css'), fileContentWitLayer);
});
