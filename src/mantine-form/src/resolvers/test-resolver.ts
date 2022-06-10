import { renderHook, act } from '@testing-library/react';
import { FormErrors, useForm } from '../index';

export const RESOLVER_ERROR_MESSAGES = {
  name: 'test-name-error',
  age: 'test-age-error',
  fruitName: 'test-fruit-name-error',
  fruitStock: 'test-fruit-stock-error',
  nestedArray: 'test-nested-array',
};

const values = {
  name: '1',
  age: 5,
  nested: {
    object: '',
    array: [{ item: 1 }, { item: 2 }, { item: 3 }],
  },
  fruits: [
    { name: 'banana', stock: -3 },
    { name: '1', stock: 5 },
  ],
};

const validValues = {
  name: 'test-name',
  age: 50,
  nested: {
    object: 'test',
    array: [{ item: 10 }, { item: 20 }, { item: 30 }],
  },
  fruits: [
    { name: 'banana', stock: 10 },
    { name: 'orange', stock: 10 },
  ],
};

const initialValues = {
  name: '1',
  age: 5,
  nested: {
    object: '',
    array: [{ item: 1 }, { item: 2 }, { item: 3 }],
  },
  fruits: [
    { name: 'banana', stock: -3 },
    { name: '1', stock: 5 },
  ],
};

export function testResolver(schema: (values: Record<string, any>) => FormErrors) {
  // Resolver itself
  it('validates given values', () => {
    expect(schema(values)).toStrictEqual({
      name: RESOLVER_ERROR_MESSAGES.name,
      age: RESOLVER_ERROR_MESSAGES.age,
      'fruits.0.stock': RESOLVER_ERROR_MESSAGES.fruitStock,
      'fruits.1.name': RESOLVER_ERROR_MESSAGES.fruitName,
      'nested.array.0.item': RESOLVER_ERROR_MESSAGES.nestedArray,
      'nested.array.1.item': RESOLVER_ERROR_MESSAGES.nestedArray,
    });
  });

  it('returns empty object if all fields are valid', () => {
    expect(schema(validValues)).toStrictEqual({});
  });

  // use-form integration
  it('validates regular values', () => {
    const hook = renderHook(() => useForm({ validate: schema, initialValues }));

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
          'nested.array.0.item': RESOLVER_ERROR_MESSAGES.nestedArray,
          'nested.array.1.item': RESOLVER_ERROR_MESSAGES.nestedArray,
        },
      });
    });

    expect(hook.result.current.errors).toStrictEqual({
      name: RESOLVER_ERROR_MESSAGES.name,
      age: RESOLVER_ERROR_MESSAGES.age,
      'fruits.0.stock': RESOLVER_ERROR_MESSAGES.fruitStock,
      'fruits.1.name': RESOLVER_ERROR_MESSAGES.fruitName,
      'nested.array.0.item': RESOLVER_ERROR_MESSAGES.nestedArray,
      'nested.array.1.item': RESOLVER_ERROR_MESSAGES.nestedArray,
    });
  });

  it('validates single field with validateField handler', () => {
    const hook = renderHook(() => useForm({ validate: schema, initialValues }));

    expect(hook.result.current.errors).toStrictEqual({});

    act(() => {
      const results = hook.result.current.validateField('name');
      expect(results).toStrictEqual({ hasError: true, error: RESOLVER_ERROR_MESSAGES.name });
    });

    expect(hook.result.current.errors).toStrictEqual({ name: RESOLVER_ERROR_MESSAGES.name });
  });
}
