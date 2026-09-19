// Validates @category tags in the generated docgen output against the docs-side maps.
// Run after `npm run docs:docgen`, which regenerates apps/mantine.dev/src/.docgen/docgen.json.
import fs from 'fs-extra';
import {
  PROP_CATEGORIES,
  PROP_ORIGIN_GROUPS,
} from '../../apps/mantine.dev/src/components/PropsTable/prop-groups';
import { getPath } from '../utils/get-path';
import { createLogger } from '../utils/signale';

const logger = createLogger('props-categories');
const docgenPath = getPath('apps/mantine.dev/src/.docgen/docgen.json');

interface DocgenProp {
  name: string;
  parent: string | null;
  tags: Record<string, string>;
}

interface DocgenComponent {
  props: Record<string, DocgenProp>;
}

if (!fs.existsSync(docgenPath)) {
  logger.error(`Missing ${docgenPath}, run "npm run docs:docgen" first`);
  process.exit(1);
}

const docgen: Record<string, DocgenComponent> = fs.readJSONSync(docgenPath);
const errors: string[] = [];
const seenParents = new Set<string>();
let propsCount = 0;

Object.entries(docgen).forEach(([component, { props }]) => {
  Object.values(props).forEach((prop) => {
    propsCount += 1;

    if (prop.parent) {
      seenParents.add(prop.parent);
    }

    if (!('category' in prop.tags)) {
      return;
    }

    const category = prop.tags.category;
    const id = `${component}.${prop.name}`;

    if (category.includes('\n')) {
      errors.push(`${id}: repeated @category tag (${JSON.stringify(category)})`);
      return;
    }

    if (!(category in PROP_CATEGORIES)) {
      errors.push(
        `${id}: unknown category "${category}", expected one of ${Object.keys(PROP_CATEGORIES).join(', ')}`
      );
    }

    if (prop.parent && prop.parent in PROP_ORIGIN_GROUPS) {
      errors.push(
        `${id}: @category on shared origin ${prop.parent} is never rendered, remove the tag`
      );
    }
  });
});

Object.keys(PROP_ORIGIN_GROUPS).forEach((origin) => {
  if (!seenParents.has(origin)) {
    errors.push(
      `PROP_ORIGIN_GROUPS.${origin}: no prop has this parent, the base interface was renamed or removed`
    );
  }
});

if (errors.length > 0) {
  errors.forEach((error) => {
    logger.error(error);
  });
  process.exit(1);
} else {
  logger.success(
    `Props categories are valid (${Object.keys(docgen).length} components, ${propsCount} props)`
  );
  process.exit(0);
}
