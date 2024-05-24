import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  getAutoContrastValue,
  getContrastColor,
  getThemeColor,
  MantineColor,
  useMantineTheme,
  useProps,
} from '../../../core';
import { useProgressContext } from '../Progress.context';
import classes from '../Progress.module.css';

export type ProgressSectionStylesNames = 'section';

export interface ProgressSectionProps
  extends BoxProps,
    CompoundStylesApiProps<ProgressSectionFactory>,
    ElementProps<'div'> {
  /** Value of the section in 0–100 range  */
  value: number;

  /** Determines whether `aria-*` props should be added to the root element, `true` by default */
  withAria?: boolean;

  /** Key of `theme.colors` or any valid CSS value, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Determines whether the section should have stripes, `false` by default */
  striped?: boolean;

  /** Determines whether the sections stripes should be animated, if set, `striped` prop is ignored, `false` by default */
  animated?: boolean;
}

export type ProgressSectionFactory = Factory<{
  props: ProgressSectionProps;
  ref: HTMLDivElement;
  stylesNames: ProgressSectionStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ProgressSectionProps> = {
  withAria: true,
};

export const ProgressSection = factory<ProgressSectionFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    value,
    withAria,
    color,
    striped,
    animated,
    mod,
    ...others
  } = useProps('ProgressSection', defaultProps, props);

  const ctx = useProgressContext();
  const theme = useMantineTheme();

  const ariaAttributes = withAria
    ? {
        role: 'progressbar',
        'aria-valuemax': 100,
        'aria-valuemin': 0,
        'aria-valuenow': value,
        'aria-valuetext': `${value}%`,
      }
    : {};

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('section', { className, classNames, styles, style })}
      {...others}
      {...ariaAttributes}
      mod={[{ striped: striped || animated, animated }, mod]}
      __vars={{
        '--progress-section-width': `${value}%`,
        '--progress-section-color': getThemeColor(color, theme),
        '--progress-label-color': getAutoContrastValue(ctx.autoContrast, theme)
          ? getContrastColor({ color, theme, autoContrast: ctx.autoContrast })
          : undefined,
      }}
    />
  );
});

ProgressSection.classes = classes;
ProgressSection.displayName = '@mantine/core/ProgressSection';
