import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@mantine/tests';
import { Box, BoxProps } from './Box';

const defaultProps: BoxProps<'div'> = {};

describe('@mantine/core/Box', () => {
  itRendersChildren(Box, defaultProps);
  itIsPolymorphic(Box, defaultProps);
  itSupportsSystemProps({
    component: Box,
    props: defaultProps,
    displayName: '@mantine/core/Box',
    refType: HTMLDivElement,
  });
});
