import fs from 'node:fs';
import path from 'node:path';
import * as stylesApi from './index';

const MDX_DATA_DIR = path.join(__dirname, '../../../../apps/mantine.dev/src/mdx/data');

function getDocumentedComponents() {
  const documented = new Set<string>();

  fs.readdirSync(MDX_DATA_DIR).forEach((file) => {
    const content = fs.readFileSync(path.join(MDX_DATA_DIR, file), 'utf-8');
    const matches = content.matchAll(/styles:\s*\[([^\]]*)\]/g);
    for (const match of matches) {
      match[1]
        .split(',')
        .map((item) => item.trim().replace(/['"]/g, ''))
        .filter(Boolean)
        .forEach((component) => documented.add(component));
    }
  });

  return documented;
}

describe('@docs/styles-api', () => {
  it('exports styles api data for every component that documents it', () => {
    const documented = getDocumentedComponents();
    expect(documented.size).toBeGreaterThan(0);

    const missing = Array.from(documented).filter(
      (component) => !(`${component}StylesApi` in stylesApi)
    );

    expect(missing).toStrictEqual([]);
  });
});
