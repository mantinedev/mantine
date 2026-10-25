import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../use-form';
import { formRootRule } from '../../validate/validate-values';

interface Option {
  text: string;
}

interface Question {
  title: string;
  options: Option[];
}

describe('@mantine/form/nested-list-root-rule', () => {
  it('passes the nested list to formRootRule of a list nested in a list item', () => {
    const rootRule = jest.fn((options: Option[], _values: unknown, path: string) =>
      options.length < 2 ? `${path} needs 2 options` : null
    );

    const hook = renderHook(() =>
      useForm({
        initialValues: {
          questions: [
            { title: 'a', options: [{ text: 'one' }] },
            { title: 'b', options: [{ text: 'one' }, { text: '' }] },
          ] as Question[],
        },
        validate: {
          questions: {
            [formRootRule]: (questions) => (questions.length === 0 ? 'required' : null),
            title: (value) => (value === '' ? 'required' : null),
            options: {
              [formRootRule]: rootRule,
              text: (value) => (value === '' ? 'required' : null),
            },
          },
        },
      })
    );

    act(() => {
      hook.result.current.validate();
    });

    expect(rootRule).toHaveBeenCalledWith(
      [{ text: 'one' }],
      expect.anything(),
      'questions.0.options',
      expect.anything()
    );
    expect(hook.result.current.errors).toStrictEqual({
      'questions.0.options': 'questions.0.options needs 2 options',
      'questions.1.options.1.text': 'required',
    });
  });
});
