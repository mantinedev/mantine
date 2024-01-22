import fg from 'fast-glob';
import { getPath } from '../utils/get-path';
import { createLogger } from '../utils/signale';

const logger = createLogger('count');

const components = fg.sync([
  getPath('docs/src/pages/core/*.mdx'),
  getPath('docs/src/pages/dates/*.mdx'),
  getPath('docs/src/pages/x/*.mdx'),
]);

const hooks = fg.sync([getPath('docs/src/pages/hooks/*.mdx')]);
const pages = fg.sync([getPath('docs/src/pages/**/*.mdx')]);
const demos = fg.sync([getPath('packages/@docs/demos/src/**/*.demo.*.tsx')]);

logger.info('%d components', components.length);
logger.info('%d  hooks', hooks.length);
logger.info('%d documentation pages', pages.length);
logger.info('%d demos', demos.length);
