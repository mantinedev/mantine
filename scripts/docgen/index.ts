import { generateDeclarations } from 'mantine-docgen-script';
import { DOCGEN_PATHS } from './docgen-paths';
import { getPath } from '../utils/get-path';

generateDeclarations({
  tsConfigPath: getPath('tsconfig.json'),
  outputPath: getPath('docs/src/.docgen'),
  componentsPaths: DOCGEN_PATHS,
  excludeProps: [],
  typesReplacement: {
    'Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> | undefined':
      'React.ComponentPropsWithoutRef<"input">',
  },
});
