export function getSafeAreaInset(element: Element, variable: string | undefined) {
  if (!variable) {
    return 0;
  }

  const value = window.getComputedStyle(element).getPropertyValue(variable);
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}
