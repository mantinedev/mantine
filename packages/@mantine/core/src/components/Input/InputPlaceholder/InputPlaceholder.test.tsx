import { tests } from '@mantine-tests/core';
import {
  InputPlaceholder,
  InputPlaceholderProps,
  InputPlaceholderStylesNames,
} from './InputPlaceholder';

const defaultProps: InputPlaceholderProps = {};

describe('@mantine/core/InputPlaceholder', () => {
  tests.itSupportsSystemProps<InputPlaceholderProps, InputPlaceholderStylesNames>({
    component: InputPlaceholder,
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
    refType: HTMLSpanElement,
    displayName: '@mantine/core/InputPlaceholder',
    stylesApiSelectors: ['placeholder'],
  });
});
