import { act, renderHook } from '@testing-library/react-hooks';
import { z } from 'zod';
import { useForm, zodResolver } from '../index';

const regularResolver = zodResolver(
  z.object({
    name: z.string().min(1, { message: 'name-error' }),
    age: z.number().min(10, { message: 'age-error' }),
  })
);

describe('@mantine/form/use-form zod resolver', () => {
  it('validates regular values with zod resolver', () => {
    const hook = renderHook(() =>
      useForm({
        schema: regularResolver,
        initialValues: { name: '', age: 5 },
      })
    );

    expect(hook.result.current.errors).toStrictEqual({});

    act(() => {
      const results = hook.result.current.validate();
      expect(results).toStrictEqual({
        hasErrors: true,
        errors: { name: 'name-error', age: 'age-error' },
      });
    });

    expect(hook.result.current.errors).toStrictEqual({ name: 'name-error', age: 'age-error' });
  });

  it('validates single field with validateField handler', () => {
    const hook = renderHook(() =>
      useForm({
        schema: regularResolver,
        initialValues: { name: '', age: 5 },
      })
    );

    expect(hook.result.current.errors).toStrictEqual({});

    act(() => {
      const results = hook.result.current.validateField('name');
      expect(results).toStrictEqual({ valid: false, error: 'name-error' });
    });

    expect(hook.result.current.errors).toStrictEqual({ name: 'name-error' });
  });
});
