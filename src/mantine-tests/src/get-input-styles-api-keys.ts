const excludeStyles = ['filledVariant', 'defaultVariant', 'unstyledVariant', 'disabled'];

export function getInputStylesApiKeys(keys: string[]) {
  return keys.filter((key) => !excludeStyles.includes(key));
}
