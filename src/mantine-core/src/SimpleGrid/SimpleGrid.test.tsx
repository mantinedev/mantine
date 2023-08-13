import React from 'react';
import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { SimpleGrid, SimpleGridProps } from './SimpleGrid';

const defaultProps: SimpleGridProps = {
  cols: 2,
  children: <span>test</span>,
};

describe('@mantine/core/SimpleGrid', () => {
  itRendersChildren(SimpleGrid, defaultProps);
  itSupportsProviderVariant(SimpleGrid, defaultProps, 'SimpleGrid');
  itSupportsSystemProps({
    component: SimpleGrid,
    props: defaultProps,
    displayName: '@mantine/core/SimpleGrid',
    refType: HTMLDivElement,
    providerName: 'SimpleGrid',
  });
});
