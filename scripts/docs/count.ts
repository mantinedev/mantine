import fs from 'fs';
import fg from 'fast-glob';
import { getPath } from '../utils/get-path';

const components = fg.sync([
  getPath('apps/mantine.dev/src/pages/core/*.mdx'),
  getPath('apps/mantine.dev/src/pages/dates/*.mdx'),
  getPath('apps/mantine.dev/src/pages/x/*.mdx'),
]);

const hooks = fg.sync([getPath('apps/mantine.dev/src/pages/hooks/*.mdx')]);
const pages = fg.sync([getPath('apps/mantine.dev/src/pages/**/*.mdx')]);
const demos = fg.sync([getPath('packages/@docs/demos/src/**/*.demo.*.tsx')]);

fs.writeFileSync(
  getPath('apps/mantine.dev/src/.docgen/count.json'),
  JSON.stringify(
    {
      components: components.length,
      hooks: hooks.length,
      pages: pages.length,
      demos: demos.length,
    },
    null,
    2
  )
);
