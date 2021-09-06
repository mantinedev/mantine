import React from 'react';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  itRendersChildren,
} from '@mantine/tests';
import { Chip } from './Chip';

const defaultProps = {
  children: 'test-chip',
};

describe('@mantine/core/Chip', () => {
  itSupportsClassName(Chip, defaultProps);
  itSupportsOthers(Chip, defaultProps);
  itRendersChildren(Chip, defaultProps);
  itSupportsRef(Chip, defaultProps, HTMLInputElement, 'elementRef');

  it('has correct displayName', () => {
    expect(Chip.displayName).toEqual('@mantine/core/Chip');
  });
});
