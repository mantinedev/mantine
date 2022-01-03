import React from 'react';
import { render, screen } from '@testing-library/react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { Progress, ProgressProps } from './Progress';

const defaultProps: ProgressProps = {
  value: 80,
};

describe('@mantine/core/Progress', () => {
  checkAccessibility([<Progress value={80} aria-label="test-progress" />]);
  itSupportsSystemProps({
    component: Progress,
    props: defaultProps,
    displayName: '@mantine/core/Progress',
    refType: HTMLDivElement,
  });

  it('renders given amount of sections', () => {
    const { container } = render(
      <Progress
        value={84}
        sections={[
          { value: 40, color: 'cyan' },
          { value: 20, color: 'red' },
          { value: 15, color: 'lime' },
        ]}
      />
    );

    expect(container.querySelectorAll('.mantine-Progress-bar')).toHaveLength(3);
  });

  it('passes value prop to progressbar', () => {
    render(<Progress value={84} />);
    expect(screen.getByRole('progressbar')).toHaveStyle({ width: '84%' });
  });

  it('has correct aria attributes', () => {
    render(<Progress value={84} />);
    const element = screen.getByRole('progressbar');
    expect(element).toHaveAttribute('aria-valuenow', '84');
    expect(element).toHaveAttribute('aria-valuemin', '0');
    expect(element).toHaveAttribute('aria-valuemax', '100');
  });
});
