function getTransformedScaledValue(value: unknown) {
  if (typeof value !== 'string' || !value.includes('var(--mantine-scale)')) {
    return value;
  }

  return value
    .match(/^calc\((.*?)\)$/)?.[1]
    .split('*')[0]
    .trim();
}

export function px(value: unknown) {
  const transformedValue = getTransformedScaledValue(value);

  if (typeof transformedValue === 'number') {
    return transformedValue;
  }

  if (typeof transformedValue === 'string') {
    if (transformedValue.includes('calc') || transformedValue.includes('var')) {
      return transformedValue;
    }

    if (transformedValue.includes('px')) {
      return Number(transformedValue.replace('px', ''));
    }

    if (transformedValue.includes('rem')) {
      return Number(transformedValue.replace('rem', '')) * 16;
    }

    if (transformedValue.includes('em')) {
      return Number(transformedValue.replace('em', '')) * 16;
    }

    return Number(transformedValue);
  }

  return NaN;
}
