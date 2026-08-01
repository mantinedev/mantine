import { getReleaseType, resolveDistTag, wouldMoveLatestBackward } from './resolve-dist-tag';

describe('resolveDistTag', () => {
  it('returns latest for stable versions', () => {
    expect(resolveDistTag('9.16.0')).toBe('latest');
    expect(resolveDistTag('1.0.0')).toBe('latest');
  });

  it('returns next for prerelease versions', () => {
    expect(resolveDistTag('9.16.0-alpha.0')).toBe('next');
    expect(resolveDistTag('9.16.0-beta.3')).toBe('next');
    expect(resolveDistTag('2.0.0-rc.1')).toBe('next');
  });
});

describe('wouldMoveLatestBackward', () => {
  it('is true when a stable version is older than the current latest', () => {
    expect(wouldMoveLatestBackward('9.4.3', '9.5.0')).toBe(true);
    expect(wouldMoveLatestBackward('9.4.3', '10.0.0')).toBe(true);
    expect(wouldMoveLatestBackward('9.9.0', '9.10.0')).toBe(true);
  });

  it('is false when a stable version is newer than or equal to the current latest', () => {
    expect(wouldMoveLatestBackward('9.5.0', '9.4.3')).toBe(false);
    expect(wouldMoveLatestBackward('10.0.0', '9.5.0')).toBe(false);
    expect(wouldMoveLatestBackward('9.10.0', '9.9.0')).toBe(false);
    expect(wouldMoveLatestBackward('9.5.0', '9.5.0')).toBe(false);
  });

  it('is false for prereleases (they never target the latest tag)', () => {
    expect(wouldMoveLatestBackward('9.4.0-alpha.0', '9.5.0')).toBe(false);
  });

  it('is false when there is no current latest or the input is unparseable', () => {
    expect(wouldMoveLatestBackward('9.5.0', null)).toBe(false);
    expect(wouldMoveLatestBackward('9.5.0', '')).toBe(false);
    expect(wouldMoveLatestBackward('9.5.0', 'not-a-version')).toBe(false);
  });
});

describe('getReleaseType', () => {
  it('classifies patches (stable, non-zero patch component)', () => {
    expect(getReleaseType('9.4.3')).toBe('patch');
    expect(getReleaseType('9.4.10')).toBe('patch');
    expect(getReleaseType('10.2.1')).toBe('patch');
  });

  it('classifies minor and major as minor_major (stable, .0)', () => {
    expect(getReleaseType('9.5.0')).toBe('minor_major');
    expect(getReleaseType('10.0.0')).toBe('minor_major');
  });

  it('classifies any prerelease', () => {
    expect(getReleaseType('9.4.3-alpha.0')).toBe('prerelease');
    expect(getReleaseType('9.5.0-beta.1')).toBe('prerelease');
  });

  it('treats an unparseable stable version as prerelease (publish-only, safe default)', () => {
    expect(getReleaseType('not-a-version')).toBe('prerelease');
    expect(getReleaseType('9.4')).toBe('prerelease');
    expect(getReleaseType('abc')).toBe('prerelease');
  });
});
