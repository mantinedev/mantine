import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { Stack, StackProps } from './Stack';

const defaultProps: StackProps = {};

describe('@mantine/core/Stack', () => {
  itRendersChildren(Stack, defaultProps);
  itSupportsSystemProps({
    component: Stack,
    props: defaultProps,
    displayName: '@mantine/core/Stack',
    refType: HTMLDivElement,
  });
});
