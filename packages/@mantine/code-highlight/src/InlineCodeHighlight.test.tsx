import { tests } from '@mantine-tests/core';
import {
  InlineCodeHighlight,
  InlineCodeHighlightProps,
  InlineCodeHighlightStylesNames,
} from './InlineCodeHighlight';

const defaultProps: InlineCodeHighlightProps = {
  code: 'test-code',
};

describe('@mantine/code-highlight/InlineCodeHighlight', () => {
  tests.itSupportsSystemProps<InlineCodeHighlightProps, InlineCodeHighlightStylesNames>({
    component: InlineCodeHighlight,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    refType: HTMLElement,
    displayName: '@mantine/core/InlineCodeHighlight',
    stylesApiSelectors: ['code'],
  });
});
