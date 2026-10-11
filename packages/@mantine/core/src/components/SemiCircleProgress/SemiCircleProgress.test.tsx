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

  tests.axe([<SemiCircleProgress key="1" {...defaultProps} aria-label="Disk usage" />]);

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
    expect((circles[1] as SVGCircleElement).style.strokeDashoffset).toBe('0');

    rerender(<SemiCircleProgress {...defaultProps} value={150} />);
    circles = container.querySelectorAll('circle');
    const circumference = Math.PI * ((200 - 2 * 12) / 2);
    expect(circles[1]).toHaveAttribute('style', expect.stringContaining(String(circumference)));
  });

  it('hides the filled segment when value is 0 to avoid a sliver', () => {
    const { container, rerender } = render(<SemiCircleProgress {...defaultProps} value={0} />);
    let filledSegment = container.querySelectorAll('circle')[1];
    expect(filledSegment).toHaveStyle({ strokeOpacity: '0' });

    rerender(<SemiCircleProgress {...defaultProps} value={40} />);
    filledSegment = container.querySelectorAll('circle')[1];
    expect(filledSegment).not.toHaveStyle({ strokeOpacity: '0' });
  });

  it('assigns orientation to label data-orientation attribute', () => {
    render(<SemiCircleProgress {...defaultProps} label="test-label" orientation="down" />);
    expect(screen.getByText('test-label')).toHaveAttribute('data-orientation', 'down');
  });

  it('sets svg dimensions based on size prop', () => {
    const { container } = render(<SemiCircleProgress {...defaultProps} size={240} />);
    const svg = container.querySelector('svg');

    expect(svg).toHaveAttribute('width', '240');
    expect(svg).toHaveAttribute('height', '120');
    expect(svg).toHaveAttribute('viewBox', '0 0 240 120');
  });

  it('exposes progressbar role with clamped aria values', () => {
    const { container, rerender } = render(
      <SemiCircleProgress {...defaultProps} value={40} aria-label="Disk usage" />
    );
    const progressbar = screen.getByRole('progressbar', { name: 'Disk usage' });
    expect(progressbar).toHaveAttribute('aria-valuenow', '40');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    expect(progressbar).toHaveAttribute('aria-valuetext', '40%');
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');

    rerender(<SemiCircleProgress {...defaultProps} value={150} aria-label="Disk usage" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  });

  it('allows overriding aria-valuetext', () => {
    render(
      <SemiCircleProgress {...defaultProps} aria-label="Disk usage" aria-valuetext="40 of 100 GB" />
    );
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuetext', '40 of 100 GB');
  });

  it('does not add progressbar role when withAria is false', () => {
    render(<SemiCircleProgress {...defaultProps} withAria={false} />);
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });

  it('clamps thickness so that radius is not negative', () => {
    const { container } = render(
      <SemiCircleProgress {...defaultProps} size={100} thickness={80} />
    );
    container.querySelectorAll('circle').forEach((circle) => {
      expect(Number(circle.getAttribute('r'))).toBeGreaterThanOrEqual(0);
      expect(circle).toHaveAttribute('stroke-width', '50');
    });
  });
});
