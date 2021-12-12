import React from 'react';
import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
  itSupportsStyle,
  itSupportsOthers,
} from '@mantine/tests';
import { SimpleGrid } from './SimpleGrid';

const defaultProps = {
  cols: 2,
  children: <span>test</span>,
};

describe('@mantine/core/SimpleGrid', () => {
  itSupportsClassName(SimpleGrid, defaultProps);
  itSupportsMargins(SimpleGrid, defaultProps);
  itSupportsOthers(SimpleGrid, defaultProps);
  itSupportsStyle(SimpleGrid, defaultProps);
  itRendersChildren(SimpleGrid, defaultProps);
  itSupportsSx(SimpleGrid, defaultProps);
  itSupportsRef(SimpleGrid, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(SimpleGrid.displayName).toEqual('@mantine/core/SimpleGrid');
  });
});
