import { generateDeclarations } from 'mantine-docgen-script';
import { getPath } from '../utils/get-path';
import { DOCGEN_PATHS } from './docgen-paths';

generateDeclarations({
  tsConfigPath: getPath('tsconfig.json'),
  outputPath: getPath('apps/mantine.dev/src/.docgen'),
  componentsPaths: DOCGEN_PATHS,
  excludeProps: [],
  typesReplacement: {
    'AccordionHeadingOrder | undefined': '2 | 3 | 4 | 5 | 6',
    'AccordionChevronPosition | undefined': '"left" | "right"',
    '((value: number) => void) | undefined': '(value: number) => void',
    '(() => void) | undefined': '() => void',
    '((value: number) => ReactNode) | undefined': '(value: number) => React.ReactNode',
    '(InputDescriptionProps & DataAttributes) | undefined': 'InputDescriptionProps',
    '(InputErrorProps & DataAttributes) | undefined': 'InputErrorProps',
    '((children: ReactNode) => ReactNode) | undefined':
      '(children: React.ReactNode) => React.ReactNode',
    '(InputLabelProps & DataAttributes) | undefined': 'InputLabelProps',
    '((value: string) => void) | undefined': '(value: string) => void',
    'MantineSize | (string & {}) | undefined': 'MantineSize',
    'number | MantineSize | (string & {}) | undefined': 'MantineSize | number',
  },
});
