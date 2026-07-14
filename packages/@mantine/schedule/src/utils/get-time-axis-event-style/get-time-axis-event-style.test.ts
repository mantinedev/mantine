import { getTimeAxisEventStyle } from './get-time-axis-event-style';

describe('@mantine/schedule/get-time-axis-event-style', () => {
  it('renders a normal horizontal event with exact start and span percentages', () => {
    const result = getTimeAxisEventStyle({ start: 10, span: 20 });

    expect(result.left).toBe('10%');
    expect(result.width).toBe('20%');
  });

  it('anchors the leading edge so events starting at the same time align regardless of duration', () => {
    const short = getTimeAxisEventStyle({ start: 10, span: 1 });
    const long = getTimeAxisEventStyle({ start: 10, span: 20 });

    expect(short.left).toBe('10%');
    expect(long.left).toBe('10%');
  });

  it('uses exact span percentages so events ending at the same time align', () => {
    const first = getTimeAxisEventStyle({ start: 10, span: 5 });
    const second = getTimeAxisEventStyle({ start: 12, span: 3 });

    expect(first.width).toBe('5%');
    expect(second.width).toBe('3%');
  });

  it('never sets a trailing inset on the horizontal axis', () => {
    const result = getTimeAxisEventStyle({ start: 10, span: 20 });

    expect(result).not.toHaveProperty('right');
  });

  it('returns bottom/height for the vertical axis', () => {
    const result = getTimeAxisEventStyle({ start: 10, span: 20, axis: 'vertical' });

    expect(result.bottom).toBe('calc(70% + 1px)');
    expect(result.height).toBe('max(1px, calc(20% - 2px))');
    expect(result).not.toHaveProperty('right');
    expect(result).not.toHaveProperty('top');
  });

  it('anchors the trailing (bottom) edge for the vertical axis', () => {
    const long = getTimeAxisEventStyle({ start: 10, span: 20, axis: 'vertical' });
    const short = getTimeAxisEventStyle({ start: 29, span: 1, axis: 'vertical' });

    expect(long.bottom).toBe('calc(70% + 1px)');
    expect(short.bottom).toBe('calc(70% + 1px)');
  });

  it('supports a single-sided gap (gap without a trailing portion) on the vertical axis', () => {
    const result = getTimeAxisEventStyle({
      start: 10,
      span: 20,
      axis: 'vertical',
      gap: 1,
      trailingGap: 0,
    });

    expect(result.bottom).toBe('70%');
    expect(result.height).toBe('max(1px, calc(20% - 1px))');
  });
});
