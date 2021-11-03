import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsStyle, itSupportsRef, itSupportsOthers } from '@mantine/tests';
import { TabControl } from './TabControl';

const defaultProps = { active: true, tabProps: { label: 'test', icon: '$' } };

describe('@mantine/core/TabControl', () => {
  itSupportsStyle(TabControl, defaultProps);
  itSupportsOthers(TabControl, defaultProps);
  itSupportsRef(TabControl, defaultProps, HTMLButtonElement, 'buttonRef');

  it('sets correct accessibility attributes based on active prop', () => {
    const active = shallow(<TabControl {...defaultProps} active />).render();
    const inactive = shallow(<TabControl {...defaultProps} active={false} />).render();

    expect(active.attr('tabindex')).toBe('0');
    expect(active.attr('role')).toBe('tab');
    expect(active.attr('aria-selected')).toBe('true');

    expect(inactive.attr('tabindex')).toBe('-1');
    expect(inactive.attr('aria-selected')).toBe('false');
  });

  it('renders icon from tabProps', () => {
    const withIcon = shallow(<TabControl {...defaultProps} tabProps={{ icon: '$' }} />).render();

    const withoutIcon = shallow(
      <TabControl {...defaultProps} tabProps={{ icon: null, label: 'test' }} />
    ).render();

    expect(withIcon.find('.mantine-Tabs-tabIcon').text()).toBe('$');
    expect(withoutIcon.find('.mantine-Tabs-tabIcon')).toHaveLength(0);
  });

  it('renders label from tabProps', () => {
    const withLabel = shallow(
      <TabControl {...defaultProps} tabProps={{ label: 'test' }} />
    ).render();

    const withoutLabel = shallow(
      <TabControl {...defaultProps} tabProps={{ icon: '$', label: null }} />
    ).render();

    expect(withLabel.find('.mantine-Tabs-tabLabel').text()).toBe('test');
    expect(withoutLabel.find('.mantine-Tabs-tabLabel')).toHaveLength(0);
  });

  it('spreads tabProps to root element', () => {
    const element = shallow(
      <TabControl
        {...defaultProps}
        tabProps={{
          label: 'test',
          disabled: true,
          title: 'test-title',
        }}
      />
    ).render();

    expect(element.attr('disabled')).toBe('disabled');
    expect(element.attr('title')).toBe('test-title');
  });

  it('has correct displayName', () => {
    expect(TabControl.displayName).toEqual('@mantine/core/TabControl');
  });
});
