import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsStylesApi,
} from '@mantine/tests';
import { Autocomplete } from './Autocomplete';
import { Autocomplete as AutocompleteStylesApi } from './styles.api';

const defaultProps = {
  initiallyOpened: true,
  label: 'Test',
  data: [{ value: 'test-1' }, { value: 'test-2' }],
};

describe('@mantine/core/Autocomplete', () => {
  itSupportsClassName(Autocomplete, defaultProps);
  itSupportsStyle(Autocomplete, defaultProps);
  itSupportsRef(Autocomplete, defaultProps, HTMLInputElement, 'elementRef');

  checkAccessibility([
    mount(<Autocomplete {...defaultProps} />),
    mount(<Autocomplete {...defaultProps} initiallyOpened={false} />),
  ]);

  itSupportsStylesApi(
    Autocomplete,
    {
      ...defaultProps,
      icon: '$',
      rightSection: '$',
      label: 'test-label',
      error: 'test-error',
      description: 'test-description',
      required: true,
    },
    Object.keys(AutocompleteStylesApi).filter((key) => key !== 'hovered'),
    'autocomplete'
  );

  it('has correct displayName', () => {
    expect(Autocomplete.displayName).toEqual('@mantine/core/Autocomplete');
  });
});
