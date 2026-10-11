import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { RingProgress, RingProgressProps, RingProgressStylesNames } from './RingProgress';

const defaultProps: RingProgressProps = {
  size: 100,
  thickness: 10,
  label: 'test',
  sections: [{ value: 20, color: 'orange' }],
};

describe('@mantine/core/RingProgress', () => {
  tests.axe([
    <RingProgress
      key="1"
      label="test"
      sections={[
        { value: 40, color: 'blue', 'aria-label': 'Documents' },
        { value: 20, color: 'red', 'aria-label': 'Photos' },
      ]}
    />,
  ]);

  tests.itSupportsSystemProps<RingProgressProps, RingProgressStylesNames>({
    component: RingProgress,
    props: defaultProps,
    varsResolver: true,
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

  it('exposes section values with progressbar role', () => {
    render(
      <RingProgress
        sections={[
          { value: 40, color: 'blue', 'aria-label': 'Documents' },
          { value: 120, color: 'red', 'aria-label': 'Photos' },
        ]}
      />
    );

    const documents = screen.getByRole('progressbar', { name: 'Documents' });
    expect(documents).toHaveAttribute('aria-valuenow', '40');
    expect(documents).toHaveAttribute('aria-valuemin', '0');
    expect(documents).toHaveAttribute('aria-valuemax', '100');
    expect(documents).toHaveAttribute('aria-valuetext', '40%');
    expect(screen.getByRole('progressbar', { name: 'Photos' })).toHaveAttribute(
      'aria-valuenow',
      '100'
    );
  });

  it('allows overriding section aria attributes', () => {
    render(
      <RingProgress
        sections={[{ value: 40, color: 'blue', 'aria-label': 'Storage', 'aria-valuetext': '4 GB' }]}
      />
    );
    expect(screen.getByRole('progressbar', { name: 'Storage' })).toHaveAttribute(
      'aria-valuetext',
      '4 GB'
    );
  });

  it('does not add progressbar role when withAria is false', () => {
    const { container } = render(
      <RingProgress withAria={false} sections={[{ value: 40, color: 'blue' }]} />
    );
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    expect(container.querySelector('[aria-valuenow]')).toBeNull();
  });
});
