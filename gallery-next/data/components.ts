import fs from 'fs';
import path from 'path';
import { getCategoryData } from './categories';

function convertCase(string: string) {
  const splitted = string
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .split(' ');
  return splitted.join('-');
}

export function getAllComponents() {
  const paths = fs.readdirSync('gallery');
  const components = paths
    .map((componentName) => {
      const directory = path.join('gallery', componentName);
      const componentPath = path.join(directory, `${componentName}.tsx`);
      const componentAttributes = path.join(directory, 'attributes.json');

      if (fs.lstatSync(directory).isDirectory()) {
        const code = fs.readFileSync(componentPath, 'utf8');
        const attributes = JSON.parse(fs.readFileSync(componentAttributes, 'utf8'));
        const galleryCategory = getCategoryData(attributes.category);
        const category = {
          name: galleryCategory.name,
          path: `/category/${attributes.category}/`,
        };

        return {
          _component: componentName,
          code,
          category,
          url: `/component/${convertCase(componentName)}`,
          attributes,
        };
      }

      return null;
    })
    .filter((c) => c);

  return components;
}
