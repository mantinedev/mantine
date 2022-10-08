import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { ScrollArea, ScrollAreaProps } from './ScrollArea';

const defaultProps: ScrollAreaProps = {};

describe('@mantine/core/ScrollArea', () => {
  itRendersChildren(ScrollArea, defaultProps);
  itSupportsSystemProps({
    component: ScrollArea,
    props: defaultProps,
    displayName: '@mantine/core/ScrollArea',
    refType: HTMLDivElement,
    providerName: 'ScrollArea',
  });
});

describe('@mantine/core/ScrollArea.Autosize', () => {
  itRendersChildren(ScrollArea.Autosize, defaultProps);
  itSupportsSystemProps({
    component: ScrollArea.Autosize,
    props: defaultProps,
    displayName: '@mantine/core/ScrollAreaAutosize',
    refType: HTMLDivElement,
    providerName: 'ScrollAreaAutosize',
  });
});
