import React from 'react';
import { mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
} from '@mantine/tests';
import { CloseButton } from './CloseButton';
import { CloseIcon } from './CloseIcon';

describe('@mantine/core/CloseButton', () => {
  checkAccessibility([
    mount(<CloseButton aria-label="test" />),
    mount(<CloseButton title="test" />),
  ]);

  itSupportsClassName(CloseButton, {});
  itSupportsOthers(CloseButton, {});
  itSupportsStyle(CloseButton, {});
  itSupportsRef(CloseButton, {}, HTMLButtonElement, 'elementRef');

  it('has correct displayName', () => {
    expect(CloseButton.displayName).toEqual('@mantine/core/CloseButton');
    expect(CloseIcon.displayName).toEqual('@mantine/core/CloseIcon');
  });
});
