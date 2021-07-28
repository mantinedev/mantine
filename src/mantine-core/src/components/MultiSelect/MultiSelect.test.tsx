import React from 'react';
import { mount } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  checkAccessibility,
} from '@mantine/tests';
import { MultiSelect } from './MultiSelect';

const defaultProps = {
  data: ['React', 'Angular', 'Svelte', 'Vue'],
  defaultValue: ['React', 'Angular'],
};

describe('@mantine/core/MultiSelect', () => {
  itSupportsClassName(MultiSelect, defaultProps);
  itSupportsStyle(MultiSelect, defaultProps);
  itSupportsRef(MultiSelect, defaultProps, HTMLInputElement, 'elementRef');
  checkAccessibility([
    mount(<MultiSelect {...defaultProps} label="test-label" />),
    mount(<MultiSelect {...defaultProps} label="test-label" defaultValue={[]} />),
    mount(<MultiSelect {...defaultProps} label="test-label" initiallyOpened />),
    mount(
      <MultiSelect
        {...defaultProps}
        aria-label="test-label"
        clearable
        clearButtonLabel="Clear field"
      />
    ),
  ]);

  it('has correct displayName', () => {
    expect(MultiSelect.displayName).toEqual('@mantine/core/MultiSelect');
  });
});
