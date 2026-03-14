import { inputDefaultProps, inputStylesApiSelectors, tests } from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { PillsInput, PillsInputProps } from './PillsInput';

const defaultProps: PillsInputProps = {
  ...inputDefaultProps,
  children: <PillsInput.Field />,
};

describe('@mantine/core/PillsInput', () => {
  tests.axe([
    <PillsInput label="test-label" key="1">
      <PillsInput.Field />
    </PillsInput>,

    <PillsInput label="test-label" description="test-description" key="2">
      <PillsInput.Field />
    </PillsInput>,

    <PillsInput label="test-label" error="test-error" key="3">
      <PillsInput.Field />
    </PillsInput>,

    <PillsInput key="4">
      <PillsInput.Field aria-label="test-label" />
    </PillsInput>,
  ]);

  tests.itSupportsSystemProps<PillsInputProps, __InputStylesNames>({
    component: PillsInput,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/PillsInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputWrapperProps<PillsInputProps>({
    component: PillsInput,
    props: defaultProps,
  });

  tests.itSupportsInputSections<PillsInputProps>({
    component: PillsInput,
    props: defaultProps,
  });
});
