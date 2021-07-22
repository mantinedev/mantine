import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
} from '@mantine/tests';
import { Text } from '../Text/Text';
import { Breadcrumbs } from './Breadcrumbs';
import { Breadcrumbs as BreadcrumbsStylesApi } from './styles.api';

const defaultProps = {
  children: [
    { title: 'Mantine', href: 'https://mantine.dev' },
    { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
    { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
  ].map((item) => (
    <Text<'a'> variant="link" component="a" href={item.href} key={item.title}>
      {item.title}
    </Text>
  )),
};

describe('@mantine/core/Breadcrumbs', () => {
  checkAccessibility([mount(<Breadcrumbs {...defaultProps} />)]);
  itSupportsStylesApi(Breadcrumbs, defaultProps, Object.keys(BreadcrumbsStylesApi), 'breadcrumbs');
  itSupportsClassName(Breadcrumbs, defaultProps);
  itSupportsOthers(Breadcrumbs, defaultProps);
  itSupportsStyle(Breadcrumbs, defaultProps);

  it('has correct displayName', () => {
    expect(Breadcrumbs.displayName).toEqual('@mantine/core/Breadcrumbs');
  });

  it('renders correct amount of children and separators', () => {
    const element = shallow(<Breadcrumbs {...defaultProps} />);
    expect(element.render().find('.mantine-breadcrumbs-breadcrumb')).toHaveLength(
      defaultProps.children.length
    );
    expect(element.render().find('.mantine-breadcrumbs-separator')).toHaveLength(
      defaultProps.children.length - 1
    );
  });

  it('accepts separator from props', () => {
    const element = shallow(<Breadcrumbs separator="test" {...defaultProps} />);
    expect(element.render().find('.mantine-breadcrumbs-separator').first().text()).toBe('test');
  });
});
