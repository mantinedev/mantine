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
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { UnstyledButton } from '../UnstyledButton';
import classes from './Burger.module.css';

export type BurgerStylesNames = 'root' | 'burger';
export type BurgerCssVariables = {
  root:
    | '--burger-color'
    | '--burger-size'
    | '--burger-line-size'
    | '--burger-transition-duration'
    | '--burger-transition-timing-function';
};

export interface BurgerProps
  extends BoxProps, StylesApiProps<BurgerFactory>, ElementProps<'button'> {
  /** Controls burger `width` and `height`, numbers are converted to rem @default 'md' */
  size?: MantineSize | (string & {}) | number | undefined;

  /** Controls height of lines, by default calculated based on `size` prop */
  lineSize?: string | number | undefined;

  /** Key of `theme.colors` of any valid CSS value, by default `theme.white` in dark color scheme and `theme.black` in light */
  color?: MantineColor | undefined;

  /** State of the burger, when `true` burger is transformed into X @default false */
  opened?: boolean | undefined;

  /** `transition-duration` property value in ms @default 300 */
  transitionDuration?: number | undefined;

  /** `transition-timing-function` property value @default 'ease' */
  transitionTimingFunction?: string | undefined;
}

export type BurgerFactory = Factory<{
  props: BurgerProps;
  ref: HTMLButtonElement;
  stylesNames: BurgerStylesNames;
  vars: BurgerCssVariables;
}>;

const varsResolver = createVarsResolver<BurgerFactory>(
  (theme, { color, size, lineSize, transitionDuration, transitionTimingFunction }) => ({
    root: {
      '--burger-color': color ? getThemeColor(color, theme) : undefined,
      '--burger-size': getSize(size, 'burger-size'),
      '--burger-line-size': lineSize ? rem(lineSize) : undefined,
      '--burger-transition-duration':
        transitionDuration === undefined ? undefined : `${transitionDuration}ms`,
      '--burger-transition-timing-function': transitionTimingFunction,
    },
  })
);

export const Burger = factory<BurgerFactory>((_props) => {
  const props = useProps('Burger', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    opened,
    children,
    transitionDuration,
    transitionTimingFunction,
    lineSize,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<BurgerFactory>({
    name: 'Burger',
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

  return (
    <UnstyledButton {...getStyles('root')} {...others}>
      <Box mod={['reduce-motion', { opened }]} {...getStyles('burger')} />
      {children}
    </UnstyledButton>
  );
});

Burger.classes = classes;
Burger.varsResolver = varsResolver;
Burger.displayName = '@mantine/core/Burger';

export namespace Burger {
  export type Props = BurgerProps;
  export type StylesNames = BurgerStylesNames;
  export type CssVariables = BurgerCssVariables;
  export type Factory = BurgerFactory;
}
