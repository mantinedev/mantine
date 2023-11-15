import { Signale } from 'signale';

export const createLogger = (scope: string) =>
  new Signale({
    scope,
    types: {
      success: {
        badge: '✔',
        color: 'green',
        label: '',
      },
      error: {
        badge: '✖',
        color: 'red',
        label: '',
      },
    },
  });
