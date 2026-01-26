import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getDefaultZIndex,
  getSpacing,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { BasePortalProps, OptionalPortal } from '../Portal';
import classes from './Affix.module.css';

export type AffixStylesNames = 'root';
export type AffixCssVariables = {
  root: '--affix-z-index' | '--affix-top' | '--affix-left' | '--affix-bottom' | '--affix-right';
};

export interface AffixPosition {
  top?: MantineSize | (string & {}) | number;
  left?: MantineSize | (string & {}) | number;
  bottom?: MantineSize | (string & {}) | number;
  right?: MantineSize | (string & {}) | number;
}

export interface AffixBaseProps {
  /** Root element `z-index` property @default 200  */
  zIndex?: React.CSSProperties['zIndex'];

  /** Determines whether the component is rendered within `Portal` @default true */
  withinPortal?: boolean;

  /** Props passed down to the `Portal` component. Ignored when `withinPortal` is `false`. */
  portalProps?: BasePortalProps;

  /** Affix position on screen @default { bottom: 0, right: 0 } */
  position?: AffixPosition;
}

export interface AffixProps
  extends BoxProps, AffixBaseProps, StylesApiProps<AffixFactory>, ElementProps<'div'> {}

export type AffixFactory = Factory<{
  props: AffixProps;
  ref: HTMLDivElement;
  stylesNames: AffixStylesNames;
  vars: AffixCssVariables;
}>;

const defaultProps = {
  position: { bottom: 0, right: 0 },
  zIndex: getDefaultZIndex('modal'),
  withinPortal: true,
} satisfies Partial<AffixProps>;

const varsResolver = createVarsResolver<AffixFactory>((_, { zIndex, position }) => ({
  root: {
    '--affix-z-index': zIndex?.toString(),
    '--affix-top': getSpacing(position?.top),
    '--affix-left': getSpacing(position?.left),
    '--affix-bottom': getSpacing(position?.bottom),
    '--affix-right': getSpacing(position?.right),
  },
}));

export const Affix = factory<AffixFactory>((_props) => {
  const props = useProps('Affix', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    portalProps,
    zIndex,
    withinPortal,
    position,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<AffixFactory>({
    name: 'Affix',
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
    <OptionalPortal {...portalProps} withinPortal={withinPortal}>
      <Box {...getStyles('root')} {...others} />
    </OptionalPortal>
  );
});

Affix.classes = classes;
Affix.displayName = '@mantine/core/Affix';
