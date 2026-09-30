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

export type PersonaPresenceLabels = Partial<
  Record<Exclude<PersonaPresenceStatus, 'none'> | 'outOfOffice', string>
>;

export type PersonaPresenceGlyph = 'none' | 'do-not-disturb' | 'out-of-office' | 'blocked';

type VisiblePresenceStatus = Exclude<PersonaPresenceStatus, 'none'>;

export interface PersonaPresenceAppearance {
  status: VisiblePresenceStatus;
  variant: 'filled' | 'outline';
  glyph: PersonaPresenceGlyph;
  processing: boolean;
}

const STATUS_DATA: Record<
  VisiblePresenceStatus,
  { variant: PersonaPresenceAppearance['variant']; glyph: PersonaPresenceGlyph; label: string }
> = {
  available: { variant: 'filled', glyph: 'none', label: 'Available' },
  away: { variant: 'filled', glyph: 'none', label: 'Away' },
  busy: { variant: 'filled', glyph: 'none', label: 'Busy' },
  'do-not-disturb': { variant: 'filled', glyph: 'do-not-disturb', label: 'Do not disturb' },
  offline: { variant: 'outline', glyph: 'none', label: 'Offline' },
  'out-of-office': { variant: 'outline', glyph: 'out-of-office', label: 'Out of office' },
  blocked: { variant: 'outline', glyph: 'blocked', label: 'Blocked' },
  unknown: { variant: 'outline', glyph: 'none', label: 'Unknown' },
};

function getPresenceConfig(presence: PersonaPresenceValue): PersonaPresenceConfig {
  return typeof presence === 'string' ? { status: presence } : presence;
}

function getVisibleStatus(config: PersonaPresenceConfig): VisiblePresenceStatus {
  return Object.hasOwn(STATUS_DATA, config.status)
    ? (config.status as VisiblePresenceStatus)
    : 'unknown';
}

function isOutOfOfficeModifier(config: PersonaPresenceConfig, status: VisiblePresenceStatus) {
  return !!config.outOfOffice && status !== 'out-of-office';
}

export function isPresenceVisible(
  presence: PersonaPresenceValue | undefined
): presence is PersonaPresenceValue {
  if (presence == null) {
    return false;
  }

  const status = typeof presence === 'string' ? presence : presence.status;
  return status !== 'none';
}

export function resolvePresenceAppearance(
  presence: PersonaPresenceValue
): PersonaPresenceAppearance {
  const config = getPresenceConfig(presence);
  const status = getVisibleStatus(config);
  const { variant, glyph } = STATUS_DATA[status];
  const processing = !!config.processing;

  if (isOutOfOfficeModifier(config, status)) {
    return {
      status,
      variant: 'outline',
      glyph: status === 'blocked' ? 'blocked' : 'out-of-office',
      processing,
    };
  }

  return { status, variant, glyph, processing };
}

export function getPresenceLabel(presence: PersonaPresenceValue, labels?: PersonaPresenceLabels) {
  const config = getPresenceConfig(presence);
  const status = getVisibleStatus(config);
  const label = labels?.[status] ?? STATUS_DATA[status].label;

  if (!isOutOfOfficeModifier(config, status)) {
    return label;
  }

  return [label, labels?.outOfOffice ?? 'out of office'].filter(Boolean).join(', ');
}
