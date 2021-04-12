import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
} from '@mantine/tests';
import { GroupedTransition } from '../Transition/Transition';
import { Paper } from '../Paper/Paper';
import { Overlay } from '../Overlay/Overlay';
import { Drawer } from './Drawer';

const defaultProps = {
  opened: true,
  onClose: () => {},
};

describe('@mantine/core/Drawer', () => {
  checkAccessibility([
    mount(
      <Drawer
        opened
        onClose={() => {}}
        aria-labelledby="drawer-title"
        aria-describedby="drawer-body"
      >
        <h1 id="drawer-title">Title</h1>
        <div id="drawer-body">Body</div>
      </Drawer>
    ),
  ]);

  itSupportsClassName(Drawer, defaultProps);
  itRendersChildren(Drawer, defaultProps);
  itSupportsOthers(Drawer, defaultProps);
  itSupportsStyle(Drawer, defaultProps);

  it('has correct displayName', () => {
    expect(Drawer.displayName).toEqual('@mantine/core/Drawer');
  });

  it('passes transition, transitionDuration and transitionTimingFunction to GropedTransition component', () => {
    const element = shallow(
      <Drawer
        {...defaultProps}
        transition="fade"
        transitionTimingFunction="linear"
        transitionDuration={500}
      />
    );
    expect(element.find(GroupedTransition).prop('transitions').drawer.transition).toBe('fade');
    expect(element.find(GroupedTransition).prop('transitions').drawer.duration).toBe(500);
    expect(element.find(GroupedTransition).prop('transitions').drawer.timingFunction).toBe(
      'linear'
    );
  });

  it('passes shadow and padding to Paper component', () => {
    const element = mount(<Drawer {...defaultProps} padding="xs" shadow="xl" />);
    expect(element.find(Paper).prop('shadow')).toBe('xl');
    expect(element.find(Paper).prop('padding')).toBe('xs');
  });

  it('passes color and opacity to Overlay component', () => {
    const element = mount(<Drawer {...defaultProps} overlayColor="red" overlayOpacity={0.99} />);
    expect(element.find(Overlay).prop('color')).toBe('red');
    expect(element.find(Overlay).prop('opacity')).toBe(0.99);
  });

  it('sets correct z-index on drawer and overlay', () => {
    const element = mount(<Drawer {...defaultProps} zIndex={547} />);
    expect(element.find(Paper).prop('style').zIndex).toBe(548);
    expect(element.find(Overlay).prop('zIndex')).toBe(547);
  });

  it('does not render overlay if noOverlay prop is set to true', () => {
    const element = mount(<Drawer {...defaultProps} noOverlay />);
    expect(element.find(Overlay)).toHaveLength(0);
  });
});
