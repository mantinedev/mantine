import { getInputMode } from './get-input-mode';

describe('@mantine/core/utils/get-input-mode', () => {
  it('gets input mode', () => {
    expect(getInputMode(0.1, 0.1, 'android')).toBe('decimal');
    expect(getInputMode(1, 0, 'android')).toBe('numeric');
    expect(getInputMode(-0.1, 0.1, 'android')).toBe('decimal');
    expect(getInputMode(-1, 0, 'android')).toBe('decimal');
    expect(getInputMode(0.1, 0.1, 'ios')).toBe('decimal');
    expect(getInputMode(1, 0, 'ios')).toBe('numeric');
    expect(getInputMode(-0.1, 0.1, 'ios')).toBe('text');
    expect(getInputMode(-1, 0, 'ios')).toBe('text');
  });
});
