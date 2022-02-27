import { act, renderHook } from '@testing-library/react-hooks';
import { formList, useForm } from '../index';

interface Fruit {
  name: string;
  price: number;
  stock: number;
}

const banana: Fruit = { name: 'banana', price: 50, stock: 11 };
const orange: Fruit = { name: 'orange', price: 5, stock: 5 };

describe('@mantine/form/use-form list validation', () => {
  it('validates form list with given object', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { fruits: formList([banana, orange]) },
        validate: {
          fruits: {
            name: (value) => (value.includes('test') ? null : 'invalid fruit'),
            price: (value) => (value > 10 ? null : 'invalid price'),
          },
        },
      })
    );

    act(() => {
      const results = hook.result.current.validate();
      expect(results).toStrictEqual({
        hasErrors: true,
        errors: {
          fruits: [{ name: 'invalid fruit' }, { name: 'invalid fruit', price: 'invalid price' }],
        },
      });
    });
  });

  it('does not create list errors array if there are no validate rules for the list', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: formList([banana, orange]) }, validate: {} })
    );

    act(() => {
      const results = hook.result.current.validate();
      expect(results).toStrictEqual({ hasErrors: false, errors: {} });
    });

    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('creates empty slots at the errors list when some values are valid', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          fruits: formList([
            { name: 'test-banana', price: 5 },
            { name: 'test-orange', price: 20 },
            { name: 'apple', price: 20 },
          ]),
        },
        validate: {
          fruits: {
            name: (value) => (value.includes('test') ? null : 'invalid fruit'),
            price: (value) => (value > 10 ? null : 'invalid price'),
          },
        },
      })
    );

    expect(hook.result.current.errors).toStrictEqual({});

    act(() => {
      const result = hook.result.current.validate();
      expect(result).toStrictEqual({
        hasErrors: true,
        errors: {
          fruits: [{ price: 'invalid price' }, undefined, { name: 'invalid fruit' }],
        },
      });
    });

    expect(hook.result.current.errors).toStrictEqual({
      fruits: [{ price: 'invalid price' }, undefined, { name: 'invalid fruit' }],
    });
  });

  it('correctly handles all valid list values', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          fruits: formList([orange, banana]),
        },
        validate: {
          fruits: {
            name: () => null,
            price: () => null,
          },
        },
      })
    );

    act(() => {
      const result = hook.result.current.validate();
      expect(result).toStrictEqual({ hasErrors: false, errors: {} });
    });

    expect(hook.result.current.errors).toStrictEqual({});
  });
});
