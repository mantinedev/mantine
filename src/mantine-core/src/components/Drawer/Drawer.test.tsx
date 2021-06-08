import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsStylesApi,
} from '@mantine/tests';
import { GroupedTransition } from '../Transition/Transition';
import { Paper } from '../Paper/Paper';
import { Overlay } from '../Overlay/Overlay';
import { MantineDrawer, Drawer } from './Drawer';
import { Drawer as DrawerStylesApi } from './styles.api';

const defaultProps = {
  opened: true,
  onClose: () => {},
};

describe('@mantine/core/Drawer', () => {
  checkAccessibility([
    mount(
      <MantineDrawer
        opened
        onClose={() => {}}
        aria-labelledby="drawer-title"
        aria-describedby="drawer-body"
      >
        <h1 id="drawer-title">Title</h1>
        <div id="drawer-body">Body</div>
      </MantineDrawer>
    ),
  ]);

  itSupportsClassName(MantineDrawer, defaultProps);
  itRendersChildren(MantineDrawer, defaultProps);
  itSupportsOthers(MantineDrawer, defaultProps);
  itSupportsStyle(MantineDrawer, defaultProps);
  itSupportsStylesApi(MantineDrawer, defaultProps, Object.keys(DrawerStylesApi), 'drawer');

  it('passes transition, transitionDuration and transitionTimingFunction to GropedTransition component', () => {
    const element = shallow(
      <MantineDrawer
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
    const element = mount(<MantineDrawer {...defaultProps} padding="xs" shadow="xl" />);
    expect(element.find(Paper).prop('shadow')).toBe('xl');
    expect(element.find(Paper).prop('padding')).toBe('xs');
  });

  it('passes color and opacity to Overlay component', () => {
    const element = mount(
      <MantineDrawer {...defaultProps} overlayColor="red" overlayOpacity={0.99} />
    );
    expect(element.find(Overlay).prop('color')).toBe('red');
    expect(element.find(Overlay).prop('opacity')).toBe(0.99);
  });

  it('sets correct z-index on drawer and overlay', () => {
    const element = mount(<MantineDrawer {...defaultProps} zIndex={547} />);
    expect(element.find(Paper).prop('style').zIndex).toBe(548);
    expect(element.find(Overlay).prop('zIndex')).toBe(547);
  });

  it('does not render overlay if noOverlay prop is set to true', () => {
    const element = mount(<MantineDrawer {...defaultProps} noOverlay />);
    expect(element.find(Overlay)).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Drawer.displayName).toEqual('@mantine/core/Drawer');
  });
});
