import { generateDeclarations } from 'mantine-docgen-script';
import { getPath } from '../utils/get-path';
import { DOCGEN_PATHS } from './docgen-paths';

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
  },
});
