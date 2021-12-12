import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsStyle,
  itSupportsRef,
  itSupportsOthers,
  itSupportsClassName,
  itSupportsMargins,
  itSupportsSx,
} from '@mantine/tests';
import { TabControl } from './TabControl';

const defaultProps = { active: true };

describe('@mantine/core/TabControl', () => {
  itSupportsStyle(TabControl, defaultProps);
  itSupportsOthers(TabControl, defaultProps);
  itSupportsSx(TabControl, defaultProps);
  itSupportsMargins(TabControl, defaultProps);
  itSupportsClassName(TabControl, defaultProps);
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

  it('renders icon', () => {
    const withIcon = shallow(<TabControl {...defaultProps} icon="$" />).render();
    const withoutIcon = shallow(<TabControl {...defaultProps} icon={null} label="test" />).render();

    expect(withIcon.find('.mantine-Tabs-tabIcon').text()).toBe('$');
    expect(withoutIcon.find('.mantine-Tabs-tabIcon')).toHaveLength(0);
  });

  it('renders label', () => {
    const withLabel = shallow(<TabControl {...defaultProps} label="test" />).render();
    const withoutLabel = shallow(<TabControl {...defaultProps} icon="$" label={null} />).render();

    expect(withLabel.find('.mantine-Tabs-tabLabel').text()).toBe('test');
    expect(withoutLabel.find('.mantine-Tabs-tabLabel')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(TabControl.displayName).toEqual('@mantine/core/TabControl');
  });
});
