import fs from 'fs-extra';
import { getPath } from '../utils/get-path';

const toCamelCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));

const questionsDir = getPath('apps/help.mantine.dev/src/pages/q');
const questions = fs.readdirSync(questionsDir).filter((file) => file.endsWith('.mdx'));

const imports = questions
  .map((file) => {
    const name = toCamelCase(file.replace('.mdx', ''));
    return `import { meta as ${name} } from './pages/q/${file}';`;
  })
  .join('\n');

const questionsArray = questions.map((file) => toCamelCase(file.replace('.mdx', ''))).join(',\n  ');

const output = `${imports}

export const MDX_DATA = [
  ${questionsArray},
];
`;

fs.writeFileSync(getPath('apps/help.mantine.dev/src/mdx.ts'), output);
