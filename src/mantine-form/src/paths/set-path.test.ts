import { setPath } from './set-path';

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

describe('@mantine/form/set-path', () => {
  it('sets value at root property', () => {
    expect(setPath('name', 'Jane', values)).toStrictEqual({ ...values, name: 'Jane' });
    expect(setPath('age', 25, values)).toStrictEqual({ ...values, age: 25 });
  });

  it('sets plain array path', () => {
    expect(setPath('description.1', 'young', values)).toStrictEqual({
      ...values,
      description: ['male', 'young'],
    });
    expect(setPath('description.0', 'female', values)).toStrictEqual({
      ...values,
      description: ['female', 'mid-age'],
    });
  });

  it('sets nested object path', () => {
    expect(setPath('job.permissions.user', false, values)).toStrictEqual({
      ...values,
      job: {
        title: 'Engineer',
        permissions: {
          admin: false,
          user: false,
        },
      },
    });
  });

  it('sets deeply nested path', () => {
    expect(setPath('duties.1.info.activity.0.event', 'test', values)).toStrictEqual({
      ...values,
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
              { date: 'yesterday', event: 'test' },
              { date: 'today', event: 'log' },
            ],
          },
        },
      ],
    });
  });
});
