import path from 'node:path';
import ts from 'typescript';

describe('root TypeScript configuration', () => {
  const root = path.resolve(__dirname, '../..');
  const config = ts.getParsedCommandLineOfConfigFile(
    path.join(root, 'tsconfig.json'),
    {},
    {
      ...ts.sys,
      onUnRecoverableConfigFileDiagnostic: (diagnostic) => {
        throw new Error(ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'));
      },
    }
  )!;

  it.each(['.storybook/main.ts', '.storybook/preview.tsx'])(
    'includes %s so workspace path mappings apply to Storybook importers',
    (file) => {
      expect(config.fileNames).toContain(path.join(root, file));
    }
  );

  it('continues to include workspace source files', () => {
    expect(config.fileNames).toContain(path.join(root, 'packages/@mantine/core/src/index.ts'));
  });

  it('does not include built workspace output', () => {
    expect(
      config.fileNames.some((file) => /packages\/@mantine\/[^/]+\/(esm|cjs|lib)\//.test(file))
    ).toBe(false);
  });
});
