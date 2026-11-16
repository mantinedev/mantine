import { isUrl } from './is-url';

const TEST_ERROR = 'is-url-error';

describe('@mantine/form/isUrl', () => {
  it('detects valid URLs', () => {
    const validator = isUrl(TEST_ERROR);
    expect(validator('https://example.com')).toBe(null);
    expect(validator('http://example.com')).toBe(null);
    expect(validator('https://example.com/path?query=1')).toBe(null);
    expect(validator('https://sub.domain.example.com')).toBe(null);
    expect(validator('https://example.com:8080')).toBe(null);
    expect(validator('https://example.com/path#hash')).toBe(null);
  });

  it('detects invalid URLs', () => {
    const validator = isUrl(TEST_ERROR);
    expect(validator('')).toBe(TEST_ERROR);
    expect(validator('not-a-url')).toBe(TEST_ERROR);
    expect(validator('example.com')).toBe(TEST_ERROR);
    expect(validator('://missing-protocol.com')).toBe(TEST_ERROR);
  });

  it('rejects non-string values', () => {
    const validator = isUrl(TEST_ERROR);
    expect(validator(123)).toBe(TEST_ERROR);
    expect(validator(null)).toBe(TEST_ERROR);
    expect(validator(undefined)).toBe(TEST_ERROR);
    expect(validator([])).toBe(TEST_ERROR);
    expect(validator({})).toBe(TEST_ERROR);
  });

  it('rejects localhost by default', () => {
    const validator = isUrl(TEST_ERROR);
    expect(validator('http://localhost')).toBe(TEST_ERROR);
    expect(validator('http://localhost:3000')).toBe(TEST_ERROR);
  });

  it('rejects loopback addresses and localhost aliases by default', () => {
    const validator = isUrl(TEST_ERROR);
    expect(validator('http://127.0.0.1')).toBe(TEST_ERROR);
    expect(validator('http://127.0.0.1:3000/path')).toBe(TEST_ERROR);
    expect(validator('http://127.1.2.3')).toBe(TEST_ERROR);
    expect(validator('http://127.1')).toBe(TEST_ERROR);
    expect(validator('http://[::1]:8080')).toBe(TEST_ERROR);
    expect(validator('http://LOCALHOST')).toBe(TEST_ERROR);
    expect(validator('http://localhost.')).toBe(TEST_ERROR);
    expect(validator('http://app.localhost')).toBe(TEST_ERROR);
  });

  it('does not treat hosts that only contain localhost or 127 as loopback', () => {
    const validator = isUrl(TEST_ERROR);
    expect(validator('https://localhost.example.com')).toBe(null);
    expect(validator('https://mylocalhost.com')).toBe(null);
    expect(validator('https://127.example.com')).toBe(null);
    expect(validator('http://128.0.0.1')).toBe(null);
  });

  it('allows localhost when option is set', () => {
    const validator = isUrl({ allowLocalhost: true }, TEST_ERROR);
    expect(validator('http://localhost')).toBe(null);
    expect(validator('http://localhost:3000')).toBe(null);
    expect(validator('http://127.0.0.1:3000')).toBe(null);
    expect(validator('http://[::1]')).toBe(null);
    expect(validator('http://app.localhost')).toBe(null);
  });

  it('validates protocols', () => {
    const validator = isUrl(TEST_ERROR);
    expect(validator('ftp://example.com')).toBe(TEST_ERROR);
    expect(validator('mailto:user@example.com')).toBe(TEST_ERROR);
  });

  it('supports custom protocols', () => {
    const validator = isUrl({ protocols: ['ftp', 'https'] }, TEST_ERROR);
    expect(validator('ftp://example.com')).toBe(null);
    expect(validator('https://example.com')).toBe(null);
    expect(validator('http://example.com')).toBe(TEST_ERROR);
  });

  it('returns true as default error', () => {
    const validator = isUrl();
    expect(validator('not-a-url')).toBe(true);
    expect(validator('https://example.com')).toBe(null);
  });

  it('supports options-only call without error', () => {
    const validator = isUrl({ allowLocalhost: true });
    expect(validator('http://localhost')).toBe(null);
    expect(validator('not-a-url')).toBe(true);
  });
});
