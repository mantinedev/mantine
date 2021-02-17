import React from 'react';
import { shallow, unwrapForwardedRef } from '@mantine/tests';
import { ActionIcon } from './ActionIcon';

describe('@mantine/core/ActionIcon', () => {
  it('has correct displayName', () => {
    expect(ActionIcon.displayName).toEqual('@mantine/core/ActionIcon');
  });

  it('accepts className from props', () => {
    const element = unwrapForwardedRef(shallow(<ActionIcon className="test-class-name" />));
    expect(element.hasClass('test-class-name')).toBe(true);
  });
});
