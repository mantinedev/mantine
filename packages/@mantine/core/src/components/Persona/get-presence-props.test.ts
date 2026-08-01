import { getPresenceProps } from './get-presence-props';

describe('@mantine/core/Persona/get-presence-props', () => {
  it('resolves a status string', () => {
    expect(getPresenceProps('available')).toMatchObject({
      variant: 'filled',
      glyph: 'none',
      label: 'Available',
      processing: false,
    });
  });

  it('resolves a configuration object', () => {
    expect(getPresenceProps({ status: 'busy' })).toMatchObject({
      variant: 'filled',
      label: 'Busy',
    });
  });

  it('falls back to unknown for undefined presence', () => {
    expect(getPresenceProps(undefined).label).toBe('Unknown');
  });

  it('renders statuses that need a non-color cue with a glyph', () => {
    expect(getPresenceProps('do-not-disturb').glyph).toBe('do-not-disturb');
    expect(getPresenceProps('blocked').glyph).toBe('blocked');
    expect(getPresenceProps('out-of-office').glyph).toBe('out-of-office');
  });

  it('renders offline and unknown as outline variant', () => {
    expect(getPresenceProps('offline').variant).toBe('outline');
    expect(getPresenceProps('unknown').variant).toBe('outline');
  });

  it('turns any status into an out-of-office ring when outOfOffice is set', () => {
    const result = getPresenceProps({ status: 'available', outOfOffice: true });
    expect(result.variant).toBe('outline');
    expect(result.glyph).toBe('out-of-office');
    expect(result.label).toBe('Available, out of office');
  });

  it('passes processing flag through', () => {
    expect(getPresenceProps({ status: 'available', processing: true }).processing).toBe(true);
  });
});
