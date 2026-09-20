/**
 * jsdom reports a zero-sized layout, which makes `@tanstack/virtual-core`
 * (which measures the scroll element through `offsetWidth` / `offsetHeight`)
 * render nothing. Giving every element a size lets the virtual body render
 * its first rows in tests.
 */
export function mockVirtualViewport(height = 300, width = 800) {
  const proto = HTMLElement.prototype;
  const originalHeight = Object.getOwnPropertyDescriptor(proto, 'offsetHeight');
  const originalWidth = Object.getOwnPropertyDescriptor(proto, 'offsetWidth');

  Object.defineProperty(proto, 'offsetHeight', { configurable: true, get: () => height });
  Object.defineProperty(proto, 'offsetWidth', { configurable: true, get: () => width });

  return () => {
    if (originalHeight) {
      Object.defineProperty(proto, 'offsetHeight', originalHeight);
    }
    if (originalWidth) {
      Object.defineProperty(proto, 'offsetWidth', originalWidth);
    }
  };
}
