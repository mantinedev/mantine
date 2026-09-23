import { render, screen, tests } from '@mantine-tests/core';
import { CheckboxIndicator } from '../CheckboxIndicator/CheckboxIndicator';
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
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/CheckboxCard',
    stylesApiSelectors: ['card'],
  });

  it('sets aria-checked attribute based on checked prop', () => {
    const { rerender } = render(<CheckboxCard checked />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');

    rerender(<CheckboxCard checked={false} />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false');
  });

  it('sets aria-checked to mixed when indeterminate prop is set', () => {
    const { rerender } = render(<CheckboxCard indeterminate />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed');

    rerender(<CheckboxCard indeterminate checked />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed');

    rerender(<CheckboxCard indeterminate={false} checked />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');
  });

  it('sets data-indeterminate attribute based on indeterminate prop', () => {
    const { rerender } = render(<CheckboxCard indeterminate />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('data-indeterminate', 'true');

    rerender(<CheckboxCard indeterminate={false} />);
    expect(screen.getByRole('checkbox')).not.toHaveAttribute('data-indeterminate');
  });

  it('propagates indeterminate state to CheckboxIndicator via context', () => {
    render(
      <CheckboxCard indeterminate>
        <CheckboxIndicator data-testid="indicator" />
      </CheckboxCard>
    );

    expect(screen.getByTestId('indicator')).toHaveAttribute('data-checked', 'true');
  });

  it('keeps CheckboxIndicator checked when card indeterminate is explicitly false', () => {
    render(
      <CheckboxCard checked indeterminate={false}>
        <CheckboxIndicator data-testid="indicator" />
      </CheckboxCard>
    );

    expect(screen.getByTestId('indicator')).toHaveAttribute('data-checked', 'true');
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
