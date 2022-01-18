import fs from 'fs-extra';
import path from 'path';

function convertCase(string: string) {
  const splitted = string
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .split(' ');
  return splitted.join('-');
}

const rootFolder = path.join(__dirname, '../gallery-next/gallery');
const paths = fs.readdirSync(rootFolder);

const components = paths
  .map((componentName) => {
    const componentDirectory = path.join(rootFolder, componentName);
    const componentPath = path.join(componentDirectory, `${componentName}.tsx`);
    const componentAttributes = path.join(componentDirectory, 'attributes.json');

    if (fs.lstatSync(componentDirectory).isDirectory()) {
      const code = fs.readFileSync(componentPath, 'utf8');
      const attributes = JSON.parse(fs.readFileSync(componentAttributes, 'utf8'));
      return {
        component: componentName,
        slug: convertCase(componentName),
        code,
        attributes,
      };
    }

    return null;
  })
  .filter((c) => c);

const componentsCountByCategory = components.reduce<Record<string, number>>((acc, component) => {
  if (!(component.attributes.category in acc)) {
    acc[component.attributes.category] = 0;
  }
  acc[component.attributes.category] += 1;
  return acc;
}, {});

const componentsByCategory = components.reduce((acc, component) => {
  if (!(component.attributes.category in acc)) {
    acc[component.attributes.category] = [];
  }
  acc[component.attributes.category].push(component);
  return acc;
}, {});

const dataDir = path.join(__dirname, '../gallery-next/data');

fs.writeJSONSync(path.join(dataDir, 'count.json'), componentsCountByCategory, { spaces: 2 });
fs.writeJSONSync(path.join(dataDir, 'components.json'), componentsByCategory, { spaces: 2 });
