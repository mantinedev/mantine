export interface FormatBytesOptions {
  /** Unit that the value is measured in @default 'byte' */
  unit?: 'byte' | 'bit';

  /** Unit system used to scale the value: `decimal` (1000, kB/MB/GB) or `binary` (1024, KiB/MiB/GiB) @default 'decimal' */
  unitSystem?: 'decimal' | 'binary';

  /** Controls how the unit is displayed, `short` -> kB, `long` -> kilobytes, `narrow` -> kB @default 'short' */
  unitDisplay?: 'short' | 'long' | 'narrow';

  /** Locale used to format the number, uses the host default locale if not set */
  locale?: string;

  /** Maximum number of digits displayed after the decimal point @default 2 */
  maximumFractionDigits?: number;
}

const DECIMAL_PREFIXES = ['', 'kilo', 'mega', 'giga', 'tera', 'peta'];

const BINARY_LABELS: Record<'byte' | 'bit', Record<'short' | 'long' | 'narrow', string[]>> = {
  byte: {
    short: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'],
    narrow: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'],
    long: ['byte', 'kibibyte', 'mebibyte', 'gibibyte', 'tebibyte', 'pebibyte'],
  },
  bit: {
    short: ['bit', 'Kibit', 'Mibit', 'Gibit', 'Tibit', 'Pibit'],
    narrow: ['bit', 'Kibit', 'Mibit', 'Gibit', 'Tibit', 'Pibit'],
    long: ['bit', 'kibibit', 'mebibit', 'gibibit', 'tebibit', 'pebibit'],
  },
};

const MAX_EXPONENT: Record<'byte' | 'bit', number> = {
  byte: 5,
  bit: 4,
};

export function formatBytes(value: number, options: FormatBytesOptions = {}): string {
  const {
    unit = 'byte',
    unitSystem = 'decimal',
    unitDisplay = 'short',
    locale,
    maximumFractionDigits = 2,
  } = options;

  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return '';
  }

  const base = unitSystem === 'binary' ? 1024 : 1000;
  const absValue = Math.abs(value);
  const exponent =
    absValue < 1
      ? 0
      : Math.min(Math.floor(Math.log(absValue) / Math.log(base)), MAX_EXPONENT[unit]);
  const scaledValue = value / base ** exponent;

  if (unitSystem === 'binary') {
    const labels = BINARY_LABELS[unit][unitDisplay] ?? BINARY_LABELS[unit].short;
    const roundedValue = Number(scaledValue.toFixed(maximumFractionDigits));
    const label =
      unitDisplay === 'long' && Math.abs(roundedValue) !== 1
        ? `${labels[exponent]}s`
        : labels[exponent];

    return new Intl.NumberFormat(locale, {
      style: 'unit',
      unit: `${DECIMAL_PREFIXES[exponent]}${unit}`,
      unitDisplay,
      maximumFractionDigits,
    })
      .formatToParts(scaledValue)
      .map((part) => (part.type === 'unit' ? label : part.value))
      .join('');
  }

  return new Intl.NumberFormat(locale, {
    style: 'unit',
    unit: `${DECIMAL_PREFIXES[exponent]}${unit}`,
    unitDisplay,
    maximumFractionDigits,
  }).format(scaledValue);
}
