import { tests } from '@mantine-tests/core';
import {
  InputDescription,
  InputDescriptionProps,
  InputDescriptionStylesNames,
} from './InputDescription';

const defaultProps: InputDescriptionProps = {};

describe('@mantine/core/InputDescription', () => {
  tests.itSupportsSystemProps<InputDescriptionProps, InputDescriptionStylesNames>({
    component: InputDescription,
    props: defaultProps,
    children: true,
    id: true,
    displayName: '@mantine/core/InputDescription',
    stylesApiName: 'InputWrapper',
    stylesApiSelectors: ['description'],
  });
});
