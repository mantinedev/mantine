import { tests } from '@mantine-tests/core';
import { ScrollArea, ScrollAreaProps, ScrollAreaStylesNames } from './ScrollArea';

const defaultProps: ScrollAreaProps = {
  type: 'always',
  children: 'test',
};

describe('@mantine/core/ScrollArea', () => {
  tests.itSupportsSystemProps<ScrollAreaProps, ScrollAreaStylesNames>({
    component: ScrollArea,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/ScrollArea',
    stylesApiSelectors: ['root', 'viewport'],
  });
});

describe('@mantine/core/ScrollAreaAutosize', () => {
  tests.itSupportsSystemProps<ScrollAreaProps, ScrollAreaStylesNames>({
    component: ScrollArea.Autosize,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/ScrollAreaAutosize',
  });
});
