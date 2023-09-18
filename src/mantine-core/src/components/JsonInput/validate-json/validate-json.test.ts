import { validateJson } from './validate-json';

describe('@mantine/core/JsonInput/validate-json', () => {
  it('considers empty string to be valid json', () => {
    expect(validateJson('', JSON.parse)).toBe(true);
    expect(validateJson(' \t \n', JSON.parse)).toBe(true);
  });

  it('correctly detects valid and invalid json', () => {
    expect(validateJson(JSON.stringify({}), JSON.parse)).toBe(true);
    expect(validateJson(JSON.stringify({ a: true }), JSON.parse)).toBe(true);
    expect(validateJson('invalid', JSON.parse)).toBe(false);
  });
});
