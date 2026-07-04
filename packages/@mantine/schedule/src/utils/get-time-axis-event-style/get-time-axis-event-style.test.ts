import { getTimeAxisEventStyle } from './get-time-axis-event-style';

describe('@mantine/schedule/get-time-axis-event-style', () => {
  it('renders a normal event with a 1px gap on each side', () => {
    const result = getTimeAxisEventStyle({ start: 10, span: 20 });

    expect(result.right).toBe('calc(70% + 1px)');
    expect(result.width).toBe('max(1px, calc(20% - 2px))');
  });

  it('anchors the trailing edge so events ending at the same time align regardless of duration', () => {
    const long = getTimeAxisEventStyle({ start: 10, span: 20 });
    const short = getTimeAxisEventStyle({ start: 29, span: 1 });

    // Both events end at 30% — their trailing edges must resolve identically
    expect(long.right).toBe('calc(70% + 1px)');
    expect(short.right).toBe('calc(70% + 1px)');
  });

  it('floors the visible width so very short events do not collapse to zero', () => {
    const result = getTimeAxisEventStyle({ start: 29, span: 1 });

    expect(result.width).toBe('max(1px, calc(1% - 2px))');
  });

  it('never sets a left inset (the box is anchored from the trailing edge)', () => {
    const result = getTimeAxisEventStyle({ start: 10, span: 20 });

    expect(result).not.toHaveProperty('left');
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

  it('supports a single-sided gap (gap without a trailing portion)', () => {
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
