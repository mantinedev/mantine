import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';
import { isNotEmpty, when } from '../../validators';

interface UsersValues {
  validateUsers: boolean;
  users: { name: string }[];
}

function tests(mode: FormMode) {
  it('skips rule when condition is false', async () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { shipToDifferentAddress: false, street: '' },
        validate: {
          street: when((values) => values.shipToDifferentAddress, isNotEmpty('required')),
        },
      })
    );

    await act(async () => {
      expect(await hook.result.current.validate()).toStrictEqual({ hasErrors: false, errors: {} });
    });

    act(() => hook.result.current.setFieldValue('shipToDifferentAddress', true));

    await act(async () => {
      expect(await hook.result.current.validate()).toStrictEqual({
        hasErrors: true,
        errors: { street: 'required' },
      });
    });
  });

  it('passes list item path to the rule', async () => {
    const hook = renderHook(() =>
      useForm<UsersValues>({
        mode,
        initialValues: {
          validateUsers: true,
          users: [{ name: 'John' }, { name: '' }],
        },
        validate: {
          users: {
            name: when(
              (values) => values.validateUsers,
              (value, _values, path) => (value === '' ? `${path} is required` : null)
            ),
          },
        },
      })
    );

    await act(async () => {
      expect(await hook.result.current.validate()).toStrictEqual({
        hasErrors: true,
        errors: { 'users.1.name': 'users.1.name is required' },
      });
    });
  });

  it('supports async rules', async () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { enabled: true, name: '' },
        validate: {
          name: when(
            (values) => values.enabled,
            async (value) => (value === '' ? 'required' : null)
          ),
        },
      })
    );

    await act(async () => {
      expect(await hook.result.current.validate()).toStrictEqual({
        hasErrors: true,
        errors: { name: 'required' },
      });
    });
  });
}

describe('@mantine/form/validate with when controlled', () => {
  tests('controlled');
});

describe('@mantine/form/validate with when uncontrolled', () => {
  tests('uncontrolled');
});
