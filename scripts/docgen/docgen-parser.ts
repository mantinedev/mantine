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
  'bg',
  'bga',
  'bgp',
  'bgr',
  'bgsz',
  'bottom',
  'c',
  'display',
  'ff',
  'fs',
  'fw',
  'fz',
  'h',
  'inset',
  'left',
  'lh',
  'lts',
  'mah',
  'maw',
  'mih',
  'miw',
  'opacity',
  'pos',
  'right',
  'ta',
  'td',
  'top',
  'tt',
  'w',
];

export const docgenParser = withCustomConfig(path.join(__dirname, '../../tsconfig.json'), {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  propFilter: (prop: PropItem) => {
    if (EXCLUDE_PROPS.includes(prop.name) || prop.name.startsWith('__')) {
      return false;
    }

    if (prop.name === 'variant' && prop.type.name === 'string') {
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
