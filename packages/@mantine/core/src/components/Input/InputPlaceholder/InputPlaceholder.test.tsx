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
    children: true,
    id: true,
    displayName: '@mantine/core/InputPlaceholder',
    stylesApiSelectors: ['placeholder'],
  });
});
