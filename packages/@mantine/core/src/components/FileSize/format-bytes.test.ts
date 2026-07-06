import { formatBytes } from './format-bytes';

describe('@mantine/core/formatBytes', () => {
  it('formats decimal (SI) byte values by default', () => {
    expect(formatBytes(0)).toBe('0 byte');
    expect(formatBytes(512)).toBe('512 byte');
    expect(formatBytes(1450)).toBe('1.45 kB');
    expect(formatBytes(3_200_000_000)).toBe('3.2 GB');
  });

  it('formats binary values with unitSystem="binary"', () => {
    expect(formatBytes(0, { unitSystem: 'binary' })).toBe('0 B');
    expect(formatBytes(1450, { unitSystem: 'binary' })).toBe('1.42 KiB');
    expect(formatBytes(1024, { unitSystem: 'binary' })).toBe('1 KiB');
    expect(formatBytes(1024 * 1024, { unitSystem: 'binary' })).toBe('1 MiB');
  });

  it('supports bit unit', () => {
    expect(formatBytes(8_000_000, { unit: 'bit' })).toBe('8 Mb');
    expect(formatBytes(1450, { unit: 'bit', unitSystem: 'binary' })).toBe('1.42 Kibit');
  });

  it('supports unitDisplay', () => {
    expect(formatBytes(1450, { unitDisplay: 'long' })).toBe('1.45 kilobytes');
    expect(formatBytes(512, { unitDisplay: 'long' })).toBe('512 bytes');
    expect(formatBytes(1450, { unitSystem: 'binary', unitDisplay: 'long' })).toBe('1.42 kibibytes');
    expect(formatBytes(1024, { unitSystem: 'binary', unitDisplay: 'long' })).toBe('1 kibibyte');
    expect(formatBytes(1025, { unitSystem: 'binary', unitDisplay: 'long' })).toBe('1 kibibyte');
    expect(formatBytes(1450, { unitDisplay: 'narrow' })).toBe('1.45kB');
    expect(formatBytes(1450, { unitSystem: 'binary', unitDisplay: 'narrow' })).toBe('1.42KiB');
  });

  it('supports locale', () => {
    expect(formatBytes(1450, { locale: 'de-DE' })).toBe('1,45 kB');
    expect(formatBytes(1450, { unitSystem: 'binary', locale: 'de-DE' })).toBe('1,42 KiB');
  });

  it('preserves locale-specific unit placement for binary units', () => {
    // he-IL renders the unit before the number for exact values
    expect(formatBytes(1024, { unitSystem: 'binary', locale: 'he-IL' }).startsWith('KiB')).toBe(
      true
    );
  });

  it('supports maximumFractionDigits', () => {
    expect(formatBytes(1450, { maximumFractionDigits: 0 })).toBe('1 kB');
    expect(formatBytes(1450, { maximumFractionDigits: 1 })).toBe('1.5 kB');
  });

  it('formats negative values with a sign', () => {
    expect(formatBytes(-1450)).toBe('-1.45 kB');
    expect(formatBytes(-1450, { unitSystem: 'binary' })).toBe('-1.42 KiB');
  });

  it('returns an empty string for non-finite values', () => {
    expect(formatBytes(NaN)).toBe('');
    expect(formatBytes(Infinity)).toBe('');
    expect(formatBytes(-Infinity)).toBe('');
    expect(formatBytes(undefined as any)).toBe('');
  });

  it('does not scale beyond the largest unit Intl supports', () => {
    expect(formatBytes(10 ** 18)).toBe('1,000 PB');
    // Intl has no `petabit`, so bits clamp at terabit instead of throwing
    expect(formatBytes(10 ** 15, { unit: 'bit' })).toBe('1,000 Tb');
    expect(formatBytes(1024 ** 5, { unit: 'bit', unitSystem: 'binary' })).toBe('1,024 Tibit');
  });
});
