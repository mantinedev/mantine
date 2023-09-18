function scaleRem(remValue: string) {
  return `calc(${remValue} * var(--mantine-scale))`;
}

function createConverter(units: string, { shouldScale = false } = {}) {
  return (value: unknown) => {
    if (value === 0 || value === '0') {
      return '0';
    }

    if (typeof value === 'number') {
      const val = `${value / 16}${units}`;
      return shouldScale ? scaleRem(val) : val;
    }

    if (typeof value === 'string') {
      if (value.includes('calc(') || value.includes('var(')) {
        return value;
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
  };
}

export const rem = createConverter('rem', { shouldScale: true });
export const em = createConverter('em');
