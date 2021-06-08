import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsStylesApi,
} from '@mantine/tests';
import { Badge, BADGE_VARIANTS } from './Badge';
import { Badge as BadgeStylesApi } from './styles.api';

describe('@mantine/core/Badge', () => {
  checkAccessibility([mount(<Badge>this is badge</Badge>)]);
  itSupportsStylesApi(
    Badge,
    { children: 'test', leftSection: 'l', rightSection: 'r' },
    Object.keys(BadgeStylesApi).filter((item) => !BADGE_VARIANTS.includes(item as any)),
    'badge'
  );
  itSupportsOthers(Badge, {});
  itSupportsClassName(Badge, {});
  itRendersChildren(Badge, {});
  itSupportsStyle(Badge, {});

  it('has correct displayName', () => {
    expect(Badge.displayName).toEqual('@mantine/core/Badge');
  });

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withTag = shallow(<Badge<'a'> component="a" href="https://mantine.dev" />);
    const withComponent = shallow(<Badge<typeof TestComponent> component={TestComponent} />);

    expect(withTag.type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });

  it('renders given left and right section', () => {
    const element = shallow(
      <Badge rightSection="test-right" leftSection="test-left">
        test
      </Badge>
    );
    expect(element.render().find('.mantine-badge-rightSection').text()).toBe('test-right');
    expect(element.render().find('.mantine-badge-leftSection').text()).toBe('test-left');
  });
});
