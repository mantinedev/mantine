import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getThemeColor,
  MantineColor,
  MantineRadius,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { CodeHighlight } from './CodeHighlight';
import classes from '../CodeHighlight.module.css';

export type InlineCodeHighlightStylesNames = 'inlineCodeHighlight';
export type InlineCodeHighlightCssVariables = {
  inlineCodeHighlight: '--ch-background' | '--ch-radius';
};

export interface InlineCodeHighlightProps
  extends BoxProps,
    StylesApiProps<InlineCodeHighlightFactory>,
    ElementProps<'code'> {
  /** Code to highlight */
  code: string;

  /** Language of the code, used to determine syntax highlighting */
  language?: string;

  /** Controls background color of the code. By default, the value depends on color scheme. */
  background?: MantineColor;

  /**
   * Key of `theme.radius` or any valid CSS value to set border-radius
   *
   * @default `'sm'`
   */
  radius?: MantineRadius;

  /**
   * Adds border to the root element
   *
   * @default `false`
   */
  withBorder?: boolean;
}

export type InlineCodeHighlightFactory = Factory<{
  props: InlineCodeHighlightProps;
  ref: HTMLElement;
  stylesNames: InlineCodeHighlightStylesNames;
  vars: InlineCodeHighlightCssVariables;
}>;

const varsResolver = createVarsResolver<InlineCodeHighlightFactory>(
  (theme, { background, radius }) => ({
    inlineCodeHighlight: {
      '--ch-background': background ? getThemeColor(background, theme) : undefined,
      '--ch-radius': typeof radius !== 'undefined' ? getRadius(radius) : undefined,
    },
  })
);

export const InlineCodeHighlight = factory<InlineCodeHighlightFactory>((_props, ref) => {
  const props = useProps('InlineCodeHighlight', null, _props);
  const { classNames, className, style, styles, unstyled, vars, attributes, ...others } = props;

  const getStyles = useStyles<InlineCodeHighlightFactory>({
    name: 'InlineCodeHighlight',
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
    rootSelector: 'inlineCodeHighlight',
  });

  return (
    <CodeHighlight {...others} ref={ref as any} {...getStyles('inlineCodeHighlight')} __inline />
  );
});

InlineCodeHighlight.displayName = '@mantine/code-highlight/InlineCodeHighlight';
InlineCodeHighlight.classes = classes;
