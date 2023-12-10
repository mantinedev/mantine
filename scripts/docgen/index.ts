import { generateDeclarations } from 'mantine-docgen-script';
import { getPath } from '../utils/get-path';
import { DOCGEN_PATHS } from './docgen-paths';

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
