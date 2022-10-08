import { validateJson } from './validate-json';

describe('@mantine/core/JsonInput/validate-json', () => {
  it('considers empty string to be valid json', () => {
    expect(validateJson('')).toBe(true);
    expect(validateJson(' \t \n')).toBe(true);
  });

  it('correctly detects valid and invalid json', () => {
    expect(validateJson(JSON.stringify({}))).toBe(true);
    expect(validateJson(JSON.stringify({ a: true }))).toBe(true);
    expect(validateJson('invalid')).toBe(false);
  });
});
