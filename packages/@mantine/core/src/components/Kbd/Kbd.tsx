import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Kbd.module.css';

export type KbdStylesNames = 'root';
export type KbdCssVariables = {
  root: '--kbd-padding' | '--kbd-fz';
};

export interface KbdProps extends BoxProps, StylesApiProps<KbdFactory>, ElementProps<'kbd'> {
  /** Controls font-size and padding, `'sm'` by default */
  size?: MantineSize | (string & {});
}

export type KbdFactory = Factory<{
  props: KbdProps;
  ref: HTMLElement;
  stylesNames: KbdStylesNames;
  vars: KbdCssVariables;
}>;

const defaultProps: Partial<KbdProps> = {};

const varsResolver = createVarsResolver<KbdFactory>((_, { size }) => ({
  root: {
    '--kbd-fz': getSize(size, 'kbd-fz'),
    '--kbd-padding': getSize(size, 'kbd-padding'),
  },
}));

export const Kbd = factory<KbdFactory>((_props, ref) => {
  const props = useProps('Kbd', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<KbdFactory>({
    name: 'Kbd',
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

  return <Box component="kbd" ref={ref} {...getStyles('root')} {...others} />;
});

Kbd.classes = classes;
Kbd.displayName = '@mantine/core/Kbd';
