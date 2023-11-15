// Generates separate css files for each @mantine/core component
import postcssPresetMantine from 'postcss-preset-mantine';
import postcss from 'postcss';
import cssnano from 'cssnano';
import postcssModules from 'postcss-modules';
import glob from 'fast-glob';
import fs from 'fs-extra';
import path from 'node:path';
import { generateScopedName } from 'hash-css-selector';

function transformFileName(filePath: string) {
  return path.basename(filePath).replace('.module.css', '.css');
}

async function processFile(
  filePath: string,
  scopeBehaviour: 'local' | 'global',
  outputFolder: string
) {
  const result = await postcss([
    postcssPresetMantine,
    postcssModules({ generateScopedName, getJSON: () => {}, scopeBehaviour }),
    cssnano({ preset: 'default' }),
  ]).process(fs.readFileSync(filePath, 'utf-8'), { from: path.basename(filePath) });

  const fileName = transformFileName(filePath);
  await fs.writeFile(path.join(outputFolder, fileName), result.css);
  await fs.writeFile(
    path.join(outputFolder, fileName.replace('.css', '.layer.css')),
    `@layer mantine {${result.css}}`
  );
}

// Generates styles.layers.css files for each @mantine/* component
async function generateCSSLayers() {
  const files = await glob(path.resolve(process.cwd(), 'src/mantine-*/esm/index.css'));

  files.forEach((filePath) => {
    const directory = path.normalize(path.join(filePath, '..'));
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const fileContentWitLayer = `@layer mantine {${fileContent}}`;
    fs.writeFileSync(path.join(directory, 'index.layer.css'), fileContentWitLayer);
  });
}

// Generates individual css files for each @mantine/core component
async function generateCoreCSS() {
  const files = await glob(path.resolve(process.cwd(), 'src/mantine-core/src/**/*.css'));
  const modules = files.filter((file) => file.endsWith('.module.css'));
  const global = files.find((file) => file.endsWith('global.css'))!;

  fs.writeJsonSync(
    path.join(process.cwd(), 'docs/.docgen/css-exports.json'),
    { modules: modules.map(transformFileName), global: transformFileName(global) },
    { spaces: 2 }
  );

  const outputFolder = path.resolve(process.cwd(), 'src/mantine-core/esm/styles');

  await fs.ensureDir(outputFolder);

  modules.forEach((file) => processFile(file, 'local', outputFolder));
  processFile(global, 'global', outputFolder);
}

export async function generateCSS() {
  await generateCSSLayers();
  await generateCoreCSS();
}
