import { tests } from '@mantine/tests';
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
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    refType: HTMLElement,
    displayName: '@mantine/core/InlineCodeHighlight',
    stylesApiSelectors: ['code'],
  });
});
