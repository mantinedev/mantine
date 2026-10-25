import { getSafeAreaInset } from './safe-area-inset';

describe('@mantine/core/AppShell/safe-area-inset', () => {
  it('returns 0 when no variable is given', () => {
    const element = document.createElement('div');
    expect(getSafeAreaInset(element, undefined)).toBe(0);
  });

  it('returns 0 when the variable is not set on the element', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    expect(getSafeAreaInset(element, '--app-shell-footer-safe-area')).toBe(0);
    document.body.removeChild(element);
  });

  it('parses a pixel value from the custom property', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    element.style.setProperty('--app-shell-footer-safe-area', '34px');
    expect(getSafeAreaInset(element, '--app-shell-footer-safe-area')).toBe(34);
    document.body.removeChild(element);
  });

  it('returns 0 when the custom property value cannot be parsed', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    element.style.setProperty('--app-shell-footer-safe-area', 'env(safe-area-inset-bottom)');
    expect(getSafeAreaInset(element, '--app-shell-footer-safe-area')).toBe(0);
    document.body.removeChild(element);
  });
});
