import { validateValues } from './validate-values';

describe('@mantine/form/validate-values', () => {
  it('returns correct results if form does not have any errors', () => {
    expect(
      validateValues(
        {
          a: (value) => (value === 1 ? null : 'error-a'),
          b: (value) => (value === 1 ? null : 'error-b'),
        },
        { a: 1, b: 1 }
      )
    ).toStrictEqual({
      hasErrors: false,
      errors: {},
    });
  });

  it('validates values with function', () => {
    expect(validateValues(() => ({ a: 'error-a', b: 'error-b' }), { a: 1, b: 2 })).toStrictEqual({
      hasErrors: true,
      errors: {
        a: 'error-a',
        b: 'error-b',
      },
    });
  });

  it('correctly handles empty errors with validate function', () => {
    expect(validateValues(() => ({}), { a: 1, b: 2 })).toStrictEqual({
      hasErrors: false,
      errors: {},
    });
  });

  it('calls validate function with values', () => {
    const spy = jest.fn();
    validateValues(spy, { a: 1, b: 2 });
    expect(spy).toHaveBeenCalledWith({ a: 1, b: 2 });
  });

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

  it('validates nested lists correctly', () => {
    expect(
      validateValues(
        {
          a: {
            b: {
              c: (value) => (value < 2 ? 'error-c' : null),
            },
          },
        },
        { a: [{ b: [{ c: 1 }, { c: 2 }] }, { b: [{ c: 3 }, { c: 1 }] }] }
      )
    ).toStrictEqual({
      hasErrors: true,
      errors: {
        'a.0.b.0.c': 'error-c',
        'a.1.b.1.c': 'error-c',
      },
    });
  });

  it('validates mixed nested lists and objects', () => {
    expect(
      validateValues(
        {
          a: {
            b: {
              c: {
                d: {
                  e: (value) => (value !== 1 ? 'error-e' : null),
                },
              },
            },
          },
        },
        {
          a: {
            b: [{ c: { d: { e: 1 } } }, { c: { d: { e: 2 } } }],
          },
        }
      )
    ).toStrictEqual({
      hasErrors: true,
      errors: {
        'a.b.1.c.d.e': 'error-e',
      },
    });
  });

  it('validates values based their path', () => {
    expect(
      validateValues(
        { a: { b: { c: (_value, _values, path) => (path === 'a.b.0.c' ? 'error' : null) } } },
        { a: { b: [{ c: 1 }, { c: 2 }] } }
      )
    ).toStrictEqual({
      hasErrors: true,
      errors: {
        'a.b.0.c': 'error',
      },
    });
  });
});
