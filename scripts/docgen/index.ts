import Module, { createRequire } from 'node:module';
import { getPath } from '../utils/get-path';
import { DOCGEN_PATHS } from './docgen-paths';

// `react-docgen-typescript` (loaded through `mantine-docgen-script`) reads the classic compiler API
// via `require('typescript')`, which TypeScript 7 no longer exposes from the package root. Redirect
// that in-process resolution to the pinned classic compiler so docgen keeps working.
const resolvableModule = Module as unknown as {
  _resolveFilename: (request: string, ...args: unknown[]) => string;
};
const originalResolveFilename = resolvableModule._resolveFilename;
resolvableModule._resolveFilename = function resolveFilename(request, ...args) {
  return originalResolveFilename.call(
    this,
    request === 'typescript' ? 'typescript-api' : request,
    ...args
  );
};

const { generateDeclarations } = createRequire(import.meta.url)('mantine-docgen-script');

generateDeclarations({
  tsConfigPath: getPath('tsconfig.json'),
  outputPath: getPath('apps/mantine.dev/src/.docgen'),
  componentsPaths: DOCGEN_PATHS,
  excludeProps: ['mie', 'mis', 'pie', 'pis'],
  typesReplacement: {
    'AccordionHeadingOrder | undefined': '2 | 3 | 4 | 5 | 6',
    'AccordionChevronPosition | undefined': '"left" | "right"',
    '(InputDescriptionProps & DataAttributes) | undefined': 'InputDescriptionProps',
    '(InputErrorProps & DataAttributes) | undefined': 'InputErrorProps',
    '(InputLabelProps & DataAttributes) | undefined': 'InputLabelProps',
    'MantineSize | (string & {}) | undefined': 'MantineSize',
    'number | MantineSize | (string & {}) | undefined': 'MantineSize | number',
    '(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & DataAttributes) | undefined':
      'React.ComponentProps<"div">',
    '(ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & DataAttributes) | undefined':
      'React.ComponentProps<"div">',
    'ColorFormat | undefined': "'hex' | 'hexa' | 'rgba' | 'rgb' | 'hsl' | 'hsla'",
    'ArrowPosition | undefined': "'center' | 'side'",
    'PopoverWidth | undefined': "'target' | React.CSSProperties['width'] | null",
    'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | undefined':
      'React.ComponentProps<"button">',
    'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | undefined':
      'React.ComponentProps<"input">',
    'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> | undefined':
      'React.ComponentProps<"div">',
    '(ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement> & DataAttributes) | undefined':
      "React.ComponentProps<'button'>",
    'Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "value"> | undefined':
      'React.ComponentProps<"input">',
  },
});
