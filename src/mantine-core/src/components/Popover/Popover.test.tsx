import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { Popover } from './Popover';
import { PopoverBody } from './PopoverBody/PopoverBody';

const defaultProps = {
  opened: true,
  onClose: () => {},
  withArrow: true,
  withCloseButton: true,
  withinPortal: false,
  target: 'test-control',
  children: 'test-content',
  title: 'test-title',
};

describe('@mantine/core/Popover', () => {
  itSupportsClassName(Popover, defaultProps);
  itSupportsOthers(Popover, defaultProps);
  itSupportsStyle(Popover, defaultProps);

  it('passes props to PopoverBody', () => {
    const element = shallow(
      <Popover
        {...defaultProps}
        shadow="xl"
        radius="sm"
        spacing="lg"
        withCloseButton
        title="test-popover"
        closeButtonLabel="test-close-label"
        width={234}
      />
    );

    const props = element.find(PopoverBody).props();
    expect(props.shadow).toBe('xl');
    expect(props.radius).toBe('sm');
    expect(props.spacing).toBe('lg');
    expect(props.withCloseButton).toBe(true);
    expect(props.title).toBe('test-popover');
    expect(props.closeButtonLabel).toBe('test-close-label');
    expect(props.width).toBe(234);
  });

  it('has correct displayName', () => {
    expect(Popover.displayName).toEqual('@mantine/core/Popover');
  });
});
