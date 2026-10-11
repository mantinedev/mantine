import { render, screen, tests } from '@mantine-tests/core';
import { Progress, ProgressProps, ProgressStylesNames } from './Progress';
import { ProgressLabel } from './ProgressLabel/ProgressLabel';
import { ProgressRoot } from './ProgressRoot/ProgressRoot';
import { ProgressSection } from './ProgressSection/ProgressSection';

const defaultProps: ProgressProps = {
  value: 40,
  'aria-label': 'test',
};

describe('@mantine/core/Progress', () => {
  tests.axe([<Progress {...defaultProps} key="1" />]);

  tests.itSupportsSystemProps<ProgressProps, ProgressStylesNames>({
    component: Progress,
    props: defaultProps,
    displayName: '@mantine/core/Progress',
    stylesApiSelectors: ['root', 'section'],
  });

  it('exposes ProgressRoot, ProgressSection and ProgressLabel components', () => {
    expect(Progress.Root).toBe(ProgressRoot);
    expect(Progress.Section).toBe(ProgressSection);
    expect(Progress.Label).toBe(ProgressLabel);
  });

  it('forwards aria-label to the progressbar', () => {
    render(<Progress value={40} aria-label="Upload progress" />);
    expect(screen.getByRole('progressbar', { name: 'Upload progress' })).toBeInTheDocument();
  });

  it('clamps aria-valuenow to 0–100 range', () => {
    const { rerender } = render(<Progress value={140} aria-label="test" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuetext', '100%');
    rerender(<Progress value={-20} aria-label="test" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });

  it('allows overriding aria-valuetext', () => {
    render(<Progress value={60} aria-label="test" aria-valuetext="Step 3 of 5" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuetext', 'Step 3 of 5');
  });

  it('omits aria-valuenow in indeterminate state', () => {
    render(<Progress indeterminate aria-label="Loading" />);
    const progressbar = screen.getByRole('progressbar', { name: 'Loading' });
    expect(progressbar).not.toHaveAttribute('aria-valuenow');
    expect(progressbar).not.toHaveAttribute('aria-valuetext');
    expect(progressbar).toHaveAttribute('data-indeterminate');
  });
});
