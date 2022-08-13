import { getPath } from './get-path';

const values = {
  name: 'John',
  age: 42,
  description: ['male', 'mid-age'],
  job: {
    title: 'Engineer',
    permissions: {
      admin: false,
      user: true,
    },
  },

  duties: [
    {
      title: 'Drink coffee',
      when: [{ morning: true }, { afternoon: false }, { evening: false }],
      info: {
        active: true,
        activity: [
          { date: 'yesterday', event: 'log' },
          { date: 'today', event: 'log' },
        ],
      },
    },
    {
      title: 'Do the job',
      when: [{ morning: false }, { afternoon: true }, { evening: false }],
      info: {
        active: true,
        activity: [
          { date: 'yesterday', event: 'log' },
          { date: 'today', event: 'log' },
        ],
      },
    },
  ],
};

describe('@mantine/form/get-path', () => {
  it('supports getting property from root', () => {
    expect(getPath('name', values)).toBe('John');
    expect(getPath('age', values)).toBe(42);
  });

  it('supports getting nested object property', () => {
    expect(getPath('job.title', values)).toBe('Engineer');
    expect(getPath('job.permissions', values)).toStrictEqual({ admin: false, user: true });
    expect(getPath('job.permissions.user', values)).toBe(true);
  });

  it('supports getting array item', () => {
    expect(getPath('description.0', values)).toBe('male');
    expect(getPath('description.1', values)).toBe('mid-age');
  });

  it('supports getting property of an object nested in an array', () => {
    expect(getPath('duties.0.title', values)).toBe('Drink coffee');
    expect(getPath('duties.1.title', values)).toBe('Do the job');
  });

  it('supports multiple nesting', () => {
    expect(getPath('duties.0.when.0.morning', values)).toBe(true);
    expect(getPath('duties.1.info.activity.0.date', values)).toBe('yesterday');
  });

  it('returns undefined if path cannot be found', () => {
    expect(getPath('random', values)).toBe(undefined);
    expect(getPath('name.random.path', values)).toBe(undefined);
    expect(getPath('duties.3.title', values)).toBe(undefined);
  });

  it('correctly handles undefined and null values', () => {
    expect(getPath('a.b.c', undefined)).toBe(undefined);
    expect(getPath('a.b.c', null)).toBe(undefined);
  });
});
