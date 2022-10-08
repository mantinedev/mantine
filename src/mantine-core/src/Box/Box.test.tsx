import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@mantine/tests';
import { Box, BoxProps } from './Box';

const defaultProps: BoxProps = {};

describe('@mantine/core/Box', () => {
  itRendersChildren(Box as any, defaultProps);
  itIsPolymorphic(Box as any, defaultProps);
  itSupportsSystemProps({
    component: Box,
    props: defaultProps,
    displayName: '@mantine/core/Box',
    refType: HTMLDivElement,
  });
});
