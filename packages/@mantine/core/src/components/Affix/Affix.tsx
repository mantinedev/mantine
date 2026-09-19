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

  /** Affix position on screen @default { bottom: 0, right: 0 } @category appearance */
  position?: AffixPosition;

  /** If set, `env(safe-area-inset-*)` values are added to the `position` offsets @default false @category appearance */
  withSafeArea?: boolean;
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

function getPositionOffset(
  value: AffixPosition[keyof AffixPosition],
  side: keyof AffixPosition,
  withSafeArea: boolean | undefined
) {
  const offset = getSpacing(value);

  if (!withSafeArea || offset === undefined) {
    return offset;
  }

  return `calc(${offset} + env(safe-area-inset-${side}, 0px))`;
}

const varsResolver = createVarsResolver<AffixFactory>((_, { zIndex, position, withSafeArea }) => ({
  root: {
    '--affix-z-index': zIndex?.toString(),
    '--affix-top': getPositionOffset(position?.top, 'top', withSafeArea),
    '--affix-left': getPositionOffset(position?.left, 'left', withSafeArea),
    '--affix-bottom': getPositionOffset(position?.bottom, 'bottom', withSafeArea),
    '--affix-right': getPositionOffset(position?.right, 'right', withSafeArea),
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
    withSafeArea,
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
Affix.varsResolver = varsResolver;
Affix.displayName = '@mantine/core/Affix';

export namespace Affix {
  export type Props = AffixProps;
  export type StylesNames = AffixStylesNames;
  export type CssVariables = AffixCssVariables;
  export type Factory = AffixFactory;
}
