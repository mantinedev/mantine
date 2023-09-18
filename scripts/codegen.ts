import fs from 'fs-extra';
import path from 'path';

function removeReact(input: string) {
  const lines = input.split('\n');

  if (lines[0].includes("import React from 'react';")) {
    lines.shift();
  } else if (lines[0].includes('import React')) {
    const remainingImports = lines[0].replace(/import React[^;]+;/, '');
    lines[0] = remainingImports;
  }

  return lines.join('\n');
}

function generateExamplesCode(examplesFolder: string) {
  const examples = fs
    .readdirSync(examplesFolder)
    .filter((item) => fs.lstatSync(path.join(examplesFolder, item)).isDirectory());

  function getExamplesCode(exampleName: string) {
    const examplePath = path.join(examplesFolder, exampleName);
    const exampleContents = fs
      .readdirSync(examplePath)
      .filter((item) => item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.css'));

    const mainFileContent = removeReact(
      fs.readFileSync(path.join(examplePath, `${exampleName}.tsx`), 'utf-8')
    );
    const otherFilesContent = exampleContents
      .filter((file) => file !== `${exampleName}.tsx`)
      .map((file) => ({
        name: file,
        content: removeReact(fs.readFileSync(path.join(examplePath, file), 'utf-8')),
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

generateExamplesCode(path.resolve(__dirname, '../docs/combobox-examples/examples'));
generateExamplesCode(path.resolve(__dirname, '../docs/app-shell-examples/examples'));
