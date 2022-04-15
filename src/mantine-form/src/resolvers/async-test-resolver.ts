import { renderHook, act } from '@testing-library/react-hooks';
import { formList, FormErrors, useForm } from '../index';

export const RESOLVER_ERROR_MESSAGES = {
  name: 'test-name-error',
  age: 'test-age-error',
  fruitName: 'test-fruit-name-error',
  fruitStock: 'test-fruit-stock-error',
};

const values = {
  name: '1',
  age: 5,
  fruits: formList([
    { name: 'banana', stock: -3 },
    { name: '1', stock: 5 },
  ]),
};

const validValues = {
  name: 'test-name',
  age: 50,
  fruits: formList([
    { name: 'banana', stock: 10 },
    { name: 'orange', stock: 10 },
  ]),
};

const initialValues = {
  name: '1',
  age: 5,
  fruits: formList([
    { name: 'banana', stock: -3 },
    { name: '1', stock: 5 },
  ]),
};

export function testResolver(schema: (values: Record<string, any>) => Promise<FormErrors>) {
  // Resolver itself

  it('validates given values', async () => {
    const asyncValidation = await schema(values);
    expect(asyncValidation).toStrictEqual({
      name: RESOLVER_ERROR_MESSAGES.name,
      age: RESOLVER_ERROR_MESSAGES.age,
      'fruits.0.stock': RESOLVER_ERROR_MESSAGES.fruitStock,
      'fruits.1.name': RESOLVER_ERROR_MESSAGES.fruitName,
    });
  });

  it('returns empty object if all fields are valid', async () => {
    const asyncValidation = await schema(validValues);
    expect(asyncValidation).toStrictEqual({});
  });

  // use-form integration
  it('validates regular values', async () => {
    const hook = renderHook(() =>
      useForm({ schema: schema as any, initialValues, asyncResolver: true })
    );
    expect(hook.result.current.errors).toStrictEqual({});
    await act(async () => {
      const results = await hook.result.current.asyncValidate();
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

  it('validates single field with validateField handler', async () => {
    const hook = renderHook(() =>
      useForm({ schema: schema as any, initialValues, asyncResolver: true })
    );

    expect(hook.result.current.errors).toStrictEqual({});

    await act(async () => {
      const results = await hook.result.current.asyncValidateField('name');
      expect(results).toStrictEqual({ hasError: true, error: RESOLVER_ERROR_MESSAGES.name });
    });

    expect(hook.result.current.errors).toStrictEqual({ name: RESOLVER_ERROR_MESSAGES.name });
  });
}
