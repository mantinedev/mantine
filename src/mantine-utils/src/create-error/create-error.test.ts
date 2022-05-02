import { createError, createErrors } from './create-error';

describe('@mantine/utils/create-error', () => {
  it('creates correct error with default scope', () => {
    expect(
      createError({ message: 'Tabs component was not found in tree', code: 'tabs-context' })
    ).toBe(
      '[@mantine/core] Tabs component was not found in tree. Learn more – https://mantine.dev/errors/tabs-context/'
    );
  });

  it('creates correct error with custom scope', () => {
    expect(
      createError({
        message: 'Tabs component was not found in tree.',
        code: 'core-context',
        scope: '@mantine/core',
      })
    ).toBe(
      '[@mantine/core] Tabs component was not found in tree. Learn more – https://mantine.dev/errors/core-context/'
    );
  });

  it('creates errors object with createErrors function', () => {
    expect(createErrors({ error1: 'Error 1', error2: 'Error 2' })).toStrictEqual({
      error1: createError({ message: 'Error 1', code: 'error1' }),
      error2: createError({ message: 'Error 2', code: 'error2' }),
    });

    expect(createErrors({ error1: 'Error 1', error2: 'Error 2' }, '@mantine/dates')).toStrictEqual({
      error1: createError({ message: 'Error 1', code: 'error1', scope: '@mantine/dates' }),
      error2: createError({ message: 'Error 2', code: 'error2', scope: '@mantine/dates' }),
    });
  });
});
