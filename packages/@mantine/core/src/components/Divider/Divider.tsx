import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  getThemeColor,
  MantineColor,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Divider.module.css';

export type DividerStylesNames = 'root' | 'label';
export type DividerVariant = 'solid' | 'dashed' | 'dotted';
export type DividerCssVariables = {
  root: '--divider-color' | '--divider-border-style' | '--divider-size';
};

export interface DividerProps
  extends BoxProps,
    StylesApiProps<DividerFactory>,
    ElementProps<'div'> {
  /** Key of `theme.colors` or any valid CSS color value, by default value depends on color scheme */
  color?: MantineColor;

  /** Controls width/height (depends on orientation), `'xs'` by default */
  size?: MantineSize | number | (string & {});

  /** Divider label, visible only when `orientation` is `horizontal` */
  label?: React.ReactNode;

  /** Controls label position, `'center'` by default */
  labelPosition?: 'left' | 'center' | 'right';

  /** Controls orientation, `'horizontal'` by default */
  orientation?: 'horizontal' | 'vertical';
}

export type DividerFactory = Factory<{
  props: DividerProps;
  ref: HTMLDivElement;
  stylesNames: DividerStylesNames;
  vars: DividerCssVariables;
  variant: DividerVariant;
}>;

const defaultProps: Partial<DividerProps> = {
  orientation: 'horizontal',
};

const varsResolver = createVarsResolver<DividerFactory>((theme, { color, variant, size }) => ({
  root: {
    '--divider-color': color ? getThemeColor(color, theme) : undefined,
    '--divider-border-style': variant,
    '--divider-size': getSize(size, 'divider-size'),
  },
}));

export const Divider = factory<DividerFactory>((_props, ref) => {
  const props = useProps('Divider', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    orientation,
    label,
    labelPosition,
    mod,
    ...others
  } = props;

  const getStyles = useStyles<DividerFactory>({
    name: 'Divider',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <Box
      ref={ref}
      mod={[{ orientation, 'with-label': !!label }, mod]}
      {...getStyles('root')}
      {...others}
      role="separator"
    >
      {label && (
        <Box component="span" mod={{ position: labelPosition }} {...getStyles('label')}>
          {label}
        </Box>
      )}
    </Box>
  );
});

Divider.classes = classes;
Divider.displayName = '@mantine/core/Divider';
