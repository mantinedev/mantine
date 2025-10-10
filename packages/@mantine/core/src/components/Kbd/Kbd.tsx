import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  MantineSize,
  MantineResponsiveSize,
  StylesApiProps,
  useProps,
  useStyles,
  useMantineTheme,
  InlineStyles,
  isResponsiveSize,
  createResponsiveSizeVariables,
} from '../../core';
import classes from './Kbd.module.css';

export type KbdStylesNames = 'root';
export type KbdCssVariables = {
  root: '--kbd-fz';
};

export interface KbdProps extends BoxProps, StylesApiProps<KbdFactory>, ElementProps<'kbd'> {
  /** Controls `font-size` and `padding` @default `'sm'` */
  size?: MantineResponsiveSize | number | (string & {});
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

export const Kbd = factory<KbdFactory>((_props, ref) => {
  const props = useProps('Kbd', null, _props);
  const { classNames, className, style, styles, unstyled, vars, attributes, size, ...others } = props;

  const theme = useMantineTheme();

  // Handle responsive size properties
  const sizeVars = isResponsiveSize(size) 
    ? createResponsiveSizeVariables({ size, property: '--kbd-fz', getter: (s) => getSize(s, 'kbd-fz'), theme })
    : { base: {}, media: [] };

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
    vars: {
      ...vars,
      ...sizeVars.base,
    },
    varsResolver,
  });

  return (
    <>
      {sizeVars.media.length > 0 && (
        <InlineStyles
          selector={`.${getStyles('root').className.split(' ')[0]}`}
          media={sizeVars.media}
        />
      )}
      <Box component="kbd" ref={ref} {...getStyles('root')} {...others} />
    </>
  );
});

Kbd.classes = classes;
Kbd.displayName = '@mantine/core/Kbd';
