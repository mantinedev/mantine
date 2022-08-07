import path from 'path';
import { withCustomConfig, PropItem } from 'react-docgen-typescript';

const EXCLUDE_PROPS = [
  'className',
  'classNames',
  'styles',
  'unstyled',
  'component',
  'key',
  'ref',
  'style',
  'sx',
  'm',
  'mx',
  'my',
  'mt',
  'ml',
  'mr',
  'mb',
  'p',
  'px',
  'py',
  'pt',
  'pl',
  'pr',
  'pb',
];

export const docgenParser = withCustomConfig(path.join(__dirname, '../../tsconfig.json'), {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  propFilter: (prop: PropItem) => {
    if (EXCLUDE_PROPS.includes(prop.name) || prop.name.startsWith('__')) {
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
