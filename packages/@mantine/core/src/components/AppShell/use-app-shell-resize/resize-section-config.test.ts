import { getResizeDelta, RESIZE_SECTION_NAMES, RESIZE_SECTIONS } from './resize-section-config';

describe('@mantine/core/AppShell/resize-section-config', () => {
  it('exposes all four sections', () => {
    expect(RESIZE_SECTION_NAMES).toStrictEqual(['navbar', 'aside', 'header', 'footer']);
  });

  it('maps sections to css variables', () => {
    expect(RESIZE_SECTIONS.navbar.sizeVariable).toBe('--app-shell-navbar-width');
    expect(RESIZE_SECTIONS.navbar.offsetVariable).toBe('--app-shell-navbar-offset');
    expect(RESIZE_SECTIONS.navbar.gridWidthVariable).toBe('--app-shell-navbar-grid-width');
    expect(RESIZE_SECTIONS.header.sizeVariable).toBe('--app-shell-header-height');
    expect(RESIZE_SECTIONS.header.gridWidthVariable).toBeUndefined();
    expect(RESIZE_SECTIONS.footer.handleDisplayVariable).toBe(
      '--app-shell-footer-resize-handle-display'
    );
  });

  it('only exposes a safe-area variable for the footer', () => {
    expect(RESIZE_SECTIONS.footer.safeAreaVariable).toBe('--app-shell-footer-safe-area');
    expect(RESIZE_SECTIONS.navbar.safeAreaVariable).toBeUndefined();
    expect(RESIZE_SECTIONS.aside.safeAreaVariable).toBeUndefined();
    expect(RESIZE_SECTIONS.header.safeAreaVariable).toBeUndefined();
  });

  it('resolves delta on the horizontal axis', () => {
    expect(getResizeDelta({ section: 'navbar', deltaX: 20, deltaY: 5, dir: 'ltr' })).toBe(20);
    expect(getResizeDelta({ section: 'aside', deltaX: 20, deltaY: 5, dir: 'ltr' })).toBe(-20);
  });

  it('flips the horizontal axis in rtl', () => {
    expect(getResizeDelta({ section: 'navbar', deltaX: 20, deltaY: 0, dir: 'rtl' })).toBe(-20);
    expect(getResizeDelta({ section: 'aside', deltaX: 20, deltaY: 0, dir: 'rtl' })).toBe(20);
  });

  it('resolves delta on the vertical axis and ignores direction', () => {
    expect(getResizeDelta({ section: 'header', deltaX: 99, deltaY: 20, dir: 'rtl' })).toBe(20);
    expect(getResizeDelta({ section: 'footer', deltaX: 99, deltaY: 20, dir: 'ltr' })).toBe(-20);
  });
});
