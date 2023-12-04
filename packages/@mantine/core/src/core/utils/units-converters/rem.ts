function scaleRem(remValue: string) {
  return `calc(${remValue} * var(--mantine-scale))`;
}

function createConverter(units: string, { shouldScale = false } = {}) {
  function converter(value: unknown): string {
    if (value === 0 || value === '0') {
      return '0';
    }

    if (typeof value === 'number') {
      const val = `${value / 16}${units}`;
      return shouldScale ? scaleRem(val) : val;
    }

    if (typeof value === 'string') {
      if (value.startsWith('calc(') || value.startsWith('var(') || value.startsWith('clamp(')) {
        return value;
      }

      if (value.includes(' ')) {
        return value
          .split(' ')
          .map((val) => converter(val))
          .join(' ');
      }

      if (value.includes(units)) {
        return shouldScale ? scaleRem(value) : value;
      }

      const replaced = value.replace('px', '');
      if (!Number.isNaN(Number(replaced))) {
        const val = `${Number(replaced) / 16}${units}`;
        return shouldScale ? scaleRem(val) : val;
      }
    }

    return value as string;
  }

  return converter;
}

export const rem = createConverter('rem', { shouldScale: true });
export const em = createConverter('em');
