import { validateFieldValue } from './validate-field-value';

describe('@mantine/form/validate-field-value', () => {
  it('validates root field with rules record', () => {
    expect(
      validateFieldValue('a', { a: (value) => (value === 1 ? 'error-a' : null) }, { a: 1, b: 2 })
    ).toStrictEqual({ hasError: true, error: 'error-a' });
  });

  it('validates field with function', () => {
    expect(validateFieldValue('a', () => ({ a: 'error-a' }), { a: 1, b: 2 })).toStrictEqual({
      hasError: true,
      error: 'error-a',
    });

    expect(validateFieldValue('b', () => ({ a: 'error-a' }), { a: 1, b: 2 })).toStrictEqual({
      hasError: false,
      error: null,
    });
  });

  it('validates nested field with rules record', () => {
    expect(
      validateFieldValue(
        'a.b',
        { a: { b: (value) => (value === 1 ? 'error-b' : null) } },
        { a: { b: 1 } }
      )
    ).toStrictEqual({ hasError: true, error: 'error-b' });
  });

  it('validates parent of nested field with rules record', () => {
    expect(
      validateFieldValue(
        'a',
        { a: { b: (value) => (value === 1 ? 'error-b' : null) } },
        { a: [{ b: 2 }, { b: 1 }] }
      )
    ).toStrictEqual({ hasError: true, error: 'error-b' });
  });

  it('validates array field with rules record', () => {
    expect(
      validateFieldValue(
        'a.1.b',
        { a: { b: (value) => (value === 1 ? 'error-b' : null) } },
        { a: [{ b: 2 }, { b: 1 }, { b: 3 }] }
      )
    ).toStrictEqual({ hasError: true, error: 'error-b' });
  });
});
