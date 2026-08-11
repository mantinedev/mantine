import { getTimeAxisEventStyle } from './get-time-axis-event-style';

describe('@mantine/schedule/get-time-axis-event-style', () => {
  it('anchors both edges to the real start and end so the box spans the exact time range', () => {
    const result = getTimeAxisEventStyle({ start: 10, span: 20 });

    expect(result.left).toBe('10%');
    expect(result.right).toBe('70%');
    expect(result.minWidth).toBe('1px');
  });

  it('anchors the trailing edge so events ending at the same time align regardless of duration', () => {
    const long = getTimeAxisEventStyle({ start: 10, span: 20 });
    const short = getTimeAxisEventStyle({ start: 29, span: 1 });

    // Both events end at 30% — their trailing edges must resolve identically
    expect(long.right).toBe('70%');
    expect(short.right).toBe('70%');
  });

  it('anchors the leading edge to the real start so the box never starts before the event', () => {
    const long = getTimeAxisEventStyle({ start: 10, span: 20 });
    const short = getTimeAxisEventStyle({ start: 10, span: 1 });

    expect(long.left).toBe('10%');
    expect(short.left).toBe('10%');
  });

  it('exposes the minimum visible size so very short events do not collapse to zero', () => {
    const result = getTimeAxisEventStyle({ start: 29, span: 1, minSize: 10 });

    expect(result.minWidth).toBe('10px');
  });

  it('returns top/bottom/min-height for the vertical axis', () => {
    const result = getTimeAxisEventStyle({ start: 10, span: 20, axis: 'vertical', minSize: 4 });

    expect(result.top).toBe('10%');
    expect(result.bottom).toBe('70%');
    expect(result.minHeight).toBe('4px');
    expect(result).not.toHaveProperty('left');
    expect(result).not.toHaveProperty('right');
  });

  it('anchors both edges for the vertical axis', () => {
    const long = getTimeAxisEventStyle({ start: 10, span: 20, axis: 'vertical' });
    const short = getTimeAxisEventStyle({ start: 10, span: 1, axis: 'vertical' });

    expect(long.top).toBe('10%');
    expect(long.bottom).toBe('70%');
    expect(short.top).toBe('10%');
  });
});
