import path from 'node:path';
import fs from 'fs-extra';

export function generateExamplesCode(examplesFolder: string) {
  const examples = fs
    .readdirSync(examplesFolder)
    .filter((item) => fs.lstatSync(path.join(examplesFolder, item)).isDirectory());

  function collectFiles(dir: string, prefix = ''): string[] {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .flatMap((entry) => {
        if (entry.isDirectory()) {
          return collectFiles(path.join(dir, entry.name), `${prefix}${entry.name}/`);
        }
        const name = `${prefix}${entry.name}`;
        return name.endsWith('.tsx') || name.endsWith('.ts') || name.endsWith('.css') ? [name] : [];
      })
      .sort();
  }

  function getExamplesCode(exampleName: string) {
    const examplePath = path.join(examplesFolder, exampleName);
    const exampleContents = collectFiles(examplePath);

    const mainFileContent = fs.readFileSync(path.join(examplePath, `${exampleName}.tsx`), 'utf-8');
    const otherFilesContent = exampleContents
      .filter((file) => file !== `${exampleName}.tsx`)
      .map((file) => ({
        name: file,
        content: fs.readFileSync(path.join(examplePath, file), 'utf-8'),
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
