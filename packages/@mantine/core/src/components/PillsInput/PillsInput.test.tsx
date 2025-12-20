import { inputDefaultProps, inputStylesApiSelectors, tests } from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { PillsInput, PillsInputProps } from './PillsInput';

const defaultProps: PillsInputProps = {
  ...inputDefaultProps,
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

  tests.itSupportsSystemProps<any, __InputStylesNames>({
    component: PillsInput,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/PillsInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputWrapperProps<any>({
    component: PillsInput,
    props: defaultProps,
  });

  tests.itSupportsInputSections<any>({
    component: PillsInput,
    props: defaultProps,
  });
});
