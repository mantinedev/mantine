export interface FontOption {
  value: string;
  label: string;
  stack: string;
  googleFamily?: string;
}

export const FONT_OPTIONS: FontOption[] = [
  {
    value: 'system',
    label: 'System UI',
    stack: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  },
  { value: 'inter', label: 'Inter', stack: 'Inter, sans-serif', googleFamily: 'Inter' },
  { value: 'manrope', label: 'Manrope', stack: 'Manrope, sans-serif', googleFamily: 'Manrope' },
  { value: 'dm-sans', label: 'DM Sans', stack: "'DM Sans', sans-serif", googleFamily: 'DM Sans' },
  {
    value: 'ibm-plex-sans',
    label: 'IBM Plex Sans',
    stack: "'IBM Plex Sans', sans-serif",
    googleFamily: 'IBM Plex Sans',
  },
  {
    value: 'space-grotesk',
    label: 'Space Grotesk',
    stack: "'Space Grotesk', sans-serif",
    googleFamily: 'Space Grotesk',
  },
  {
    value: 'source-serif',
    label: 'Source Serif 4',
    stack: "'Source Serif 4', Georgia, serif",
    googleFamily: 'Source Serif 4',
  },
  {
    value: 'fraunces',
    label: 'Fraunces',
    stack: 'Fraunces, Georgia, serif',
    googleFamily: 'Fraunces',
  },
  { value: 'lora', label: 'Lora', stack: 'Lora, Georgia, serif', googleFamily: 'Lora' },
];

export function getFontOption(value: string | null) {
  return FONT_OPTIONS.find((option) => option.value === value) ?? null;
}

export function getFontsUrl(values: (string | null)[]) {
  const families = Array.from(
    new Set(values.map((value) => getFontOption(value)?.googleFamily).filter(Boolean))
  ) as string[];

  if (families.length === 0) {
    return null;
  }

  const query = families
    .map((family) => `family=${family.replace(/ /g, '+')}:wght@400;500;600;700`)
    .join('&');

  return `https://fonts.googleapis.com/css2?${query}&display=swap`;
}
