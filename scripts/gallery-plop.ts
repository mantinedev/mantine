import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { argv } from 'yargs';

const name = (argv as any)._[0];

const componentPath = path.join(__dirname, '../gallery/gallery', name);

if (!name) {
  process.stdout.write(chalk.red`Component name is required\n`);
  process.exit(1);
}

if (fs.existsSync(componentPath)) {
  process.stdout.write(chalk.red`Component already exists\n`);
  process.exit(1);
}

const component = `import React from 'react';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({}));

export function ${name}() {
  const { classes } = useStyles();
  return <div>${name}</div>;
}
`;

const attributes = `{
  "title": "",
  "category": "",
  "author": "rtivital",
  "withColor": true,
  "responsive": true,
  "dependencies": [],
  "canvas": {
    "center": true,
    "maxWidth": 420
  }
}
`;

const story = `import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ${name} } from './${name}';

storiesOf('Gallery/${name}', module).add('${name}', () => (
  <GalleryStory attributes={attributes} component={${name}} />
));
`;

fs.mkdirSync(componentPath);
fs.writeFileSync(path.join(componentPath, `${name}.tsx`), component);
fs.writeFileSync(path.join(componentPath, `${name}.story.tsx`), story);
fs.writeFileSync(path.join(componentPath, 'attributes.json'), attributes);

process.stdout.write(chalk.cyan`Component ${name} created\n`);
process.exit(0);
