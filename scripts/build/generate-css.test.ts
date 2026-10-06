/** @jest-environment node */

import os from 'node:os';
import path from 'node:path';
import fs from 'fs-extra';
import { getPath } from '../utils/get-path';
import { generateCoreCSS } from './generate-css';

jest.mock('../utils/get-path', () => ({ getPath: jest.fn() }));

describe('generateCoreCSS', () => {
  let root: string;

  beforeEach(async () => {
    root = await fs.mkdtemp(path.join(os.tmpdir(), 'mantine-css-'));
    jest.mocked(getPath).mockImplementation((filePath) => path.join(root, filePath));
  });

  afterEach(async () => {
    await fs.remove(root);
  });

  it.each(['Button.module.css', 'global.css'])(
    'scales dimensions in %s and its layer variant',
    async (fileName) => {
      await fs.outputFile(
        getPath(`packages/@mantine/core/src/${fileName}`),
        `.root {
          --button-height-sm: 36px;
          --input-padding-y-sm: 6px;
          --right-section-end: 1px;
          padding: 6px 12px;
          width: calc(100% - 2px);
        }`
      );

      await generateCoreCSS();

      const outputName = fileName.replace('.module.css', '.css');
      const css = await fs.readFile(
        getPath(`packages/@mantine/core/styles/${outputName}`),
        'utf-8'
      );
      const layer = await fs.readFile(
        getPath(`packages/@mantine/core/styles/${outputName.replace('.css', '.layer.css')}`),
        'utf-8'
      );

      expect(css).toContain('--button-height-sm: calc(2.25rem * var(--mantine-scale))');
      expect(css).toContain('--input-padding-y-sm: calc(0.375rem * var(--mantine-scale))');
      expect(css).toContain('--right-section-end: calc(0.0625rem * var(--mantine-scale))');
      expect(css).toContain(
        'padding: calc(0.375rem * var(--mantine-scale)) calc(0.75rem * var(--mantine-scale))'
      );
      expect(css).toContain('width: calc(100% - 2px)');
      expect(layer).toBe(`@layer mantine {${css}}`);
    }
  );
});
