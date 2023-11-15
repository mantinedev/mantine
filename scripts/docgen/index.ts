import path from 'node:path';
import { generateDeclarations } from 'mantine-docgen-script';
import { DOCGEN_PATHS } from './docgen-paths';

generateDeclarations({
  tsConfigPath: path.join(process.cwd(), 'tsconfig.json'),
  outputPath: path.join(process.cwd(), 'docs/.docgen'),
  componentsPaths: DOCGEN_PATHS,
  excludeProps: [],
  typesReplacement: {},
});
