import path from 'node:path';
import fs from 'fs-extra';
import { removeReactImport } from './remove-react-import';

export function generateExamplesCode(examplesFolder: string) {
  const examples = fs
    .readdirSync(examplesFolder)
    .filter((item) => fs.lstatSync(path.join(examplesFolder, item)).isDirectory());

  function getExamplesCode(exampleName: string) {
    const examplePath = path.join(examplesFolder, exampleName);
    const exampleContents = fs
      .readdirSync(examplePath)
      .filter((item) => item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.css'));

    const mainFileContent = removeReactImport(
      fs.readFileSync(path.join(examplePath, `${exampleName}.tsx`), 'utf-8')
    );
    const otherFilesContent = exampleContents
      .filter((file) => file !== `${exampleName}.tsx`)
      .map((file) => ({
        name: file,
        content: removeReactImport(fs.readFileSync(path.join(examplePath, file), 'utf-8')),
      }));

    return [
      { fileName: `${exampleName}.tsx`, language: 'tsx', code: mainFileContent },
      ...otherFilesContent.map(({ name, content }) => ({
        fileName: name,
        language: name.endsWith('.css') ? 'css' : 'tsx',
        code: content,
      })),
    ];
  }

  examples.forEach((example) => {
    const code = getExamplesCode(example);
    const codeString = JSON.stringify(code, null, 2);
    fs.writeFileSync(path.join(examplesFolder, example, 'code.json'), codeString, 'utf-8');
  });
}
