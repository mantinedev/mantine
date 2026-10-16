import { isNotEmpty } from '../is-not-empty/is-not-empty';
import { when } from './when';

interface Values {
  enabled: boolean;
  name: string;
}

describe('@mantine/form/when', () => {
  it('returns null when condition is false', () => {
    const rule = jest.fn(() => 'error');
    const validator = when<Values>((values) => values.enabled, rule);
    expect(validator('', { enabled: false, name: '' }, 'name')).toBe(null);
    expect(rule).not.toHaveBeenCalled();
  });

  it('returns rule result when condition is true', () => {
    const validator = when<Values>((values) => values.enabled, isNotEmpty('required'));
    expect(validator('', { enabled: true, name: '' }, 'name')).toBe('required');
    expect(validator('John', { enabled: true, name: 'John' }, 'name')).toBe(null);
  });

  it('passes value, values, path and signal to the rule', () => {
    const rule = jest.fn(() => null);
    const condition = jest.fn(() => true);
    const values = { enabled: true, name: 'John' };
    const signal = new AbortController().signal;
    when<Values, string>(condition, rule)('John', values, 'users.0.name', signal);
    expect(condition).toHaveBeenCalledWith(values);
    expect(rule).toHaveBeenCalledWith('John', values, 'users.0.name', signal);
  });

  it('returns promise from async rule when condition is true', async () => {
    const validator = when<Values>(
      (values) => values.enabled,
      async () => 'async-error'
    );
    await expect(validator('', { enabled: true, name: '' }, 'name')).resolves.toBe('async-error');
  });
});
