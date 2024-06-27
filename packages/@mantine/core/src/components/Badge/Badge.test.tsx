import { render, tests } from '@mantine-tests/core';
import { Badge, BadgeProps, BadgeStylesNames } from './Badge';

const defaultProps: BadgeProps = {
  leftSection: 'L',
  rightSection: 'R',
};

describe('@mantine/core/Badge', () => {
  tests.itSupportsSystemProps<BadgeProps, BadgeStylesNames>({
    component: Badge,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Badge',
    stylesApiSelectors: ['root', 'section', 'label'],
  });

  it('sets data-block attribute on root element if fullWidth prop is set', () => {
    const { rerender, container } = render(<Badge {...defaultProps} fullWidth />);
    expect(container.querySelector('.mantine-Badge-root')).toHaveAttribute('data-block');

    rerender(<Badge {...defaultProps} fullWidth={false} />);
    expect(container.querySelector('.mantine-Badge-root')).not.toHaveAttribute('data-block');
  });

  it('renders given left and right sections', () => {
    const { container } = render(
      <Badge {...defaultProps} leftSection="test-left" rightSection="test-right" />
    );

    expect(
      container.querySelector('.mantine-Badge-section[data-position="left"]')
    ).toHaveTextContent('test-left');
    expect(
      container.querySelector('.mantine-Badge-section[data-position="right"]')
    ).toHaveTextContent('test-right');
  });
});
