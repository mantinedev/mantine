import fs from 'fs';
import path from 'path';

function convertCase(string: string) {
  const splitted = string
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .split(' ');
  return splitted.join('-');
}

export function getAllComponents() {
  const rootFolder = path.join('gallery');
  const paths = fs.readdirSync(rootFolder);

  return paths
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
}

export function getComponentsByCategory() {
  return getAllComponents().reduce((acc, component) => {
    if (!(component.attributes.category in acc)) {
      acc[component.attributes.category] = [];
    }
    acc[component.attributes.category].push(component);
    return acc;
  }, {});
}

export function countComponentsByCategory() {
  return getAllComponents().reduce<Record<string, number>>((acc, component) => {
    if (!(component.attributes.category in acc)) {
      acc[component.attributes.category] = 0;
    }
    acc[component.attributes.category] += 1;
    return acc;
  }, {});
}
