import { patchConsoleError, render, screen, tests } from '@mantine-tests/core';
import {
  SemiCircleProgress,
  SemiCircleProgressProps,
  SemiCircleProgressStylesNames,
} from './SemiCircleProgress';

const defaultProps: SemiCircleProgressProps = {
  size: 200,
  thickness: 12,
  value: 40,
  label: 'Test label',
};

describe('@mantine/core/SemiCircleProgress', () => {
  beforeAll(() => {
    patchConsoleError();
  });

  afterAll(() => {
    patchConsoleError.release();
  });

  tests.itSupportsSystemProps<SemiCircleProgressProps, SemiCircleProgressStylesNames>({
    component: SemiCircleProgress,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/SemiCircleProgress',
    stylesApiSelectors: ['root', 'svg', 'emptySegment', 'filledSegment', 'label'],
  });

  it('renders given label', () => {
    render(<SemiCircleProgress {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('assigns labelPosition prop to label data-position attribute', () => {
    render(<SemiCircleProgress {...defaultProps} label="test-label" labelPosition="center" />);
    expect(screen.getByText('test-label')).toHaveAttribute('data-position', 'center');
  });

  it('clamps value between 0 and 100', () => {
    const { container, rerender } = render(<SemiCircleProgress {...defaultProps} value={-10} />);
    let circles = container.querySelectorAll('circle');
    expect(circles[1]).toHaveAttribute('style', expect.stringContaining('0'));

    rerender(<SemiCircleProgress {...defaultProps} value={150} />);
    circles = container.querySelectorAll('circle');
    const circumference = Math.PI * ((200 - 2 * 12) / 2);
    expect(circles[1]).toHaveAttribute('style', expect.stringContaining(String(circumference)));
  });

  it('assigns orientation to label data-orientation attribute', () => {
    render(<SemiCircleProgress {...defaultProps} label="test-label" orientation="down" />);
    expect(screen.getByText('test-label')).toHaveAttribute('data-orientation', 'down');
  });
});
