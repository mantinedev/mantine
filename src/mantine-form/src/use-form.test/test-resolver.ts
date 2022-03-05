import { renderHook, act } from '@testing-library/react-hooks';
import { FormErrors, useForm, formList } from '../index';

export const RESOLVER_ERROR_MESSAGES = {
  name: 'test-name-error',
  age: 'test-age-error',
  fruitName: 'test-fruit-name-error',
  fruitStock: 'test-fruit-stock-error',
};

const initialValues = {
  name: '1',
  age: 5,
  fruits: formList([
    { name: 'banana', stock: -3 },
    { name: '1', stock: 5 },
  ]),
};

export function testResolver(schema: (values: Record<string, any>) => FormErrors) {
  it('validates regular values', () => {
    const hook = renderHook(() => useForm({ schema, initialValues }));

    expect(hook.result.current.errors).toStrictEqual({});

    act(() => {
      const results = hook.result.current.validate();
      expect(results).toStrictEqual({
        hasErrors: true,
        errors: {
          name: RESOLVER_ERROR_MESSAGES.name,
          age: RESOLVER_ERROR_MESSAGES.age,
          'fruits.0.stock': RESOLVER_ERROR_MESSAGES.fruitStock,
          'fruits.1.name': RESOLVER_ERROR_MESSAGES.fruitName,
        },
      });
    });

    expect(hook.result.current.errors).toStrictEqual({
      name: RESOLVER_ERROR_MESSAGES.name,
      age: RESOLVER_ERROR_MESSAGES.age,
      'fruits.0.stock': RESOLVER_ERROR_MESSAGES.fruitStock,
      'fruits.1.name': RESOLVER_ERROR_MESSAGES.fruitName,
    });
  });

  it('validates single field with validateField handler', () => {
    const hook = renderHook(() => useForm({ schema, initialValues }));

    expect(hook.result.current.errors).toStrictEqual({});

    act(() => {
      const results = hook.result.current.validateField('name');
      expect(results).toStrictEqual({ valid: false, error: RESOLVER_ERROR_MESSAGES.name });
    });

    expect(hook.result.current.errors).toStrictEqual({ name: RESOLVER_ERROR_MESSAGES.name });
  });
}
