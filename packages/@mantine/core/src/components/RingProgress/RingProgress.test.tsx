import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { RingProgress, RingProgressProps, RingProgressStylesNames } from './RingProgress';

const defaultProps: RingProgressProps = {
  size: 100,
  thickness: 10,
  label: 'test',
  sections: [{ value: 20, color: 'orange' }],
};

describe('@mantine/core/RingProgress', () => {
  tests.itSupportsSystemProps<RingProgressProps, RingProgressStylesNames>({
    component: RingProgress,
    props: defaultProps,
    displayName: '@mantine/core/RingProgress',
    stylesApiSelectors: ['root', 'svg', 'curve', 'label'],
  });

  it('clamps thickness to size / 4', () => {
    const { container } = render(
      <RingProgress sections={[{ value: 50, color: 'blue' }]} size={100} thickness={50} />
    );
    const circles = container.querySelectorAll('circle');
    circles.forEach((circle) => {
      expect(Number(circle.getAttribute('stroke-width'))).toBeLessThanOrEqual(25);
    });
  });

  it('handles sections summing to > 100', () => {
    const { container } = render(
      <RingProgress
        sections={[
          { value: 60, color: 'blue' },
          { value: 60, color: 'red' },
        ]}
      />
    );
    expect(container.querySelectorAll('circle').length).toBeGreaterThanOrEqual(3);
  });

  it('forwards section event handlers', async () => {
    const handleClick = jest.fn();
    const { container } = render(
      <RingProgress sections={[{ value: 50, color: 'blue', onClick: handleClick }]} />
    );
    const circles = Array.from(container.querySelectorAll('circle'));

    for (const circle of circles) {
      await userEvent.click(circle);
    }

    expect(handleClick).toHaveBeenCalled();
  });

  it('applies roundCaps to appropriate curves', () => {
    const { container } = render(
      <RingProgress
        sections={[
          { value: 40, color: 'blue' },
          { value: 30, color: 'red' },
        ]}
        roundCaps
      />
    );
    const circles = container.querySelectorAll('circle');
    const roundCaps = Array.from(circles).filter(
      (circle) => circle.getAttribute('stroke-linecap') === 'round'
    );
    expect(roundCaps.length).toBeGreaterThan(0);
  });

  it('renders label when provided', () => {
    render(
      <RingProgress
        sections={[{ value: 50, color: 'blue' }]}
        label={<span data-testid="test-label">50%</span>}
      />
    );
    expect(screen.getByTestId('test-label')).toBeInTheDocument();
  });
});
