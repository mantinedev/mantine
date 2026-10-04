import { clampResizeSize, getCollapseState } from './clamp-resize-size';

describe('@mantine/core/AppShell/clamp-resize-size', () => {
  it('clamps to min and max', () => {
    expect(clampResizeSize({ size: 50, min: 100, max: 400, viewportMax: 1000 })).toBe(100);
    expect(clampResizeSize({ size: 900, min: 100, max: 400, viewportMax: 1000 })).toBe(400);
    expect(clampResizeSize({ size: 250, min: 100, max: 400, viewportMax: 1000 })).toBe(250);
  });

  it('defaults min to 0 and max to the viewport size', () => {
    expect(clampResizeSize({ size: -50, min: undefined, max: undefined, viewportMax: 800 })).toBe(
      0
    );
    expect(clampResizeSize({ size: 5000, min: undefined, max: undefined, viewportMax: 800 })).toBe(
      800
    );
  });

  it('never exceeds the viewport even when max is larger', () => {
    expect(clampResizeSize({ size: 900, min: 0, max: 2000, viewportMax: 600 })).toBe(600);
  });

  it('constrains min to max when min is larger than max', () => {
    expect(clampResizeSize({ size: 250, min: 500, max: 400, viewportMax: 1000 })).toBe(400);
    expect(clampResizeSize({ size: 5000, min: 500, max: 400, viewportMax: 1000 })).toBe(400);
  });

  it('constrains min to the viewport when min is larger than the viewport bound', () => {
    expect(clampResizeSize({ size: 250, min: 900, max: undefined, viewportMax: 600 })).toBe(600);
    expect(clampResizeSize({ size: 5000, min: 900, max: undefined, viewportMax: 600 })).toBe(600);
  });

  it('reports collapse state against the threshold', () => {
    expect(getCollapseState(100, 120)).toBe(true);
    expect(getCollapseState(150, 120)).toBe(false);
    expect(getCollapseState(10, undefined)).toBe(false);
  });
});
