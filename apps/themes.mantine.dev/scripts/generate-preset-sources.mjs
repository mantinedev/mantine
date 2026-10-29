import fs from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';

const PRESETS_DIR = path.join(import.meta.dirname, '../src/presets');
const OUTPUT_DIR = path.join(PRESETS_DIR, 'sources');
const VERBATIM_PROPERTIES = ['components', 'variantColorResolver'];

function getDeclaredNames(statement) {
  if (ts.isVariableStatement(statement)) {
    return statement.declarationList.declarations.flatMap((declaration) =>
      ts.isIdentifier(declaration.name) ? [declaration.name.text] : []
    );
  }

  if (
    (ts.isFunctionDeclaration(statement) ||
      ts.isTypeAliasDeclaration(statement) ||
      ts.isInterfaceDeclaration(statement) ||
      ts.isEnumDeclaration(statement)) &&
    statement.name
  ) {
    return [statement.name.text];
  }

  return [];
}

function usesName(text, name) {
  return new RegExp(`(?<![\\w$])${name.replace(/\$/g, '\\$')}(?![\\w$])`).test(text);
}

function getThemeCall(statement) {
  if (!ts.isVariableStatement(statement)) {
    return null;
  }

  const declaration = statement.declarationList.declarations.find(
    (item) => ts.isIdentifier(item.name) && item.name.text === 'theme'
  );
  const initializer = declaration?.initializer;
  if (
    !initializer ||
    !ts.isCallExpression(initializer) ||
    !ts.isObjectLiteralExpression(initializer.arguments[0])
  ) {
    return null;
  }

  return initializer.arguments[0];
}

function extract(source, fileName) {
  const file = ts.createSourceFile(fileName, source, ts.ScriptTarget.Latest, true);
  const imports = {};
  const helpers = [];
  const verbatim = {};

  file.statements.forEach((statement) => {
    if (ts.isImportDeclaration(statement)) {
      const module = statement.moduleSpecifier.text;
      const bindings = statement.importClause?.namedBindings;
      if (module.startsWith('.') || !bindings || !ts.isNamedImports(bindings)) {
        return;
      }
      imports[module] = bindings.elements.map(
        (element) => `${element.isTypeOnly ? 'type ' : ''}${element.name.text}`
      );
      return;
    }

    const themeObject = getThemeCall(statement);
    if (themeObject) {
      themeObject.properties.forEach((property) => {
        if (
          ts.isPropertyAssignment(property) &&
          ts.isIdentifier(property.name) &&
          VERBATIM_PROPERTIES.includes(property.name.text)
        ) {
          verbatim[property.name.text] = property.initializer.getText(file);
        } else if (
          ts.isShorthandPropertyAssignment(property) &&
          VERBATIM_PROPERTIES.includes(property.name.text)
        ) {
          verbatim[property.name.text] = property.name.text;
        }
      });
      return;
    }

    const names = getDeclaredNames(statement);
    if (names.includes('cssVariablesResolver')) {
      return;
    }

    helpers.push({ names, text: statement.getText(file) });
  });

  const reachable = new Set();
  const queue = [Object.values(verbatim).join('\n')];
  while (queue.length > 0) {
    const text = queue.pop();
    helpers.forEach((helper, index) => {
      if (!reachable.has(index) && helper.names.some((name) => usesName(text, name))) {
        reachable.add(index);
        queue.push(helper.text);
      }
    });
  }

  const usedHelpers = helpers.filter((_, index) => reachable.has(index)).map((item) => item.text);
  const usedText = [...usedHelpers, ...Object.values(verbatim)].join('\n');

  return {
    imports: Object.fromEntries(
      Object.entries(imports)
        .map(([module, names]) => [
          module,
          names.filter((name) => usesName(usedText, name.replace(/^type /, ''))),
        ])
        .filter(([, names]) => names.length > 0)
    ),
    helpers: usedHelpers.join('\n\n'),
    components: verbatim.components ?? null,
    variantColorResolver: verbatim.variantColorResolver ?? null,
  };
}

await fs.mkdir(OUTPUT_DIR, { recursive: true });
const entries = await fs.readdir(PRESETS_DIR, { withFileTypes: true });
let count = 0;

for (const entry of entries) {
  if (!entry.isDirectory() || entry.name === 'sources') {
    continue;
  }

  const themePath = path.join(PRESETS_DIR, entry.name, 'theme.ts');
  const cssPath = path.join(PRESETS_DIR, entry.name, 'theme.module.css');
  const [theme, css] = await Promise.all([
    fs.readFile(themePath, 'utf8').catch(() => null),
    fs.readFile(cssPath, 'utf8').catch(() => null),
  ]);

  if (!theme) {
    continue;
  }

  const data = { ...extract(theme, themePath), css };
  await fs.writeFile(path.join(OUTPUT_DIR, `${entry.name}.json`), `${JSON.stringify(data)}\n`);
  count += 1;
}

console.log(`Saved ${count} preset sources to ${path.relative(process.cwd(), OUTPUT_DIR)}`);
