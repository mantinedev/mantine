import path from 'node:path';
import fs from 'fs-extra';
import ts from 'typescript';
import { getPackagesList } from './packages/get-packages-list';
import { createLogger } from './utils/signale';

const logger = createLogger('list');

const VALUE_FLAGS =
  ts.SymbolFlags.Variable |
  ts.SymbolFlags.Function |
  ts.SymbolFlags.Class |
  ts.SymbolFlags.Enum |
  ts.SymbolFlags.ValueModule |
  ts.SymbolFlags.BlockScopedVariable;

function resolvePackage(input: string) {
  const name = input.includes('/') ? input : `@mantine/${input}`;
  const pkg = getPackagesList().find((item) => item.packageJson.name === name);
  return { name, pkg };
}

function getExportedValueNames(checker: ts.TypeChecker, source: ts.SourceFile): string[] {
  const moduleSymbol = checker.getSymbolAtLocation(source);

  if (!moduleSymbol) {
    return [];
  }

  const names = new Set<string>();

  for (const symbol of checker.getExportsOfModule(moduleSymbol)) {
    let resolved = symbol;
    if (resolved.flags & ts.SymbolFlags.Alias) {
      resolved = checker.getAliasedSymbol(resolved);
    }

    if (resolved.flags & VALUE_FLAGS) {
      names.add(symbol.getName());
    }
  }

  return [...names];
}

function findSubcomponents(
  program: ts.Program,
  packagePath: string,
  components: Set<string>
): Set<string> {
  const subcomponents = new Set<string>();
  const root = path.resolve(packagePath).split(path.sep).join('/');

  const visit = (node: ts.Node) => {
    if (
      ts.isBinaryExpression(node) &&
      node.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
      ts.isPropertyAccessExpression(node.left) &&
      ts.isIdentifier(node.right) &&
      /^[A-Z]/.test(node.left.name.text) &&
      components.has(node.right.text)
    ) {
      subcomponents.add(node.right.text);
    }

    ts.forEachChild(node, visit);
  };

  for (const source of program.getSourceFiles()) {
    if (source.isDeclarationFile || !source.fileName.startsWith(root)) {
      continue;
    }

    visit(source);
  }

  return subcomponents;
}

function getPackageExports(entry: string, packagePath: string) {
  const program = ts.createProgram([entry], {
    noEmit: true,
    jsx: ts.JsxEmit.ReactJSX,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    allowJs: true,
    skipLibCheck: true,
  });

  const checker = program.getTypeChecker();
  const source = program.getSourceFile(entry);

  if (!source) {
    return { components: [], hooks: [] };
  }

  const names = getExportedValueNames(checker, source);
  const hooks = names.filter((name) => /^use[A-Z]/.test(name));
  const components = names.filter((name) => /^[A-Z][a-zA-Z0-9]*$/.test(name) && /[a-z]/.test(name));

  const subcomponents = findSubcomponents(program, packagePath, new Set(components));

  return {
    components: components.filter((name) => !subcomponents.has(name)),
    hooks,
  };
}

function toMarkdownList(items: string[]) {
  return items
    .sort((a, b) => a.localeCompare(b))
    .map((item) => `- [ ] ${item}`)
    .join('\n');
}

const input = process.argv[2];

if (!input) {
  logger.error('Provide a package name, for example: npm run list @mantine/core');
  process.exit(1);
}

const { name, pkg } = resolvePackage(input);

if (!pkg) {
  logger.error(`Package ${name} was not found in the packages folder`);
  process.exit(1);
}

const entry = path.join(pkg.path, 'src/index.ts');

if (!fs.existsSync(entry)) {
  logger.error(`Entry file ${entry} does not exist`);
  process.exit(1);
}

const { components, hooks } = getPackageExports(entry, pkg.path);

const sections: string[] = [];

if (components.length > 0) {
  sections.push(`## Components\n\n${toMarkdownList(components)}`);
}

if (hooks.length > 0) {
  sections.push(`## Hooks\n\n${toMarkdownList(hooks)}`);
}

if (sections.length === 0) {
  logger.error(`No exported components or hooks found in ${name}`);
  process.exit(1);
}

process.stdout.write(`${sections.join('\n\n')}\n`);
