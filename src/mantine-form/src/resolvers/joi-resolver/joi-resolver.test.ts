import Joi from 'joi';
import { joiResolver } from './joi-resolver';
import { formList } from '../../index';

const regularSchema = Joi.object({
  email: Joi.string().email().message('email-error'),
  age: Joi.number().min(10).message('age-error'),
});

const listSchema = Joi.object({
  other: Joi.string().min(2).message('other-short'),
  fruits: Joi.array().items(
    Joi.object({
      fruit: Joi.string().min(2).message('short-fruit'),
      inStock: Joi.number().min(0).message('negative-stock'),
    })
  ),
});

const validateRegular = joiResolver(regularSchema);
const validateList = joiResolver(listSchema);

describe('@mantine/form joi-resolver', () => {
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
        other: '1',
        fruits: formList([
          { fruit: '2', inStock: 10 },
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
