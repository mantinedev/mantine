import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Text } from '../Text/Text';
import { Breadcrumbs } from './Breadcrumbs';

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
  checkAccessibility([render(<Breadcrumbs {...defaultProps} />)]);
  itSupportsClassName(Breadcrumbs, defaultProps);
  itSupportsOthers(Breadcrumbs, defaultProps);
  itSupportsStyle(Breadcrumbs, defaultProps);
  itSupportsMargins(Breadcrumbs, defaultProps);
  itSupportsSx(Breadcrumbs, defaultProps);
  itSupportsRef(Breadcrumbs, defaultProps, HTMLDivElement);

  it('renders correct amount of children and separators', () => {
    const element = shallow(<Breadcrumbs {...defaultProps} />);
    expect(element.render().find('.mantine-Breadcrumbs-breadcrumb')).toHaveLength(
      defaultProps.children.length
    );
    expect(element.render().find('.mantine-Breadcrumbs-separator')).toHaveLength(
      defaultProps.children.length - 1
    );
  });

  it('accepts separator from props', () => {
    const element = shallow(<Breadcrumbs separator="test" {...defaultProps} />);
    expect(element.render().find('.mantine-Breadcrumbs-separator').first().text()).toBe('test');
  });

  it('has correct displayName', () => {
    expect(Breadcrumbs.displayName).toEqual('@mantine/core/Breadcrumbs');
  });
});
