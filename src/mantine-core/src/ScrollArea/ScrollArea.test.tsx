import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { ScrollArea, ScrollAreaProps } from './ScrollArea';

const defaultProps: ScrollAreaProps = {};

describe('@mantine/core/ScrollArea', () => {
  itRendersChildren(ScrollArea, defaultProps);
  itSupportsProviderVariant(ScrollArea, defaultProps, 'ScrollArea');
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
  itSupportsProviderVariant(ScrollArea.Autosize, defaultProps, 'ScrollArea');
  itSupportsSystemProps({
    component: ScrollArea.Autosize,
    props: defaultProps,
    displayName: '@mantine/core/ScrollAreaAutosize',
    refType: HTMLDivElement,
    providerName: 'ScrollAreaAutosize',
  });
});
