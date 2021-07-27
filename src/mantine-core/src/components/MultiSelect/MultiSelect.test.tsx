// import React from 'react';
import { itSupportsClassName, itSupportsRef, itSupportsStyle } from '@mantine/tests';
import { MultiSelect } from './MultiSelect';

const defaultProps = {
  data: ['React', 'Angular', 'Svelte', 'Vue'],
  defaultValue: ['React', 'Angular'],
};

describe('@mantine/core/MultiSelect', () => {
  itSupportsClassName(MultiSelect, defaultProps);
  itSupportsStyle(MultiSelect, defaultProps);
  itSupportsRef(MultiSelect, defaultProps, HTMLInputElement, 'elementRef');

  it('has correct displayName', () => {
    expect(MultiSelect.displayName).toEqual('@mantine/core/MultiSelect');
  });
});
