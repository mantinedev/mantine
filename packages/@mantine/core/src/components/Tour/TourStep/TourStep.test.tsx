import { render } from '@mantine-tests/core';
import { TourStep } from './TourStep';

describe('@mantine/core/TourStep', () => {
  it('has correct displayName', () => {
    expect(TourStep.displayName).toBe('@mantine/core/TourStep');
  });

  it('renders nothing (data-only component)', () => {
    const { container } = render(<TourStep title="Test" />);
    expect(container.querySelectorAll('*:not(style)')).toHaveLength(0);
  });
});
