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
    expect(rootRule).toHaveBeenCalledTimes(2);
    expect(hook.result.current.errors).toStrictEqual({
      'questions.0.options': 'questions.0.options needs 2 options',
      'questions.1.options.1.text': 'required',
    });
  });
});

describe.each(['controlled', 'uncontrolled'] as const)(
  '@mantine/form/list-root-rule (%s)',
  (mode) => {
    it.each([false, true])('runs each root rule once (async: %s)', async (async) => {
      const rootRule = jest.fn(() => (async ? Promise.resolve('list error') : 'list error'));
      const nestedRootRule = jest.fn(() => (async ? Promise.resolve(null) : null));
      const itemRule = jest.fn(() => (async ? Promise.resolve('item error') : 'item error'));
      const hook = renderHook(() =>
        useForm({
          mode,
          initialValues: {
            questions: [{ options: [{ text: '' }] }, { options: [] }],
          },
          validate: {
            questions: {
              [formRootRule]: rootRule,
              options: {
                [formRootRule]: nestedRootRule,
                text: itemRule,
              },
            },
          },
        })
      );

      await act(async () => {
        await hook.result.current.validate();
      });

      expect(rootRule).toHaveBeenCalledTimes(1);
      expect(nestedRootRule).toHaveBeenCalledTimes(2);
      expect(itemRule).toHaveBeenCalledTimes(1);
      expect(hook.result.current.errors).toStrictEqual({
        questions: 'list error',
        'questions.0.options.0.text': 'item error',
      });
    });
  }
);
