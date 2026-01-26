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
  root: '--kbd-fz';
};

export interface KbdProps extends BoxProps, StylesApiProps<KbdFactory>, ElementProps<'kbd'> {
  /** Controls `font-size` and `padding` @default 'sm' */
  size?: MantineSize | number | (string & {});
}

export type KbdFactory = Factory<{
  props: KbdProps;
  ref: HTMLElement;
  stylesNames: KbdStylesNames;
  vars: KbdCssVariables;
}>;

const varsResolver = createVarsResolver<KbdFactory>((_, { size }) => ({
  root: { '--kbd-fz': getSize(size, 'kbd-fz') },
}));

export const Kbd = factory<KbdFactory>((_props) => {
  const props = useProps('Kbd', null, _props);
  const { classNames, className, style, styles, unstyled, vars, attributes, ...others } = props;

  const getStyles = useStyles<KbdFactory>({
    name: 'Kbd',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  return <Box component="kbd" {...getStyles('root')} {...others} />;
});

Kbd.classes = classes;
Kbd.displayName = '@mantine/core/Kbd';
