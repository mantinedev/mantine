import * as yup from 'yup';
import { yupResolver } from './yup-resolver';
import { testResolver, RESOLVER_ERROR_MESSAGES } from '../test-resolver';

describe('@mantine/form/use-form yup resolver', () => {
  testResolver(
    yupResolver(
      yup.object().shape({
        name: yup.string().min(2, RESOLVER_ERROR_MESSAGES.name),
        age: yup.number().min(10, RESOLVER_ERROR_MESSAGES.age),
        fruits: yup.array().of(
          yup.object().shape({
            name: yup.string().min(2, RESOLVER_ERROR_MESSAGES.fruitName),
            stock: yup.number().min(0, RESOLVER_ERROR_MESSAGES.fruitStock),
          })
        ),
      })
    )
  );
});
