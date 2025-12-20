import { tests } from '@mantine-tests/core';
import { InputError, InputErrorProps, InputErrorStylesNames } from './InputError';

const defaultProps: InputErrorProps = {};

describe('@mantine/core/InputError', () => {
  tests.itSupportsSystemProps<InputErrorProps, InputErrorStylesNames>({
    component: InputError,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/InputError',
    stylesApiName: 'InputWrapper',
    stylesApiSelectors: ['error'],
  });
});
