import { validateValues } from './validate';

describe('@mantine/form/validate-values', () => {
  it('validates values with rules record (root properties)', () => {
    expect(
      validateValues(
        {
          a: (value) => (value < 2 ? 'error-a' : null),
          b: (value) => (value === '' ? null : 'error-b'),
          c: (value, values) => (values.b === '' ? 'error-c' : null),
        },
        { a: 1, b: '', c: '' }
      )
    ).toStrictEqual({
      hasErrors: true,
      errors: {
        a: 'error-a',
        c: 'error-c',
      },
    });
  });
});
