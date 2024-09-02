import { inputDefaultProps, inputStylesApiSelectors, tests } from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { TextInput, TextInputProps } from './TextInput';

const defaultProps: TextInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/TextInput', () => {
  tests.axe([
    <TextInput aria-label="test-label" key="1" />,
    <TextInput label="test-label" key="2" />,
    <TextInput label="test-label" error key="3" />,
    <TextInput label="test-label" error="test-error" id="test" key="4" />,
    <TextInput label="test-label" description="test-description" key="5" />,
  ]);

  tests.itSupportsSystemProps<TextInputProps, __InputStylesNames>({
    component: TextInput,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@mantine/core/TextInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TextInputProps>({
    component: TextInput,
    props: defaultProps,
    selector: 'input',
  });
});
