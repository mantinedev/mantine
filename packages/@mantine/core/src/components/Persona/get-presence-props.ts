export type PersonaPresenceStatus =
  | 'none'
  | 'available'
  | 'away'
  | 'busy'
  | 'do-not-disturb'
  | 'offline'
  | 'out-of-office'
  | 'blocked'
  | 'unknown';

export interface PersonaPresenceConfig {
  /** Presence status */
  status: PersonaPresenceStatus;

  /** If set, the badge is displayed as a ring to indicate that the person is out of office */
  outOfOffice?: boolean;

  /** If set, the badge has a pulsing processing animation */
  processing?: boolean;
}

export type PersonaPresenceValue = PersonaPresenceStatus | PersonaPresenceConfig;

export type PersonaPresenceGlyph = 'none' | 'do-not-disturb' | 'out-of-office' | 'blocked';

export interface PersonaResolvedPresence {
  /** Resolved CSS color of the badge */
  color: string;

  /** Badge appearance: `filled` is a solid dot, `outline` is a ring */
  variant: 'filled' | 'outline';

  /** Glyph rendered inside the badge */
  glyph: PersonaPresenceGlyph;

  /** Accessible label announced by screen readers */
  label: string;

  /** Whether the badge has a processing animation */
  processing: boolean;
}

const STATUS_DATA: Record<PersonaPresenceStatus, Omit<PersonaResolvedPresence, 'processing'>> = {
  none: {
    color: 'transparent',
    variant: 'filled',
    glyph: 'none',
    label: '',
  },
  available: {
    color: 'var(--mantine-color-green-filled)',
    variant: 'filled',
    glyph: 'none',
    label: 'Available',
  },
  away: {
    color: 'var(--mantine-color-yellow-filled)',
    variant: 'filled',
    glyph: 'none',
    label: 'Away',
  },
  busy: {
    color: 'var(--mantine-color-red-filled)',
    variant: 'filled',
    glyph: 'none',
    label: 'Busy',
  },
  'do-not-disturb': {
    color: 'var(--mantine-color-red-filled)',
    variant: 'filled',
    glyph: 'do-not-disturb',
    label: 'Do not disturb',
  },
  offline: {
    color: 'var(--mantine-color-gray-5)',
    variant: 'outline',
    glyph: 'none',
    label: 'Offline',
  },
  'out-of-office': {
    color: 'var(--mantine-color-grape-filled)',
    variant: 'outline',
    glyph: 'out-of-office',
    label: 'Out of office',
  },
  blocked: {
    color: 'var(--mantine-color-red-filled)',
    variant: 'outline',
    glyph: 'blocked',
    label: 'Blocked',
  },
  unknown: {
    color: 'var(--mantine-color-gray-5)',
    variant: 'outline',
    glyph: 'none',
    label: 'Unknown',
  },
};

export function isPresenceVisible(presence: PersonaPresenceValue | undefined): boolean {
  if (presence == null) {
    return false;
  }

  const status = typeof presence === 'string' ? presence : presence.status;
  return status !== 'none';
}

export function getPresenceProps(
  presence: PersonaPresenceValue | undefined
): PersonaResolvedPresence {
  const config: PersonaPresenceConfig =
    typeof presence === 'string' ? { status: presence } : (presence ?? { status: 'unknown' });

  const base = STATUS_DATA[config.status] ?? STATUS_DATA.unknown;
  const processing = !!config.processing;

  if (config.outOfOffice && config.status !== 'out-of-office') {
    return {
      ...base,
      variant: 'outline',
      glyph: 'out-of-office',
      label: `${base.label}, out of office`,
      processing,
    };
  }

  return { ...base, processing };
}
