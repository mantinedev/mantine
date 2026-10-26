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
    varsResolver: true,
    polymorphic: true,
    children: true,
    displayName: '@mantine/core/Badge',
    stylesApiSelectors: ['root', 'section', 'label'],
  });

  it('sets data-block attribute on root element if fullWidth prop is set', () => {
    const { rerender, container } = render(<Badge {...defaultProps} fullWidth />);
    expect(container.querySelector('.mantine-Badge-root')).toHaveAttribute('data-block');

    rerender(<Badge {...defaultProps} fullWidth={false} />);
    expect(container.querySelector('.mantine-Badge-root')).not.toHaveAttribute('data-block');
  });

  it('sets data-circle attribute on root element if circle prop is set', () => {
    const { rerender, container } = render(<Badge circle>1</Badge>);
    expect(container.querySelector('.mantine-Badge-root')).toHaveAttribute('data-circle');

    rerender(<Badge>1</Badge>);
    expect(container.querySelector('.mantine-Badge-root')).not.toHaveAttribute('data-circle');
  });

  it('does not render sections when they are not given', () => {
    const { container } = render(<Badge>test</Badge>);
    expect(container.querySelectorAll('.mantine-Badge-section')).toHaveLength(0);
    expect(container.querySelector('.mantine-Badge-root')).not.toHaveAttribute(
      'data-with-left-section'
    );
    expect(container.querySelector('.mantine-Badge-root')).not.toHaveAttribute(
      'data-with-right-section'
    );
  });

  it('does not render left section with dot variant', () => {
    const { container } = render(
      <Badge variant="dot" leftSection="test-left" rightSection="test-right">
        test
      </Badge>
    );

    expect(container.querySelector('.mantine-Badge-section[data-position="left"]')).toBe(null);
    expect(container.querySelector('.mantine-Badge-root')).not.toHaveAttribute(
      'data-with-left-section'
    );
    expect(
      container.querySelector('.mantine-Badge-section[data-position="right"]')
    ).toHaveTextContent('test-right');
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

  it('keeps white text when autoContrast is disabled on the component', () => {
    const { container } = render(<Badge autoContrast={false}>test</Badge>, {
      autoContrast: true,
      primaryColor: 'yellow',
    });
    expect(container.querySelector('.mantine-Badge-root')).toHaveStyle({
      '--badge-color': 'var(--mantine-color-white)',
    });
  });
});
