import React from 'react';
import { render, screen } from '@testing-library/react';
import { itSupportsSystemProps, itSupportsProviderVariant } from '@mantine/tests';
import { Text } from '../Text/Text';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

const defaultProps: BreadcrumbsProps = {
  children: [
    { title: 'Mantine', href: '#' },
    { title: 'Mantine hooks', href: '#' },
    { title: 'use-id', href: '#' },
  ].map((item) => (
    <Text<'a'> variant="link" component="a" href={item.href} key={item.title}>
      {item.title}
    </Text>
  )),
};

describe('@mantine/core/Breadcrumbs', () => {
  itSupportsProviderVariant(Breadcrumbs, defaultProps, 'Breadcrumbs');
  itSupportsSystemProps({
    component: Breadcrumbs,
    props: defaultProps,
    displayName: '@mantine/core/Breadcrumbs',
    refType: HTMLDivElement,
    providerName: 'Breadcrumbs',
  });

  it('renders correct amount of children and separators', () => {
    const { container } = render(<Breadcrumbs {...defaultProps} />);
    expect(container.querySelectorAll('.mantine-Breadcrumbs-breadcrumb')).toHaveLength(3);
    expect(container.querySelectorAll('.mantine-Breadcrumbs-separator')).toHaveLength(2);
  });

  it('accepts separator from props', () => {
    render(<Breadcrumbs separator="test-separator" {...defaultProps} />);
    expect(screen.getAllByText('test-separator')).toHaveLength(2);
  });

  it('arrows to set child className', () => {
    render(
      <Breadcrumbs>
        <button type="button" className="test-class">
          test-label
        </button>
      </Breadcrumbs>
    );

    expect(screen.getByRole('button')).toHaveClass('test-class');
  });
});
