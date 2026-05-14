import {
  MantineColor,
  MantineTheme,
  polymorphicFactory,
  PolymorphicFactory,
  useProps,
} from '../../core';
import { Mark } from '../Mark';
import { Text, TextProps, TextStylesNames, TextVariant } from '../Text';
import { foldAccents, highlighter } from './highlighter/highlighter';

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
   * - Matching is case-insensitive and accent-insensitive by default, use `caseInsensitive` and `accentInsensitive` props to control this behavior
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

  /**
   * Perform case-insensitive matching.
   * @default true
   */
  caseInsensitive?: boolean;

  /**
   * Perform accent-insensitive matching.
   * When enabled cafe will match cafe, café, cafè, etc.
   * @default true
   */
  accentInsensitive?: boolean;
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
  caseInsensitive: true,
  accentInsensitive: true,
} satisfies Partial<HighlightProps>;

export const Highlight = polymorphicFactory<HighlightFactory>((_props) => {
  const {
    unstyled,
    children,
    highlight,
    highlightStyles,
    color,
    wholeWord,
    caseInsensitive,
    accentInsensitive,
    ...others
  } = useProps('Highlight', defaultProps, _props);

  const isTermArray = Array.isArray(highlight) && typeof highlight[0] === 'object';
  const colorMap = new Map<string, string>();

  const normalizeKey = (s: string) => {
    let key = s;
    if (caseInsensitive) {
      key = key.toLowerCase();
    }
    if (accentInsensitive) {
      key = foldAccents(key);
    }
    return key;
  };

  let highlightStrings: string[];
  if (isTermArray) {
    highlightStrings = (highlight as HighlightTerm[]).map((term) => {
      if (term.color) {
        colorMap.set(normalizeKey(term.text), term.color);
      }
      return term.text;
    });
  } else if (Array.isArray(highlight)) {
    highlightStrings = highlight as string[];
  } else {
    highlightStrings = [highlight as string];
  }

  const highlightChunks = highlighter(children, highlightStrings, {
    wholeWord,
    caseInsensitive,
    accentInsensitive,
  });

  return (
    <Text unstyled={unstyled} {...others} __staticSelector="Highlight">
      {highlightChunks.map(({ chunk, highlighted }, i) =>
        highlighted ? (
          <Mark
            unstyled={unstyled}
            key={i}
            color={colorMap.get(normalizeKey(chunk)) || color}
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

export namespace Highlight {
  export type Props = HighlightProps;
  export type Factory = HighlightFactory;
  export type Term = HighlightTerm;
}
