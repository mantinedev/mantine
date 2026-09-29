import { getPresenceLabel, isPresenceVisible, resolvePresenceAppearance } from './resolve-presence';

describe('@mantine/core/Persona/resolve-presence', () => {
  describe('isPresenceVisible', () => {
    it('is false for undefined and "none"', () => {
      expect(isPresenceVisible(undefined)).toBe(false);
      expect(isPresenceVisible('none')).toBe(false);
      expect(isPresenceVisible({ status: 'none' })).toBe(false);
    });

    it('is true for other statuses', () => {
      expect(isPresenceVisible('available')).toBe(true);
      expect(isPresenceVisible({ status: 'busy' })).toBe(true);
    });
  });

  describe('resolvePresenceAppearance', () => {
    it('resolves a status string', () => {
      expect(resolvePresenceAppearance('available')).toEqual({
        status: 'available',
        variant: 'filled',
        glyph: 'none',
        processing: false,
      });
    });

    it('resolves a configuration object', () => {
      expect(resolvePresenceAppearance({ status: 'busy' })).toMatchObject({
        status: 'busy',
        variant: 'filled',
      });
    });

    it('resolves an unknown status string to "unknown"', () => {
      expect(resolvePresenceAppearance('something' as any).status).toBe('unknown');
    });

    it('renders statuses that need a non-color cue with a glyph', () => {
      expect(resolvePresenceAppearance('do-not-disturb').glyph).toBe('do-not-disturb');
      expect(resolvePresenceAppearance('blocked').glyph).toBe('blocked');
      expect(resolvePresenceAppearance('out-of-office').glyph).toBe('out-of-office');
    });

    it('renders offline and unknown as outline variant', () => {
      expect(resolvePresenceAppearance('offline').variant).toBe('outline');
      expect(resolvePresenceAppearance('unknown').variant).toBe('outline');
    });

    it('turns any status into an out-of-office ring when outOfOffice is set', () => {
      const result = resolvePresenceAppearance({ status: 'available', outOfOffice: true });
      expect(result.status).toBe('available');
      expect(result.variant).toBe('outline');
      expect(result.glyph).toBe('out-of-office');
    });

    it('keeps the blocked glyph when outOfOffice is set', () => {
      const result = resolvePresenceAppearance({ status: 'blocked', outOfOffice: true });
      expect(result.variant).toBe('outline');
      expect(result.glyph).toBe('blocked');
    });

    it('passes processing flag through', () => {
      expect(resolvePresenceAppearance({ status: 'available', processing: true }).processing).toBe(
        true
      );
    });
  });

  describe('getPresenceLabel', () => {
    it('returns the default English label', () => {
      expect(getPresenceLabel('available')).toBe('Available');
      expect(getPresenceLabel({ status: 'do-not-disturb' })).toBe('Do not disturb');
    });

    it('adds the out-of-office suffix', () => {
      expect(getPresenceLabel({ status: 'available', outOfOffice: true })).toBe(
        'Available, out of office'
      );
      expect(getPresenceLabel({ status: 'blocked', outOfOffice: true })).toBe(
        'Blocked, out of office'
      );
      expect(getPresenceLabel({ status: 'out-of-office', outOfOffice: true })).toBe(
        'Out of office'
      );
    });

    it('uses custom labels', () => {
      expect(getPresenceLabel('away', { away: 'Abwesend' })).toBe('Abwesend');
      expect(getPresenceLabel('busy', { away: 'Abwesend' })).toBe('Busy');
      expect(
        getPresenceLabel(
          { status: 'available', outOfOffice: true },
          { available: 'Verfügbar', outOfOffice: 'abwesend' }
        )
      ).toBe('Verfügbar, abwesend');
    });

    it('returns an empty string for an empty status label', () => {
      expect(getPresenceLabel('available', { available: '' })).toBe('');
      expect(
        getPresenceLabel(
          { status: 'available', outOfOffice: true },
          { available: '', outOfOffice: '' }
        )
      ).toBe('');
    });

    it('announces the out-of-office suffix alone when the status label is empty', () => {
      expect(getPresenceLabel({ status: 'available', outOfOffice: true }, { available: '' })).toBe(
        'out of office'
      );
      expect(
        getPresenceLabel(
          { status: 'available', outOfOffice: true },
          { available: '', outOfOffice: 'nicht im Büro' }
        )
      ).toBe('nicht im Büro');
    });

    it('drops the out-of-office suffix for an empty outOfOffice label', () => {
      expect(
        getPresenceLabel({ status: 'available', outOfOffice: true }, { outOfOffice: '' })
      ).toBe('Available');
    });
  });
});
