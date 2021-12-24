import React from 'react';
import { shallow } from 'enzyme';
import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
} from '@mantine/tests';
import { PopoverBody } from './PopoverBody';

const defaultProps = {
  onClose: () => {},
  withCloseButton: true,
  target: 'test-control',
  children: 'test-content',
  closeButtonLabel: 'test-label',
  title: 'test-title',
  shadow: 'sm',
  radius: 'sm' as const,
  spacing: 'sm' as const,
  titleId: 'test-title-id',
  bodyId: 'test-body-id',
};

describe('@mantine/core/PopoverBody', () => {
  itRendersChildren(PopoverBody, defaultProps);
  itSupportsClassName(PopoverBody, defaultProps);
  itSupportsOthers(PopoverBody, defaultProps);
  itSupportsStyle(PopoverBody, defaultProps);
  itSupportsRef(PopoverBody, defaultProps, HTMLDivElement);

  it('correctly handles id prop', () => {
    const element = shallow(
      <PopoverBody
        {...defaultProps}
        title="test-title"
        titleId="test-title-id"
        bodyId="test-body-id"
      />
    ).render();

    expect(element.find('.mantine-Popover-title').attr('id')).toBe('test-title-id');
    expect(element.find('.mantine-Popover-inner').attr('id')).toBe('test-body-id');
    expect(element.attr('aria-labelledby')).toBe('test-title-id');
    expect(element.attr('aria-describedby')).toBe('test-body-id');
  });

  it('renders close button based on withCloseButton prop', () => {
    const withCloseButton = shallow(<PopoverBody {...defaultProps} withCloseButton />).render();
    const withoutCloseButton = shallow(
      <PopoverBody {...defaultProps} withCloseButton={false} />
    ).render();

    expect(withCloseButton.find('.mantine-Popover-close')).toHaveLength(1);
    expect(withoutCloseButton.find('.mantine-Popover-close')).toHaveLength(0);
  });

  it('sets correct close button label', () => {
    const element = shallow(
      <PopoverBody {...defaultProps} withCloseButton closeButtonLabel="test-close" />
    ).render();

    expect(element.find('.mantine-Popover-close').attr('aria-label')).toBe('test-close');
  });

  it('renders header with given title', () => {
    const withoutHeader = shallow(<PopoverBody {...defaultProps} title={null} />).render();
    const withHeader = shallow(<PopoverBody {...defaultProps} title="test-title" />).render();
    expect(withoutHeader.find('.mantine-Popover-header')).toHaveLength(0);
    expect(withHeader.find('.mantine-Popover-header')).toHaveLength(1);
    expect(withHeader.find('.mantine-Popover-title').text()).toBe('test-title');
  });

  it('has correct displayName', () => {
    expect(PopoverBody.displayName).toEqual('@mantine/core/PopoverBody');
  });
});
