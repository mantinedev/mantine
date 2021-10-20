import React from 'react';
import { shallow } from 'enzyme';
import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  itSupportsRef,
} from '@mantine/tests';
import { PopoverBody } from './PopoverBody';
import { Popover as PopoverBodyStylesApi } from '../styles.api';

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

const excludedNames = ['root', 'wrapper', 'arrow', 'target'];

describe('@mantine/core/PopoverBody', () => {
  itRendersChildren(PopoverBody, defaultProps);
  itSupportsClassName(PopoverBody, defaultProps);
  itSupportsOthers(PopoverBody, defaultProps);
  itSupportsStyle(PopoverBody, defaultProps);
  itSupportsRef(PopoverBody, defaultProps, HTMLDivElement);
  itSupportsStylesApi(
    PopoverBody,
    defaultProps,
    Object.keys(PopoverBodyStylesApi).filter((key) => !excludedNames.includes(key)),
    'Popover'
  );

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

  it('renders title based on title prop', () => {
    const element = shallow(<PopoverBody {...defaultProps} title="test-title" />).render();
    expect(element.find('.mantine-Popover-title').text()).toBe('test-title');
  });

  it('does not render header if title is not passed', () => {
    const withoutHeader = shallow(<PopoverBody {...defaultProps} title={null} />).render();
    const withHeader = shallow(<PopoverBody {...defaultProps} title="Hello" />).render();
    expect(withoutHeader.find('.mantine-Popover-header')).toHaveLength(0);
    expect(withHeader.find('.mantine-Popover-header')).toHaveLength(1);
  });

  it('has correct displayName', () => {
    expect(PopoverBody.displayName).toEqual('@mantine/core/PopoverBody');
  });
});
