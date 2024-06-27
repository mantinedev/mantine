import {
  Box,
  BoxProps,
  ElementProps,
  filterProps,
  InlineStyles,
  MantineSize,
  parseStyleProps,
  polymorphicFactory,
  PolymorphicFactory,
  StyleProp,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useRandomClassName,
  useStyles,
} from '../../core';
import { FLEX_STYLE_PROPS_DATA } from './flex-props';
import classes from './Flex.module.css';

export type FlexStylesNames = 'root';

export interface FlexProps extends BoxProps, StylesApiProps<FlexFactory>, ElementProps<'div'> {
  /** `gap` CSS property */
  gap?: StyleProp<MantineSize | (string & {}) | number>;

  /** `row-gap` CSS property */
  rowGap?: StyleProp<MantineSize | (string & {}) | number>;

  /** `column-gap` CSS property */
  columnGap?: StyleProp<MantineSize | (string & {}) | number>;

  /** `align-items` CSS property */
  align?: StyleProp<React.CSSProperties['alignItems']>;

  /** `justify-content` CSS property */
  justify?: StyleProp<React.CSSProperties['justifyContent']>;

  /** `flex-wrap` CSS property */
  wrap?: StyleProp<React.CSSProperties['flexWrap']>;

  /** `flex-direction` CSS property */
  direction?: StyleProp<React.CSSProperties['flexDirection']>;
}

export type FlexFactory = PolymorphicFactory<{
  props: FlexProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: FlexStylesNames;
}>;

const defaultProps: Partial<FlexProps> = {};

export const Flex = polymorphicFactory<FlexFactory>((_props, ref) => {
  const props = useProps('Flex', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    gap,
    rowGap,
    columnGap,
    align,
    justify,
    wrap,
    direction,
    ...others
  } = props;

  const getStyles = useStyles<FlexFactory>({
    name: 'Flex',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  const theme = useMantineTheme();
  const responsiveClassName = useRandomClassName();
  const parsedStyleProps = parseStyleProps({
    styleProps: { gap, rowGap, columnGap, align, justify, wrap, direction },
    theme,
    data: FLEX_STYLE_PROPS_DATA,
  });

  return (
    <>
      {parsedStyleProps.hasResponsiveStyles && (
        <InlineStyles
          selector={`.${responsiveClassName}`}
          styles={parsedStyleProps.styles}
          media={parsedStyleProps.media}
        />
      )}
      <Box
        ref={ref}
        {...getStyles('root', {
          className: responsiveClassName,
          style: filterProps(parsedStyleProps.inlineStyles),
        })}
        {...others}
      />
    </>
  );
});

Flex.classes = classes;
Flex.displayName = '@mantine/core/Flex';
