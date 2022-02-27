import { act, renderHook } from '@testing-library/react-hooks';
import { formList, useForm } from '../index';

interface Fruit {
  name: string;
  price: number;
}

const banana: Fruit = { name: 'banana', price: 50 };
const orange: Fruit = { name: 'orange', price: 5 };

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
});
