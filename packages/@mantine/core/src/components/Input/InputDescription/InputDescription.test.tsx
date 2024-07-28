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
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLParagraphElement,
    displayName: '@mantine/core/InputDescription',
    stylesApiName: 'InputWrapper',
    stylesApiSelectors: ['description'],
  });
});
