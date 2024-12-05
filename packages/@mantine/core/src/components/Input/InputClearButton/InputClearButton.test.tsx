import { tests } from '@mantine-tests/core';
import { InputClearButton, InputClearButtonProps } from './InputClearButton';

const defaultProps: InputClearButtonProps = {};

describe('@mantine/core/InputClearButton', () => {
  tests.itSupportsSystemProps<InputClearButtonProps, 'root'>({
    component: InputClearButton,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/InputClearButton',
    stylesApiSelectors: ['root'],
  });
});
