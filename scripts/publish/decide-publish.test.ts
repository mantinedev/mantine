import { decidePublish } from './decide-publish';

describe('decidePublish', () => {
  it('skips when the package is not on the registry', () => {
    expect(decidePublish('9.16.0', null)).toBe('skip-not-on-registry');
  });

  it('skips when the exact version is already published', () => {
    expect(decidePublish('9.16.0', ['9.15.0', '9.16.0'])).toBe('skip-already-published');
  });

  it('publishes when the version is new', () => {
    expect(decidePublish('9.16.0', ['9.15.0'])).toBe('publish');
  });
});
