import { act, renderHook } from '@testing-library/react-hooks';
import { useForm, formList } from '../index';

interface Fruit {
  fruit: string;
  inStock: boolean;
}
type Vegetable = Record<'vegetable', string>;

const banana: Fruit = { fruit: 'banana', inStock: true };
const orange: Fruit = { fruit: 'orange', inStock: false };
const apple: Fruit = { fruit: 'apple', inStock: false };

const carrot: Vegetable = { vegetable: 'carrot' };
const potato: Vegetable = { vegetable: 'potato' };

describe('@mantine/form/use-form get-list-input-props', () => {
  it('returns correct input props', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          fruits: formList([banana, orange, apple]),
          vegetables: formList([potato, carrot]),
        },

        initialErrors: {
          fruits: [{ fruit: 'invalid fruit' }],
        },
      })
    );

    const props = hook.result.current.getListInputProps('fruits', 0, 'fruit');
    expect(props.value).toBe('banana');
    expect(typeof props.onChange).toBe('function');
    expect(props.error).toBe('invalid fruit');
  });

  it('does not return error if list does not have error at given index', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          fruits: formList([banana, orange, apple]),
          vegetables: formList([potato, carrot]),
        },

        initialErrors: {
          fruits: [{ fruit: 'invalid fruit' }],
        },
      })
    );

    const props = hook.result.current.getListInputProps('fruits', 1, 'fruit');
    expect(props.value).toBe('orange');
    expect(typeof props.onChange).toBe('function');
    expect('error' in props).toBe(false);
  });

  it('returns empty object if list does not have item at given index', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          fruits: formList([banana, orange, apple]),
          vegetables: formList([potato, carrot]),
        },

        initialErrors: {
          fruits: [{ fruit: 'invalid fruit' }],
        },
      })
    );

    const props = hook.result.current.getListInputProps('fruits', 10, 'fruit');
    expect(props).toStrictEqual({});
  });

  it('returns correct checkbox props', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          fruits: formList([banana, orange, apple]),
          vegetables: formList([potato, carrot]),
        },

        initialErrors: {
          fruits: [{ inStock: 'not in stock' }],
        },
      })
    );

    const props = hook.result.current.getListInputProps('fruits', 0, 'inStock', {
      type: 'checkbox',
    });
    expect(props.checked).toBe(true);
    expect(typeof props.onChange).toBe('function');
    expect(props.error).toBe('not in stock');
  });

  it('does not return an error if withError is set to false', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          fruits: formList([banana, orange, apple]),
          vegetables: formList([potato, carrot]),
        },

        initialErrors: {
          fruits: [{ fruit: 'invalid fruit' }],
        },
      })
    );

    const withoutError = hook.result.current.getListInputProps('fruits', 0, 'fruit', {
      withError: false,
    });
    const withError = hook.result.current.getListInputProps('fruits', 0, 'fruit');
    expect('error' in withError).toBe(true);
    expect('error' in withoutError).toBe(false);
  });

  it('updates form value with returned onChange handler', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          other: true,
          fruits: formList([banana, orange, apple]),
          vegetables: formList([potato, carrot]),
        },
      })
    );

    act(() => hook.result.current.getListInputProps('fruits', 1, 'fruit').onChange('grape'));
    expect(hook.result.current.values).toStrictEqual({
      other: true,
      fruits: [banana, { fruit: 'grape', inStock: false }, apple],
      vegetables: [potato, carrot],
    });

    act(() =>
      hook.result.current.getListInputProps('vegetables', 0, 'vegetable').onChange('tomato')
    );
    expect(hook.result.current.values).toStrictEqual({
      other: true,
      fruits: [banana, { fruit: 'grape', inStock: false }, apple],
      vegetables: [{ vegetable: 'tomato' }, carrot],
    });
  });
});
