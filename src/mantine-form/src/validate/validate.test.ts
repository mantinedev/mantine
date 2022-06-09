import { validateValues } from './validate';

describe('@mantine/form/validate-values', () => {
  it('validates values with rules record (root properties)', () => {
    expect(
      validateValues(
        {
          a: (value) => (value < 2 ? 'error-a' : null),
          b: (value) => (value === '' ? null : 'error-b'),
          c: (_value, values) => (values.b === '' ? 'error-c' : null),
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

  it('validates values with rules record (within list)', () => {
    expect(
      validateValues<{ a: number; b: { c: number; d: string }[] }>(
        {
          a: (value) => (value < 2 ? 'error-a' : null),
          b: {
            c: (value) => (value < 2 ? 'error-c' : null),
            d: (value) => (value === '' ? 'error-d' : null),
          },
        },
        {
          a: 1,
          b: [
            { c: 1, d: '' },
            { c: 2, d: '1' },
            { c: 1, d: '1' },
            { c: 3, d: '' },
          ],
        }
      )
    ).toStrictEqual({
      hasErrors: true,
      errors: {
        a: 'error-a',
        'b.0.c': 'error-c',
        'b.0.d': 'error-d',
        'b.2.c': 'error-c',
        'b.3.d': 'error-d',
      },
    });
  });
});
