import { render, screen, tests } from '@mantine-tests/core';
import { RadioCard, RadioCardProps, RadioCardStylesNames } from './RadioCard';

const defaultProps: RadioCardProps = {};

describe('@mantine/core/RadioCard', () => {
  tests.axe([
    <RadioCard key="1">Label</RadioCard>,
    <RadioCard checked key="2">
      Label
    </RadioCard>,
  ]);

  tests.itSupportsSystemProps<RadioCardProps, RadioCardStylesNames>({
    component: RadioCard,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/RadioCard',
    stylesApiSelectors: ['card'],
  });

  it('sets aria-checked attribute based on checked prop', () => {
    const { rerender } = render(<RadioCard checked />);
    expect(screen.getByRole('radio')).toHaveAttribute('aria-checked', 'true');

    rerender(<RadioCard checked={false} />);
    expect(screen.getByRole('radio')).toHaveAttribute('aria-checked', 'false');
  });

  it('sets data-checked attribute based on checked prop', () => {
    const { rerender } = render(<RadioCard checked />);
    expect(screen.getByRole('radio')).toHaveAttribute('data-checked', 'true');

    rerender(<RadioCard checked={false} />);
    expect(screen.getByRole('radio')).not.toHaveAttribute('data-checked');
  });

  it('sets data-with-border attribute based on withBorder prop', () => {
    const { rerender } = render(<RadioCard withBorder />);
    expect(screen.getByRole('radio')).toHaveAttribute('data-with-border', 'true');

    rerender(<RadioCard withBorder={false} />);
    expect(screen.getByRole('radio')).not.toHaveAttribute('data-with-border');
  });
});
