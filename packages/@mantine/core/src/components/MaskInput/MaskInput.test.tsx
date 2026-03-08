import { inputDefaultProps, inputStylesApiSelectors, tests } from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { MaskInput, MaskInputProps } from './MaskInput';

const defaultProps: MaskInputProps = {
  ...inputDefaultProps,
  mask: '(999) 999-9999',
};

describe('@mantine/core/MaskInput', () => {
  tests.axe([
    <MaskInput aria-label="test-label" mask="999" key="1" />,
    <MaskInput label="test-label" mask="999" key="2" />,
    <MaskInput label="test-label" error mask="999" key="3" />,
    <MaskInput label="test-label" error="test-error" id="test" mask="999" key="4" />,
    <MaskInput label="test-label" description="test-description" mask="999" key="5" />,
  ]);

  tests.itSupportsSystemProps<MaskInputProps, __InputStylesNames>({
    component: MaskInput,
    props: defaultProps,
    displayName: '@mantine/core/MaskInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<MaskInputProps>({
    component: MaskInput,
    props: defaultProps,
    selector: 'input',
  });
});
