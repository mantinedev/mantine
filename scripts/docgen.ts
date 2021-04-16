import path from 'path';
import fs from 'fs-extra';
import { withCustomConfig, PropItem, ComponentDoc } from 'react-docgen-typescript';

const PATHS = [{ type: 'package', path: path.join(__dirname, '../src/mantine-core/src') }];

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

const declarations = PATHS.reduce((acc, info) => {
  if (info.type === 'package') {
    const paths = fs
      .readdirSync(info.path)
      .filter((p) => fs.pathExistsSync(path.join(info.path, p, `${p}.tsx`)))
      .map((p) => path.join(info.path, p, `${p}.tsx`));
    return [...acc, ...paths];
  }

  return acc;
}, []);

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

    if (data.props[prop].type.name === 'ElementsGroupPosition') {
      data.props[prop].type.name = '"right" | "center" | "left" | "apart"';
    }

    if (data.props[prop].type.name === 'MantineSize') {
      data.props[prop].type.name = '"xs" | "sm" | "md" | "lg" | "xl"';
    }

    if (data.props[prop].type.name === 'ReactText') {
      data.props[prop].type.name = 'string | number';
    }

    if (
      data.props[prop].type.name ===
      'ReactElement<any, string | ((props: any) => ReactElement<any, any>) | (new (props: any) => Component<any, any, any>)>'
    ) {
      data.props[prop].type.name = 'ReactElement';
    }
  });

  return data;
}

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

const data = docgen.parse(declarations).reduce((acc, declaration) => {
  const componentName = declaration.displayName.replace(/@mantine\/([^\s]+)\//, '');
  acc[componentName] = prepareDeclaration(declaration);
  return acc;
}, {});

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), data, { spaces: 2 });
