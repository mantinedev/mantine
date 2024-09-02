import { render, screen, tests } from '@mantine-tests/core';
import { CheckboxCard, CheckboxCardProps, CheckboxCardStylesNames } from './CheckboxCard';

const defaultProps: CheckboxCardProps = {};

describe('@mantine/core/CheckboxCard', () => {
  tests.axe([
    <CheckboxCard key="1">Label</CheckboxCard>,
    <CheckboxCard checked key="2">
      Label
    </CheckboxCard>,
  ]);

  tests.itSupportsSystemProps<CheckboxCardProps, CheckboxCardStylesNames>({
    component: CheckboxCard,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/CheckboxCard',
    stylesApiSelectors: ['card'],
  });

  it('sets aria-checked attribute based on checked prop', () => {
    const { rerender } = render(<CheckboxCard checked />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');

    rerender(<CheckboxCard checked={false} />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false');
  });

  it('sets data-checked attribute based on checked prop', () => {
    const { rerender } = render(<CheckboxCard checked />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('data-checked', 'true');

    rerender(<CheckboxCard checked={false} />);
    expect(screen.getByRole('checkbox')).not.toHaveAttribute('data-checked');
  });

  it('sets data-with-border attribute based on withBorder prop', () => {
    const { rerender } = render(<CheckboxCard withBorder />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('data-with-border', 'true');

    rerender(<CheckboxCard withBorder={false} />);
    expect(screen.getByRole('checkbox')).not.toHaveAttribute('data-with-border');
  });
});
