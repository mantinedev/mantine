import { render, tests } from '@mantine-tests/core';
import { RadioIndicator, RadioIndicatorProps, RadioIndicatorStylesNames } from './RadioIndicator';

const defaultProps: RadioIndicatorProps = {};

describe('@mantine/core/RadioIndicator', () => {
  tests.itSupportsSystemProps<RadioIndicatorProps, RadioIndicatorStylesNames>({
    component: RadioIndicator,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/RadioIndicator',
    stylesApiSelectors: ['indicator', 'icon'],
  });

  it('sets data-checked attribute based on checked prop', () => {
    const { rerender, container } = render(<RadioIndicator checked />);
    expect(container.querySelector('.mantine-RadioIndicator-indicator')).toHaveAttribute(
      'data-checked',
      'true'
    );

    rerender(<RadioIndicator checked={false} />);
    expect(container.querySelector('.mantine-RadioIndicator-indicator')).not.toHaveAttribute(
      'data-checked'
    );
  });

  it('sets data-disabled attribute based on disabled prop', () => {
    const { rerender, container } = render(<RadioIndicator disabled />);
    expect(container.querySelector('.mantine-RadioIndicator-indicator')).toHaveAttribute(
      'data-disabled',
      'true'
    );

    rerender(<RadioIndicator disabled={false} />);
    expect(container.querySelector('.mantine-RadioIndicator-indicator')).not.toHaveAttribute(
      'data-disabled'
    );
  });

  it('always renders icon element', () => {
    const { container, rerender } = render(<RadioIndicator checked />);
    expect(container.querySelector('.mantine-RadioIndicator-icon')).toBeInTheDocument();

    rerender(<RadioIndicator checked={false} />);
    expect(container.querySelector('.mantine-RadioIndicator-icon')).toBeInTheDocument();
  });

  it('applies disabled state visually', () => {
    const { container } = render(<RadioIndicator checked disabled />);
    const indicator = container.querySelector('.mantine-RadioIndicator-indicator');
    expect(indicator).toHaveAttribute('data-checked', 'true');
    expect(indicator).toHaveAttribute('data-disabled', 'true');
  });
});
