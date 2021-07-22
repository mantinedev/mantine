import { getIncrementedVersion } from './get-incremented-version';

describe('scripts/release/get-incremented-version', () => {
  it('returns right version with patch update', () => {
    expect(getIncrementedVersion('1.1.1', { type: 'patch' })).toBe('1.1.2');
    expect(getIncrementedVersion('1.1.1', { type: 'patch', stage: 'alpha' })).toBe('1.1.2-alpha.0');
    expect(getIncrementedVersion('1.1.2-alpha.0', { type: 'patch', stage: 'alpha' })).toBe(
      '1.1.2-alpha.1'
    );
    expect(getIncrementedVersion('1.1.2-alpha.1', { type: 'patch' })).toBe('1.1.2');
    expect(getIncrementedVersion('1.1.2-alpha.1', { type: 'patch', stage: 'beta' })).toBe(
      '1.1.2-beta.0'
    );
    expect(getIncrementedVersion('1.1.2-beta.0', { type: 'patch', stage: 'beta' })).toBe(
      '1.1.2-beta.1'
    );
    expect(getIncrementedVersion('1.1.2-beta.1', { type: 'patch' })).toBe('1.1.2');
  });

  it('returns right version with minor update', () => {
    expect(getIncrementedVersion('1.1.1', { type: 'minor' })).toBe('1.2.0');
    expect(getIncrementedVersion('1.1.1', { type: 'minor', stage: 'alpha' })).toBe('1.2.0-alpha.0');
    expect(getIncrementedVersion('1.2.0-alpha.0', { type: 'minor', stage: 'alpha' })).toBe(
      '1.2.0-alpha.1'
    );
    expect(getIncrementedVersion('1.2.0-alpha.1', { type: 'minor' })).toBe('1.2.0');
    expect(getIncrementedVersion('1.2.0-alpha.1', { type: 'minor', stage: 'beta' })).toBe(
      '1.2.0-beta.0'
    );
    expect(getIncrementedVersion('1.2.0-beta.0', { type: 'minor', stage: 'beta' })).toBe(
      '1.2.0-beta.1'
    );
    expect(getIncrementedVersion('1.2.0-beta.1', { type: 'minor' })).toBe('1.2.0');
  });

  it('returns right version with major update', () => {
    expect(getIncrementedVersion('1.1.1', { type: 'major' })).toBe('2.0.0');
    expect(getIncrementedVersion('1.1.1', { type: 'major', stage: 'alpha' })).toBe('2.0.0-alpha.0');
    expect(getIncrementedVersion('2.0.0-alpha.0', { type: 'major' })).toBe('2.0.0');
    expect(getIncrementedVersion('2.0.0-alpha.0', { type: 'major', stage: 'alpha' })).toBe(
      '2.0.0-alpha.1'
    );
    expect(getIncrementedVersion('2.0.0-alpha.1', { type: 'major' })).toBe('2.0.0');
    expect(getIncrementedVersion('2.0.0-alpha.1', { type: 'major', stage: 'beta' })).toBe(
      '2.0.0-beta.0'
    );
    expect(getIncrementedVersion('2.0.0-beta.0', { type: 'major', stage: 'beta' })).toBe(
      '2.0.0-beta.1'
    );
    expect(getIncrementedVersion('2.0.0-beta.1', { type: 'major' })).toBe('2.0.0');
  });
});
