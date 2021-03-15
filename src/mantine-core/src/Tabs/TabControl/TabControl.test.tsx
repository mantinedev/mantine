import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsStyle, itSupportsRef, itSupportsOthers } from '@mantine/tests';
import { TabControl } from './TabControl';

const defaultProps = { active: true, tabProps: { label: 'test' } };

describe('@mantine/core/TabControl', () => {
  itSupportsStyle(TabControl, { ...defaultProps, elementRef: () => {} });
  itSupportsOthers(TabControl, { ...defaultProps, elementRef: () => {} });
  itSupportsRef(TabControl, defaultProps, HTMLButtonElement, 'elementRef');

  it('has correct displayName', () => {
    expect(TabControl.displayName).toEqual('@mantine/core/TabControl');
  });

  it('sets correct accessibility attributes based on active prop', () => {
    const active = shallow(<TabControl {...defaultProps} active elementRef={() => {}} />).render();
    const inactive = shallow(
      <TabControl {...defaultProps} active={false} elementRef={() => {}} />
    ).render();

    expect(active.attr('tabindex')).toBe('0');
    expect(active.attr('role')).toBe('tab');
    expect(active.attr('aria-selected')).toBe('true');

    expect(inactive.attr('tabindex')).toBe('-1');
    expect(inactive.attr('aria-selected')).toBe('false');
  });

  it('renders icon from tabProps', () => {
    const withIcon = shallow(
      <TabControl {...defaultProps} elementRef={() => {}} tabProps={{ icon: '$' }} />
    ).render();

    const withoutIcon = shallow(
      <TabControl
        {...defaultProps}
        elementRef={() => {}}
        tabProps={{ icon: null, label: 'test' }}
      />
    ).render();

    expect(withIcon.find('[data-mantine-icon]').text()).toBe('$');
    expect(withoutIcon.find('[data-mantine-icon]')).toHaveLength(0);
  });

  it('renders label from tabProps', () => {
    const withIcon = shallow(
      <TabControl {...defaultProps} elementRef={() => {}} tabProps={{ label: 'test' }} />
    ).render();

    const withoutIcon = shallow(
      <TabControl {...defaultProps} elementRef={() => {}} tabProps={{ icon: '$', label: null }} />
    ).render();

    expect(withIcon.find('[data-mantine-label]').text()).toBe('test');
    expect(withoutIcon.find('[data-mantine-label]')).toHaveLength(0);
  });

  it('spreads tabProps to root element', () => {
    const element = shallow(
      <TabControl
        {...defaultProps}
        elementRef={() => {}}
        tabProps={{
          label: 'test',
          disabled: true,
          title: 'test-title',
          style: { border: '1px solid red' },
        }}
      />
    ).render();

    expect(element.attr('disabled')).toBe('disabled');
    expect(element.attr('title')).toBe('test-title');
    expect(element.css('border')).toBe('1px solid red');
  });
});
