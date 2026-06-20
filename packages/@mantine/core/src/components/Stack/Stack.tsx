import {
  Box,
  BoxProps,
  ElementProps,
  Factory,
  factory,
  filterProps,
  hashStyleProps,
  InlineStyles,
  MantineSpacing,
  parseStyleProps,
  StyleProp,
  StylesApiProps,
  SystemPropData,
  useMantineDeduplicateInlineStyles,
  useMantineTheme,
  useProps,
  useRandomClassName,
  useStyles,
} from '../../core';
import classes from './Stack.module.css';

export type StackStylesNames = 'root';
export type StackCssVariables = {
  root: '--stack-gap' | '--stack-align' | '--stack-justify';
};

export interface StackProps extends BoxProps, StylesApiProps<StackFactory>, ElementProps<'div'> {
  /** Key of `theme.spacing` or any valid CSS value to set `gap` property, numbers are converted to rem @default 'md' */
  gap?: StyleProp<MantineSpacing>;

  /** Controls `align-items` CSS property @default 'stretch' */
  align?: StyleProp<React.CSSProperties['alignItems']>;

  /** Controls `justify-content` CSS property @default 'flex-start' */
  justify?: StyleProp<React.CSSProperties['justifyContent']>;
}

export type StackFactory = Factory<{
  props: StackProps;
  ref: HTMLDivElement;
  stylesNames: StackStylesNames;
  vars: StackCssVariables;
}>;

const defaultProps = {
  gap: 'md',
  align: 'stretch',
  justify: 'flex-start',
} satisfies Partial<StackProps>;

const STACK_STYLE_PROPS_DATA: Record<string, SystemPropData> = {
  gap: { type: 'spacing', property: '--stack-gap' },
  align: { type: 'identity', property: '--stack-align' },
  justify: { type: 'identity', property: '--stack-justify' },
};

export const Stack = factory<StackFactory>((_props) => {
  const props = useProps('Stack', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    align,
    justify,
    gap,
    variant,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<StackFactory>({
    name: 'Stack',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  const theme = useMantineTheme();
  const randomClassName = useRandomClassName();
  const parsedStyleProps = parseStyleProps({
    styleProps: { gap, align, justify },
    theme,
    data: STACK_STYLE_PROPS_DATA,
  });

  const deduplicateInlineStyles = useMantineDeduplicateInlineStyles();
  const responsiveClassName =
    deduplicateInlineStyles && parsedStyleProps.hasResponsiveStyles
      ? hashStyleProps(parsedStyleProps.styles, parsedStyleProps.media)
      : randomClassName;

  return (
    <>
      {parsedStyleProps.hasResponsiveStyles && (
        <InlineStyles
          selector={`.${responsiveClassName}`}
          styles={parsedStyleProps.styles}
          media={parsedStyleProps.media}
          deduplicate={deduplicateInlineStyles}
        />
      )}
      <Box
        {...getStyles('root', {
          className: responsiveClassName,
          style: filterProps(parsedStyleProps.inlineStyles),
        })}
        variant={variant}
        {...others}
      />
    </>
  );
});

Stack.classes = classes;
Stack.displayName = '@mantine/core/Stack';

export namespace Stack {
  export type Props = StackProps;
  export type StylesNames = StackStylesNames;
  export type CssVariables = StackCssVariables;
  export type Factory = StackFactory;
}
