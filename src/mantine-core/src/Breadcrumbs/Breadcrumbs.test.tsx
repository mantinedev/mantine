import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
} from '@mantine/tests';
import { Text } from '../Text/Text';
import { Breadcrumbs } from './Breadcrumbs';

const items = [
  { title: 'Mantine', href: 'https://mantine.dev' },
  { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
  { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
].map((item) => (
  <Text<'a'> variant="link" component="a" href={item.href} key={item.title}>
    {item.title}
  </Text>
));

describe('@mantine/core/Breadcrumbs', () => {
  checkAccessibility([mount(<Breadcrumbs>{items}</Breadcrumbs>)]);
  itSupportsClassName(Breadcrumbs, { children: items });
  itSupportsOthers(Breadcrumbs, { children: items });
  itSupportsStyle(Breadcrumbs, { children: items });

  it('has correct displayName', () => {
    expect(Breadcrumbs.displayName).toEqual('@mantine/core/Breadcrumbs');
  });

  it('renders correct amount of children and separators', () => {
    const element = shallow(<Breadcrumbs>{items}</Breadcrumbs>);
    expect(element.render().find('[data-mantine-breadcrumb]')).toHaveLength(items.length);
    expect(element.render().find('[data-mantine-separator]')).toHaveLength(items.length - 1);
  });

  it('accepts separator from props', () => {
    const element = shallow(<Breadcrumbs separator="test">{items}</Breadcrumbs>);
    expect(element.render().find('[data-mantine-separator]').first().text()).toBe('test');
  });
});
