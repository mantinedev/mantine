import { act, renderHook } from '@testing-library/react-hooks';
import * as yup from 'yup';
import { useForm, yupResolver } from '../index';

const regularResolver = yupResolver(
  yup.object().shape({
    name: yup.string().min(1, 'name-error'),
    age: yup.number().min(10, 'age-error'),
  })
);

describe('@mantine/form/use-form yup resolver', () => {
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
