import { render, tests } from '@mantine-tests/core';
import { HeaderControl, HeaderControlProps, HeaderControlStylesNames } from './HeaderControl';

const defaultProps: HeaderControlProps = {};

describe('@mantine/schedule/HeaderControl', () => {
  tests.itSupportsSystemProps<HeaderControlProps, HeaderControlStylesNames>({
    component: HeaderControl,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/schedule/HeaderControl',
    stylesApiSelectors: ['headerControl'],
  });

  it('assigns data-active attribute based on active prop', () => {
    const { container, rerender } = render(<HeaderControl active />);
    expect(container.querySelector('.mantine-HeaderControl-headerControl')).toHaveAttribute(
      'data-active'
    );

    rerender(<HeaderControl active={false} />);
    expect(container.querySelector('.mantine-HeaderControl-headerControl')).not.toHaveAttribute(
      'data-active'
    );
  });

  it('assigns data-square attribute based on square prop', () => {
    const { container, rerender } = render(<HeaderControl square />);
    expect(container.querySelector('.mantine-HeaderControl-headerControl')).toHaveAttribute(
      'data-square'
    );

    rerender(<HeaderControl square={false} />);
    expect(container.querySelector('.mantine-HeaderControl-headerControl')).not.toHaveAttribute(
      'data-square'
    );
  });

  it('supports __staticSelector prop', () => {
    const { container } = render(<HeaderControl {...defaultProps} __staticSelector="Test" />);
    expect(container.querySelector('.mantine-Test-headerControl')).toBeInTheDocument();
  });
});
