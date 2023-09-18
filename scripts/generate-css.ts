// @ts-ignore
import postcssPresetMantine from 'postcss-preset-mantine';
import postcss from 'postcss';
import cssnano from 'cssnano';
import postcssModules from 'postcss-modules';
import glob from 'fast-glob';
import fs from 'fs-extra';
import path from 'path';
import { generateScopedName } from '../configuration/rollup/hash-css-name';

const files = glob.sync(path.resolve(__dirname, '../src/mantine-core/src/**/*.css'));
const modules = files.filter((file) => file.endsWith('.module.css'));
const global = files.find((file) => file.endsWith('global.css'))!;

function prepareFileName(filePath: string) {
  return path.basename(filePath).replace('.module.css', '.css');
}

fs.writeJsonSync(
  path.join(__dirname, '../docs/.docgen/css-exports.json'),
  { modules: modules.map(prepareFileName), global: prepareFileName(global) },
  { spaces: 2 }
);

const outputFolder = path.resolve(__dirname, '../src/mantine-core/esm/styles');
fs.ensureDirSync(outputFolder);

async function processFile(filePath: string, scopeBehaviour: 'local' | 'global') {
  const result = await postcss([
    postcssPresetMantine,
    postcssModules({ generateScopedName, getJSON: () => {}, scopeBehaviour }),
    cssnano({ preset: 'default' }),
  ]).process(fs.readFileSync(filePath, 'utf-8'), { from: path.basename(filePath) });

  const fileName = prepareFileName(filePath);
  return fs.writeFile(path.join(outputFolder, fileName), result.css);
}

modules.forEach((file) => processFile(file, 'local'));
processFile(global, 'global');
