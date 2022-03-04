import { z } from 'zod';
import { zodResolver } from './zod-resolver';
import { formList } from '../../index';

const regularSchema = z.object({
  email: z.string().email({ message: 'email-error' }),
  age: z.number().min(10, { message: 'age-error' }),
});

const listSchema = z.object({
  other: z.string().min(1, { message: 'other-short' }),
  fruits: z.array(
    z.object({
      fruit: z.string().min(1, { message: 'short-fruit' }),
      inStock: z.number().min(0, { message: 'negative-stock' }),
    })
  ),
});

const validateRegular = zodResolver(regularSchema);
const validateList = zodResolver(listSchema);

describe('@mantine/form zod-resolver', () => {
  it('validates regular fields', () => {
    expect(validateRegular({ email: 'invalid', age: 5 })).toStrictEqual({
      email: 'email-error',
      age: 'age-error',
    });
  });

  it('returns empty object if all fields are valid', () => {
    expect(validateRegular({ email: 'email@domain.com', age: 10 })).toStrictEqual({});
  });

  it('validates lists', () => {
    expect(
      validateList({
        other: '',
        fruits: formList([
          { fruit: '', inStock: 10 },
          { fruit: 'orange', inStock: 10 },
          { fruit: 'banana', inStock: -1 },
        ]),
      })
    ).toStrictEqual({
      other: 'other-short',
      'fruits.0.fruit': 'short-fruit',
      'fruits.2.inStock': 'negative-stock',
    });
  });

  it('returns empty object when all list items are valid', () => {
    expect(
      validateList({
        other: 'other',
        fruits: formList([
          { fruit: 'apple', inStock: 10 },
          { fruit: 'orange', inStock: 10 },
          { fruit: 'banana', inStock: 10 },
        ]),
      })
    ).toStrictEqual({});
  });
});
