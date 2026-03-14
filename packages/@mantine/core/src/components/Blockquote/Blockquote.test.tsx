import { tests } from '@mantine-tests/core';
import { Blockquote, BlockquoteProps, BlockquoteStylesNames } from './Blockquote';

const defaultProps: BlockquoteProps = {
  icon: 'test-icon',
};

describe('@mantine/core/Blockquote', () => {
  tests.itSupportsSystemProps<BlockquoteProps, BlockquoteStylesNames>({
    component: Blockquote,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Blockquote',
    stylesApiSelectors: ['root', 'icon'],
  });
});
