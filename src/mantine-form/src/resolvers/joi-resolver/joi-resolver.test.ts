import Joi from 'joi';
import { joiResolver } from './joi-resolver';
import { testResolver, RESOLVER_ERROR_MESSAGES } from '../test-resolver';

describe('@mantine/form/use-form joi resolver', () => {
  testResolver(
    joiResolver(
      Joi.object({
        name: Joi.string().min(2).message(RESOLVER_ERROR_MESSAGES.name),
        age: Joi.number().min(10).message(RESOLVER_ERROR_MESSAGES.age),
        fruits: Joi.array().items(
          Joi.object({
            name: Joi.string().min(2).message(RESOLVER_ERROR_MESSAGES.fruitName),
            stock: Joi.number().min(0).message(RESOLVER_ERROR_MESSAGES.fruitStock),
          })
        ),
      })
    )
  );
});
