import { inputDefaultProps, inputStylesApiSelectors, tests } from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { ColorInput, ColorInputProps } from './ColorInput';

const defaultProps: ColorInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/ColorInput', () => {
  tests.axe([
    <ColorInput aria-label="test-label" key="1" />,
    <ColorInput label="test-label" key="2" />,
    <ColorInput label="test-label" error key="3" />,
    <ColorInput label="test-label" error="test-error" id="test" key="4" />,
    <ColorInput label="test-label" description="test-description" key="5" />,
  ]);

  tests.itSupportsSystemProps<ColorInputProps, __InputStylesNames>({
    component: ColorInput,
    props: defaultProps,
    displayName: '@mantine/core/ColorInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<ColorInputProps>({
    component: ColorInput,
    props: defaultProps,
    selector: 'input',
  });
});
