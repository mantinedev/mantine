import { createError } from './create-error';

describe('@mantine/utils/create-error', () => {
  it('creates correct error with default scope', () => {
    expect(
      createError({ message: 'Tabs component was not found in tree', code: 'tabs-context' })
    ).toStrictEqual({
      message:
        '[@mantine/core] Tabs component was not found in tree. Learn more – https://mantine.dev/error/tabs-context/',
      code: 'tabs-context',
    });
  });

  it('creates correct error with custom scope', () => {
    expect(
      createError({
        message: 'Tabs component was not found in tree.',
        code: 'core-context',
        scope: '@mantine/core',
      })
    ).toStrictEqual({
      message:
        '[@mantine/core] Tabs component was not found in tree. Learn more – https://mantine.dev/error/core-context/',
      code: 'core-context',
    });
  });
});
