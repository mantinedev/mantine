// Add ResizeObserver to window object
// should be called in each file which uses resize observer
export function mockResizeObserver() {
  class ResizeObserver {
    observe() {}
    unobserve() {}
  }

  // @ts-ignore
  window.ResizeObserver = ResizeObserver;
}
