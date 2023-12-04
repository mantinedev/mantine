import { getStatus } from './get-status';

const TEST_STATUS = {
  e: false,
  b: true,
  'a.4.c': true,
  'c.d.e': false,
  'l.d.0.1.e': true,
};

describe('@mantine/form/get-status', () => {
  it('returns correct status for given absolute path', () => {
    expect(getStatus(TEST_STATUS, 'b')).toBe(true);
    expect(getStatus(TEST_STATUS, 'e')).toBe(false);
    expect(getStatus(TEST_STATUS, 'unknown')).toBe(false);
  });

  it('returns correct status for given nested path', () => {
    expect(getStatus(TEST_STATUS, 'a.4.c')).toBe(true);
    expect(getStatus(TEST_STATUS, 'c.d.e')).toBe(false);
    expect(getStatus(TEST_STATUS, 'unknown.path')).toBe(false);
  });

  it('returns correct status for computed path', () => {
    expect(getStatus(TEST_STATUS, 'a')).toBe(true);
    expect(getStatus(TEST_STATUS, 'a.4')).toBe(true);
    expect(getStatus(TEST_STATUS, 'a.5')).toBe(false);
    expect(getStatus(TEST_STATUS, 'l.d.0')).toBe(true);
    expect(getStatus(TEST_STATUS, 'l.d.0.2')).toBe(false);
    expect(getStatus(TEST_STATUS, 'd.0')).toBe(false);
  });
});
