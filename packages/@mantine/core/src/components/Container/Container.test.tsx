import { render, tests } from '@mantine-tests/core';
import { Container, ContainerProps, ContainerStylesNames } from './Container';

const defaultProps: ContainerProps = {};

describe('@mantine/core/Container', () => {
  tests.itSupportsSystemProps<ContainerProps, ContainerStylesNames>({
    component: Container,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/Container',
    stylesApiSelectors: ['root'],
  });

  it('assigns data-strategy attribute based on strategy prop', () => {
    const { container, rerender } = render(<Container strategy="block" />);
    expect(container.querySelector('.mantine-Container-root')).toHaveAttribute(
      'data-strategy',
      'block'
    );

    rerender(<Container strategy="grid" />);
    expect(container.querySelector('.mantine-Container-root')).toHaveAttribute(
      'data-strategy',
      'grid'
    );
  });

  it('assigns data-fluid attribute when fluid is true', () => {
    const { container, rerender } = render(<Container fluid />);
    expect(container.querySelector('.mantine-Container-root')).toHaveAttribute(
      'data-fluid',
      'true'
    );

    rerender(<Container fluid={false} />);
    expect(container.querySelector('.mantine-Container-root')).not.toHaveAttribute('data-fluid');
  });
});
