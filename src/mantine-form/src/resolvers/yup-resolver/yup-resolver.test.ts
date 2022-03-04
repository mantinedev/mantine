import * as yup from 'yup';
import { yupResolver } from './yup-resolver';
import { formList } from '../../index';

const regularSchema = yup.object().shape({
  email: yup.string().email('email-error'),
  age: yup.number().min(10, 'age-error'),
});

const listSchema = yup.object().shape({
  other: yup.string().min(1, 'other-short'),
  fruits: yup.array().of(
    yup.object().shape({
      fruit: yup.string().min(1, 'short-fruit'),
      inStock: yup.number().min(0, 'negative-stock'),
    })
  ),
});

const validateRegular = yupResolver(regularSchema);
const validateList = yupResolver(listSchema);

describe('@mantine/form yup-resolver', () => {
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
