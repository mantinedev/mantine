function getPaddingValue(value: string, defaultPaddingValue: number) {
  const val = parseFloat(value.replace('px', ''));
  return Number.isNaN(val) ? defaultPaddingValue : val;
}

export function getRootPadding(root: HTMLDivElement, defaultPaddingValue: number) {
  const computedStyle = window.getComputedStyle(root);
  return {
    top: getPaddingValue(computedStyle.getPropertyValue('padding-top'), defaultPaddingValue),
    right: getPaddingValue(computedStyle.getPropertyValue('padding-right'), defaultPaddingValue),
    bottom: getPaddingValue(computedStyle.getPropertyValue('padding-bottom'), defaultPaddingValue),
    left: getPaddingValue(computedStyle.getPropertyValue('padding-left'), defaultPaddingValue),
  };
}
