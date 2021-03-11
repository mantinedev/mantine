import path from 'path';
import fs from 'fs-extra';
import { withCustomConfig, PropItem, ComponentDoc } from 'react-docgen-typescript';

const EXCLUDE_PROPS = ['className', 'key', 'ref', 'style', 'themeOverride'];

const docgen = withCustomConfig(path.join(__dirname, '../tsconfig.json'), {
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

const paths = [{ package: 'mantine-core', path: path.join(__dirname, '../src/mantine-core/src') }];

const declarations = paths.reduce((acc, folder) => {
  acc[folder.package] = fs
    .readdirSync(folder.path)
    .filter((p) => fs.pathExistsSync(path.join(folder.path, p, `${p}.tsx`)))
    .map((p) => path.join(folder.path, p, `${p}.tsx`));
  return acc;
}, {});

function prepareDeclaration(declaration: ComponentDoc) {
  const data = { ...declaration };
  delete data.tags;
  delete data.methods;

  Object.keys(data.props).forEach((prop) => {
    delete data.props[prop].parent;
    delete data.props[prop].declarations;
    delete data.description;

    if (data.props[prop].type.name === 'MantineNumberSize') {
      data.props[prop].type.name = 'number | "xs" | "sm" | "md" | "lg" | "xl"';
    }

    if (data.props[prop].type.name === 'MantineSize') {
      data.props[prop].type.name = 'xs" | "sm" | "md" | "lg" | "xl"';
    }
  });

  return data;
}

Object.keys(declarations).forEach((key) => {
  fs.ensureDirSync(path.join(__dirname, '../docs/.docgen', key));

  const data = docgen.parse(declarations[key]).reduce((acc, declaration) => {
    const packageName = `@mantine/${key.split('-')[1]}/`;
    const componentName = declaration.displayName.replace(packageName, '');
    acc[componentName] = prepareDeclaration(declaration);
    return acc;
  }, {});

  fs.writeJSONSync(path.join(__dirname, '../docs/.docgen', key, 'props.json'), data, { spaces: 2 });
});
