import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
} from '@mantine/tests';
import { Transition } from '../Transition/Transition';
import { Popover } from './Popover';

const defaultProps = {
  opened: true,
  onClose: () => {},
  target: 'test-control',
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

  it('correctly handles id prop', () => {
    const element = shallow(<Popover {...defaultProps} title="test-title" id="test-id" />).render();
    const popover = element.find('[data-mantine-popover]');

    expect(element.attr('id')).toBe('test-id');
    expect(element.find('[data-mantine-popover-title]').attr('id')).toBe('test-id-title');
    expect(element.find('[data-mantine-popover-body]').attr('id')).toBe('test-id-body');
    expect(popover.attr('aria-labelledby')).toBe('test-id-title');
    expect(popover.attr('aria-describedby')).toBe('test-id-body');
  });

  it('passes transition, duration and timingFunction to Transition component', () => {
    const transition = shallow(
      <Popover
        {...defaultProps}
        transition="skew-down"
        transitionDuration={468}
        transitionTimingFunction="ease"
      />
    ).find(Transition);

    expect(transition.prop('duration')).toBe(468);
    expect(transition.prop('timingFunction')).toBe('ease');
    expect(transition.prop('transition')).toBe('skew-down');
  });

  it('render popover arrow based on withArrow prop', () => {
    const withArrow = shallow(<Popover {...defaultProps} withArrow />).render();
    const withoutArrow = shallow(<Popover {...defaultProps} withArrow={false} />).render();

    expect(withArrow.find('[data-mantine-popover-arrow]')).toHaveLength(1);
    expect(withoutArrow.find('[data-mantine-popover-arrow]')).toHaveLength(0);
  });

  it('renders close button based on noCloseButton prop', () => {
    const withCloseButton = shallow(<Popover {...defaultProps} noCloseButton={false} />).render();
    const withoutCloseButton = shallow(<Popover {...defaultProps} noCloseButton />).render();

    expect(withCloseButton.find('[data-mantine-popover-close]')).toHaveLength(1);
    expect(withoutCloseButton.find('[data-mantine-popover-close]')).toHaveLength(0);
  });

  it('sets correct close button label', () => {
    const element = shallow(
      <Popover {...defaultProps} noCloseButton={false} closeButtonLabel="test-close" />
    ).render();

    expect(element.find('[data-mantine-popover-close]').attr('aria-label')).toBe('test-close');
  });

  it('renders title based on title prop', () => {
    const element = shallow(<Popover {...defaultProps} title="test-title" />).render();
    expect(element.find('[data-mantine-popover-title]').text()).toBe('test-title');
  });

  it('renders given target', () => {
    const element = shallow(<Popover {...defaultProps} target="test-target" />).render();
    expect(element.find('[data-mantine-popover-target]').text()).toBe('test-target');
  });

  it('has correct displayName', () => {
    expect(Popover.displayName).toEqual('@mantine/core/Popover');
  });
});
