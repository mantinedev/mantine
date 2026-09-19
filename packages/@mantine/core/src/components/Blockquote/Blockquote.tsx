import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  MantineColor,
  MantineTheme,
  parseThemeColor,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Blockquote.module.css';

export type BlockquoteStylesNames = 'root' | 'icon' | 'cite';
export type BlockquoteCssVariables = {
  root: '--bq-bd' | '--bq-icon-color' | '--bq-icon-size' | '--bq-text-wrap';
};

export interface BlockquoteProps
  extends BoxProps, StylesApiProps<BlockquoteFactory>, ElementProps<'blockquote', 'cite'> {
  /** Blockquote icon, displayed above the quote */
  icon?: React.ReactNode;

  /** Controls icon `width`, `height` and `font-size`, numbers are converted to rem @default 24 */
  iconSize?: number | string;

  /** Key of `theme.colors` or any valid CSS color, controls accent line and icon colors @default theme.primaryColor */
  color?: MantineColor;

  /** Reference to a cited quote */
  cite?: React.ReactNode;

  /** Controls `text-wrap` CSS property */
  textWrap?: 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'stable';
}

export type BlockquoteFactory = Factory<{
  props: BlockquoteProps;
  ref: HTMLQuoteElement;
  stylesNames: BlockquoteStylesNames;
  vars: BlockquoteCssVariables;
}>;

const defaultProps = {
  iconSize: 24,
} satisfies Partial<BlockquoteProps>;

function getAccentColor(color: string, theme: MantineTheme) {
  const parsed = parseThemeColor({ color, theme });

  if (parsed.isThemeColor && parsed.shade === undefined) {
    return `var(--mantine-color-${parsed.color}-text)`;
  }

  return parsed.variable ? `var(${parsed.variable})` : parsed.color;
}

const varsResolver = createVarsResolver<BlockquoteFactory>(
  (theme, { color, iconSize, textWrap }) => {
    const resolvedColor = color || theme.primaryColor;

    return {
      root: {
        '--bq-bd': getThemeColor(resolvedColor, theme),
        '--bq-icon-color': getAccentColor(resolvedColor, theme),
        '--bq-icon-size': rem(iconSize),
        '--bq-text-wrap': textWrap,
      },
    };
  }
);

export const Blockquote = factory<BlockquoteFactory>((_props) => {
  const props = useProps('Blockquote', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    icon,
    iconSize,
    cite,
    textWrap,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<BlockquoteFactory>({
    name: 'Blockquote',
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
    <Box component="blockquote" {...getStyles('root')} {...others}>
      {icon && (
        <span {...getStyles('icon')} aria-hidden>
          {icon}
        </span>
      )}
      {children}
      {cite && <cite {...getStyles('cite')}>{cite}</cite>}
    </Box>
  );
});

Blockquote.classes = classes;
Blockquote.varsResolver = varsResolver;
Blockquote.displayName = '@mantine/core/Blockquote';

export namespace Blockquote {
  export type Props = BlockquoteProps;
  export type StylesNames = BlockquoteStylesNames;
  export type CssVariables = BlockquoteCssVariables;
  export type Factory = BlockquoteFactory;
}
