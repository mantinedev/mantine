import path from 'path';
import { withCustomConfig, PropItem } from 'react-docgen-typescript';

const EXCLUDE_PROPS = [
  'className',
  'classNames',
  'styles',
  'key',
  'ref',
  'style',
  'm',
  'mx',
  'my',
  'mt',
  'ml',
  'mr',
  'mb',
  'sx',
];

export const docgenParser = withCustomConfig(path.join(__dirname, '../../tsconfig.json'), {
  savePropValueAsString: true,
  propFilter: (prop: PropItem) => {
    if (EXCLUDE_PROPS.includes(prop.name)) {
      return false;
    }

    if (prop.declarations !== undefined && prop.declarations.length > 0) {
      return Boolean(
        prop.declarations.find((declaration) => !declaration.fileName.includes('node_modules'))
      );
    }

    return true;
  },
});
