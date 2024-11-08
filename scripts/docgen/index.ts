import { generateDeclarations } from 'mantine-docgen-script';
import { getPath } from '../utils/get-path';
import { DOCGEN_PATHS } from './docgen-paths';

generateDeclarations({
  tsConfigPath: getPath('tsconfig.json'),
  outputPath: getPath('apps/mantine.dev/src/.docgen'),
  componentsPaths: DOCGEN_PATHS,
  excludeProps: ['ms', 'me', 'ps', 'pe'],
  typesReplacement: {
    'Omit<Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "value"> | undefined':
      'React.ComponentPropsWithoutRef<"input">',
    '(__CloseButtonProps & ElementProps<"button">) | undefined': 'CloseButtonProps',
    'Partial<Omit<TransitionProps, "mounted">> | undefined': 'TransitionProps',
    'Omit<Props, "ref"> | undefined': 'RechartsProps',
    '[DefaultMantineColor, DefaultMantineColor] | undefined': '[MantineColor, MantineColor]',
    'CategoricalChartProps | undefined': 'RechartsProps',
    'Omit<TooltipProps<any, any>, "ref"> | undefined': 'RechartsProps',
    '((series: RadarChartSeries) => Omit<Props, "ref">) | Omit<Props, "ref"> | undefined':
      '((series: RadarChartSeries) => RechartsProps) | RechartsProps',
    'Omit<CategoricalChartProps & RefAttributes<{ readonly eventEmitterSymbol: Symbol; clipPathId: string; accessibilityManager: AccessibilityManager; ... 63 more ...; UNSAFE_componentWillUpdate?(nextProps: Readonly<...>, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | undefined':
      'RechartsProps',
  },
});
