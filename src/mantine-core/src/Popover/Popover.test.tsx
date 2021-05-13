import React from 'react';
import { mount } from 'enzyme';
import {
  checkAccessibility,
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
} from '@mantine/tests';
import { Popover } from './Popover';

const defaultProps = {
  opened: true,
  onClose: () => {},
  control: 'test-control',
  children: 'test-content',
};

describe('@mantine/core/Popover', () => {
  checkAccessibility([
    mount(
      <Popover {...defaultProps} closeButtonLabel="close popover" id="test-id" title="Test title" />
    ),
  ]);
  itRendersChildren(Popover, defaultProps);
  itSupportsClassName(Popover, defaultProps);
  itSupportsOthers(Popover, defaultProps);
  itSupportsStyle(Popover, defaultProps);

  it('has correct displayName', () => {
    expect(Popover.displayName).toEqual('@mantine/core/Popover');
  });
});
