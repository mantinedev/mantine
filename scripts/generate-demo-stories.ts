import glob from 'fast-glob';
import path from 'path';
import fs from 'fs';

const files = glob.sync(path.resolve(process.cwd(), 'src/mantine-demos/src/**/*.demos.story.tsx'));

function ucFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

for (const file of files) {
  const fileData = path.parse(file);

  const fileContent = fs.readFileSync(`${fileData.dir}/index.ts`, 'utf8');
  const fileLines = fileContent.split('\n');
  const componentName = fileData.name.split('.')[0];

  const storyData: { name: string; exportName: string; key: string }[] = [];
  for (const fileLine of fileLines) {
    const exportList = fileLine.match(/export.*{([^)]+)}/)?.[1].trim();
    if (exportList) {
      for (const exportName of exportList.split(',')) {
        if (exportName) {
          storyData.push({
            name: `⭐ Demo: ${exportName.trim()}`,
            exportName: `Demo${ucFirst(exportName.trim())}`,
            key: exportName.trim(),
          });
        }
      }
    }
  }

  const relativePath = file.replace(`${path.resolve(process.cwd(), 'src/mantine-demos/src')}/`, '');
  const depth = relativePath.split('/').length - 1;
  const depthArray = new Array(depth).fill('..');

  const content = `import * as demos from './index';
import { renderDemo } from '${depthArray.join('/')}/render-demo';

export default { title: '${componentName}' };

${storyData
  .map(
    (data) => `export const ${data.exportName} = {
  name: '${data.name}',
  render: renderDemo(demos.${data.key}),
};`
  )
  .join('\n\n')}
`;

  fs.writeFileSync(file, content);
}
