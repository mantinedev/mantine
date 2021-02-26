import path from 'path';
import fs from 'fs-extra';
import { withCustomConfig, PropItem } from 'react-docgen-typescript';

const EXCLUDE_PROPS = ['className', 'key', 'ref', 'style', 'themeOverride'];

const docgen = withCustomConfig(path.join(__dirname, '../tsconfig.json'), {
  savePropValueAsString: true,
  shouldExtractValuesFromUnion: true,
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

const paths = [{ package: 'mantine-core', path: path.join(__dirname, '../src/mantine-core/src') }];

const declarations = paths.reduce((acc, folder) => {
  acc[folder.package] = fs
    .readdirSync(folder.path)
    .filter((p) => fs.pathExistsSync(path.join(folder.path, p, `${p}.tsx`)))
    .map((p) => path.join(folder.path, p, `${p}.tsx`));
  return acc;
}, {});

Object.keys(declarations).forEach((key) => {
  fs.ensureDirSync(path.join(__dirname, '../docs/.docgen', key));
  docgen.parse(declarations[key]).forEach((declaration) => {
    const packageName = `@mantine/${key.split('-')[1]}/`;
    const componentName = declaration.displayName.replace(packageName, '');
    fs.writeJSONSync(
      path.join(__dirname, '../docs/.docgen', key, `${componentName}.json`),
      declaration,
      { spaces: 2 }
    );
  });
});
