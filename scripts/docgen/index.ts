import { generateDeclarations } from 'mantine-docgen-script';
import { getPath } from '../utils/get-path';
import { DOCGEN_PATHS } from './docgen-paths';

generateDeclarations({
  tsConfigPath: getPath('tsconfig.json'),
  outputPath: getPath('docs/src/.docgen'),
  componentsPaths: DOCGEN_PATHS,
  excludeProps: [],
  typesReplacement: {
    'Partial<Omit<TransitionProps, "mounted">> | undefined': 'TransitionProps',
    'Omit<Props, "ref"> | undefined': 'RechartsProps',
    '[DefaultMantineColor, DefaultMantineColor] | undefined': '[MantineColor, MantineColor]',
    'CategoricalChartProps | undefined': 'RechartsProps',
    'Omit<TooltipProps<any, any>, "ref"> | undefined': 'RechartsProps',
    '((series: RadarChartSeries) => Omit<Props, "ref">) | Omit<Props, "ref"> | undefined':
      '((series: RadarChartSeries) => RechartsProps) | RechartsProps',
  },
});
