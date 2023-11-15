import { generateDeclarations } from 'mantine-docgen-script';
import { DOCGEN_PATHS } from './docgen-paths';
import { getPath } from '../utils/get-path';

generateDeclarations({
  tsConfigPath: getPath('tsconfig.json'),
  outputPath: getPath('docs/.docgen'),
  componentsPaths: DOCGEN_PATHS,
  excludeProps: [],
  typesReplacement: {},
});
