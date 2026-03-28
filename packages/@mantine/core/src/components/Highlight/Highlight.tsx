import {
  MantineColor,
  MantineTheme,
  polymorphicFactory,
  PolymorphicFactory,
  useProps,
} from '../../core';
import { Mark } from '../Mark';
import { Text, TextProps, TextStylesNames, TextVariant } from '../Text';
import { highlighter } from './highlighter/highlighter';

export interface HighlightTerm {
  /** Text to highlight */
  text: string;

  /** Background color for this specific term. Key of `theme.colors` or any valid CSS color */
  color?: MantineColor | string;
}

export interface HighlightProps extends Omit<TextProps, 'color'> {
  /**
   * Substring(s) to highlight in `children`. Can be:
   * - string: single term
   * - string[]: multiple terms with same color
   * - HighlightTerm[]: multiple terms with custom colors per term
   *
   * - Matching is case-insensitive
   * - Regex special characters are automatically escaped
   * - When multiple substrings are provided, longer matches take precedence
   * - Empty strings and whitespace-only strings are ignored
   */
  highlight: string | string[] | HighlightTerm[];

  /**
   * Default background color for all highlighted text.
   * Key of `theme.colors` or any valid CSS color, passed to `Mark` component.
   * Can be overridden per term when using HighlightTerm objects.
   * @default 'yellow'
   */
  color?: MantineColor | string;

  /** Styles applied to `mark` elements */
  highlightStyles?: React.CSSProperties | ((theme: MantineTheme) => React.CSSProperties);

  /** String in which to highlight substrings */
  children: string;

  /**
   * Only match whole words (adds word boundaries to regex).
   * When enabled, 'the' will not match 'there'.
   * @default false
   */
  wholeWord?: boolean;
}

export type HighlightFactory = PolymorphicFactory<{
  props: HighlightProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: TextStylesNames;
  variant: TextVariant;
}>;

const defaultProps = {
  color: 'yellow',
  wholeWord: false,
} satisfies Partial<HighlightProps>;

export const Highlight = polymorphicFactory<HighlightFactory>((_props) => {
  const { unstyled, children, highlight, highlightStyles, color, wholeWord, ...others } = useProps(
    'Highlight',
    defaultProps,
    _props
  );

  const isTermArray = Array.isArray(highlight) && typeof highlight[0] === 'object';
  const colorMap = new Map<string, string>();

  let highlightStrings: string[];
  if (isTermArray) {
    highlightStrings = (highlight as HighlightTerm[]).map((term) => {
      if (term.color) {
        colorMap.set(term.text.toLowerCase(), term.color);
      }
      return term.text;
    });
  } else if (Array.isArray(highlight)) {
    highlightStrings = highlight as string[];
  } else {
    highlightStrings = [highlight as string];
  }

  const highlightChunks = highlighter(children, highlightStrings, { wholeWord });

  return (
    <Text unstyled={unstyled} {...others} __staticSelector="Highlight">
      {highlightChunks.map(({ chunk, highlighted }, i) =>
        highlighted ? (
          <Mark
            unstyled={unstyled}
            key={i}
            color={colorMap.get(chunk.toLowerCase()) || color}
            style={highlightStyles}
            data-highlight={chunk}
          >
            {chunk}
          </Mark>
        ) : (
          <span key={i}>{chunk}</span>
        )
      )}
    </Text>
  );
});

Highlight.classes = Text.classes;
Highlight.displayName = '@mantine/core/Highlight';
