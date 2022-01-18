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
          slug: attributes.category,
          url: `/category/${attributes.category}/`,
        };

        return {
          component: componentName,
          url: `/component/${convertCase(componentName)}`,
          code,
          category,
          attributes,
        };
      }

      return null;
    })
    .filter((c) => c);

  return components;
}

export function countComponentsByCategory() {
  const components = getAllComponents();
  return components.reduce<Record<string, number>>((acc, component) => {
    if (!(component.category.slug in acc)) {
      acc[component.category.slug] = 0;
    }
    acc[component.category.slug] += 1;
    return acc;
  }, {});
}

export function getComponentsByCategory(category: string) {
  const components = getAllComponents();
  return components.filter((component) => component.category.slug === category);
}
