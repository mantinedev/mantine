import { makeTriggerRegex } from './make-trigger-regex';

describe('@mantine/core/Mentions/make-trigger-regex', () => {
  it('matches the query typed after the trigger at the end of the string', () => {
    const regex = makeTriggerRegex('@');
    const match = 'Hello @wal'.match(regex);
    expect(match).not.toBeNull();
    expect(match![1]).toBe('@wal');
    expect(match![2]).toBe('wal');
  });

  it('matches the trigger at the start of the string', () => {
    const regex = makeTriggerRegex('@');
    const match = '@jesse'.match(regex);
    expect(match![2]).toBe('jesse');
  });

  it('does not match when the trigger is preceded by a word character', () => {
    const regex = makeTriggerRegex('@');
    expect('email@domain'.match(regex)).toBeNull();
  });

  it('stops the query at whitespace by default', () => {
    const regex = makeTriggerRegex('@');
    expect('@wal ter'.match(regex)).toBeNull();
  });

  it('allows spaces in the query when allowSpaceInQuery is set', () => {
    const regex = makeTriggerRegex('@', { allowSpaceInQuery: true });
    const match = '@Walter Wh'.match(regex);
    expect(match![2]).toBe('Walter Wh');
  });

  it('supports custom trigger characters', () => {
    const regex = makeTriggerRegex('#');
    expect('a #tag'.match(regex)![2]).toBe('tag');
  });

  it('returns a RegExp trigger with two or more capture groups as is', () => {
    const custom = /(?:^|\s)(:(\w+))$/;
    expect(makeTriggerRegex(custom)).toBe(custom);
  });

  it('does not let allowSpaceInQuery cross a newline', () => {
    const regex = makeTriggerRegex('@', { allowSpaceInQuery: true });
    expect('@Walter\nWh'.match(regex)).toBeNull();
    expect('line\n@Walter Wh'.match(regex)![2]).toBe('Walter Wh');
  });

  it('wraps a RegExp trigger without capture groups into the trigger + query shape', () => {
    const regex = makeTriggerRegex(/@/);
    const match = 'Hello @wal'.match(regex);
    expect(match![1]).toBe('@wal');
    expect(match![2]).toBe('wal');
    expect('email@domain'.match(regex)).toBeNull();
    expect('@wal ter'.match(regex)).toBeNull();
  });

  it('wraps a character class RegExp trigger', () => {
    const regex = makeTriggerRegex(/[@#]/);
    expect('a #tag'.match(regex)![2]).toBe('tag');
    expect('a @x #tag'.match(regex)![1]).toBe('#tag');
  });

  it('starts the query after the last trigger of a wrapped RegExp with allowSpaceInQuery', () => {
    const regex = makeTriggerRegex(/@/, { allowSpaceInQuery: true });
    expect('@a @Walter Wh'.match(regex)![2]).toBe('Walter Wh');
  });

  it('drops the global flag of a RegExp trigger with two or more capture groups', () => {
    const regex = makeTriggerRegex(/(?:^|\s)(:(\w*))$/g);
    expect(regex.flags).not.toContain('g');
    expect('hi :sm'.match(regex)![2]).toBe('sm');
  });
});
