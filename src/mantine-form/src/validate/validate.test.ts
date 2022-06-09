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

  it('validates lists values with rules record (root properties)', () => {
    expect(
      validateValues(
        {
          a: (value) => (value < 2 ? 'error-a' : null),
          b: (value) => (value.length === 0 ? 'error-b' : null),
          c: (value) => (value.length === 0 ? 'error-c' : null),
        },
        { a: 1, b: [], c: [1, 2, 3] }
      )
    ).toStrictEqual({
      hasErrors: true,
      errors: {
        a: 'error-a',
        b: 'error-b',
      },
    });
  });

  it('validates values with rules record (within list)', () => {
    expect(
      validateValues(
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

  it('validates values with rules record (within object)', () => {
    expect(
      validateValues(
        {
          a: {
            b: (value) => (value === 1 ? 'error-b' : null),
            c: {
              d: (value) => (value === 1 ? 'error-d' : null),
            },
          },
        },
        { a: { b: 1, c: { d: 1 } } }
      )
    ).toStrictEqual({
      hasErrors: true,
      errors: {
        'a.b': 'error-b',
        'a.c.d': 'error-d',
      },
    });
  });
});
