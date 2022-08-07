import fs from 'fs-extra';
import chalk from 'chalk';
import { getDeclarationsList, DeclarationPath } from './get-declarations-list';
import { prepareDeclaration } from './prepare-declaration';
import { docgenParser } from './docgen-parser';

function replaceName(name: string) {
  if (name === 'ScrollAreaAutosize') {
    return 'ScrollArea';
  }

  return name;
}

export function generateDeclarations(paths: DeclarationPath[]) {
  const componentsPaths = getDeclarationsList(paths);

  componentsPaths.forEach((componentPath) => {
    if (!fs.existsSync(componentPath)) {
      process.stdout.write(chalk.red`Path ${componentPath} does not exist \n`);
      process.exit(1);
    }
  });

  return docgenParser.parse(componentsPaths).reduce((acc, declaration) => {
    const componentName = replaceName(declaration.displayName.replace(/@mantine\/([^\s]+)\//, ''));
    acc[componentName] = prepareDeclaration(declaration);
    return acc;
  }, {});
}
