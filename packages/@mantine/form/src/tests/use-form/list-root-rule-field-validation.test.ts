import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';
import { formRootRule } from '../../validate/validate-values';

interface Values {
  skills: { name: string }[];
}

const validate = {
  skills: {
    [formRootRule]: (value: Values['skills']) =>
      value.length === 0 ? 'Add at least one skill' : null,
    name: (value: string) => (value.trim().length === 0 ? 'Skill name is required' : null),
  },
};

function tests(mode: FormMode) {
  it('validates list root rule with validateField and isValid', () => {
    const hook = renderHook(() =>
      useForm<Values>({ mode, initialValues: { skills: [] }, validate })
    );

    expect(hook.result.current.isValid('skills')).toBe(false);

    let result: unknown;
    act(() => {
      result = hook.result.current.validateField('skills');
    });
    expect(result).toStrictEqual({ hasError: true, error: 'Add at least one skill' });
    expect(hook.result.current.errors).toStrictEqual({ skills: 'Add at least one skill' });

    act(() => hook.result.current.insertListItem('skills', { name: '' }));
    expect(hook.result.current.isValid('skills')).toBe(true);
    expect(hook.result.current.validateField('skills')).toStrictEqual({
      hasError: false,
      error: null,
    });
  });

  it('does not apply list root rule to list items', () => {
    const hook = renderHook(() =>
      useForm<Values>({
        mode,
        initialValues: { skills: [{ name: '' }] },
        validate: {
          skills: {
            [formRootRule]: (value) => (value.map((item) => item.name).includes('x') ? 'x' : null),
            name: (value) => (value.trim().length === 0 ? 'Skill name is required' : null),
          },
        },
      })
    );

    expect(hook.result.current.isValid('skills.0')).toBe(false);
    expect(hook.result.current.isValid('skills.0.name')).toBe(false);

    act(() => hook.result.current.setFieldValue('skills.0.name', 'React'));
    expect(hook.result.current.isValid('skills.0')).toBe(true);
    expect(hook.result.current.isValid('skills')).toBe(true);
  });

  it('clears list root error when list handlers are called', () => {
    const hook = renderHook(() =>
      useForm<Values>({ mode, initialValues: { skills: [] }, validate })
    );

    act(() => hook.result.current.validate());
    expect(hook.result.current.errors).toStrictEqual({ skills: 'Add at least one skill' });

    act(() => hook.result.current.insertListItem('skills', { name: '' }));
    expect(hook.result.current.errors).toStrictEqual({});
  });

  it('keeps list root error when clearInputErrorOnChange is false', () => {
    const hook = renderHook(() =>
      useForm<Values>({
        mode,
        initialValues: { skills: [] },
        validate,
        clearInputErrorOnChange: false,
      })
    );

    act(() => hook.result.current.validate());
    act(() => hook.result.current.insertListItem('skills', { name: '' }));
    expect(hook.result.current.errors).toStrictEqual({ skills: 'Add at least one skill' });
  });

  it('revalidates list root rule on list change when validateInputOnChange includes the list', () => {
    const hook = renderHook(() =>
      useForm<Values>({
        mode,
        initialValues: { skills: [{ name: 'React' }] },
        validate,
        validateInputOnChange: ['skills'],
      })
    );

    act(() => hook.result.current.removeListItem('skills', 0));
    expect(hook.result.current.errors).toStrictEqual({ skills: 'Add at least one skill' });

    act(() => hook.result.current.insertListItem('skills', { name: '' }));
    expect(hook.result.current.errors).toStrictEqual({});
  });
}

describe('@mantine/form/list-without-root-rule', () => {
  it('does not set list error when list handlers are called with validateInputOnChange', () => {
    const hook = renderHook(() =>
      useForm<Values>({
        initialValues: { skills: [] },
        validateInputOnChange: true,
        validate: {
          skills: { name: (value: string) => (value.trim().length === 0 ? 'required' : null) },
        },
      })
    );

    act(() => hook.result.current.insertListItem('skills', { name: '' }));
    expect(hook.result.current.errors).toStrictEqual({});

    act(() => hook.result.current.validate());
    expect(hook.result.current.errors).toStrictEqual({ 'skills.0.name': 'required' });

    act(() => hook.result.current.setFieldValue('skills.0.name', 'React'));
    expect(hook.result.current.errors).toStrictEqual({});
  });
});

describe('@mantine/form/list-root-rule-field-validation-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/list-root-rule-field-validation-uncontrolled', () => {
  tests('uncontrolled');
});
