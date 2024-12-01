import { tests } from '@mantine-tests/core';
import {
  InlineCodeHighlight,
  InlineCodeHighlightProps,
  InlineCodeHighlightStylesNames,
} from './InlineCodeHighlight';

const defaultProps: InlineCodeHighlightProps = {
  code: 'const a = 5',
  language: 'tsx',
};

describe('@mantine/code-highlight/InlineCodeHighlight', () => {
  tests.itSupportsSystemProps<InlineCodeHighlightProps, InlineCodeHighlightStylesNames>({
    component: InlineCodeHighlight,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLElement,
    selector: '.mantine-InlineCodeHighlight-inlineCodeHighlight',
    displayName: '@mantine/code-highlight/InlineCodeHighlight',
    stylesApiSelectors: ['inlineCodeHighlight'],
  });
});
