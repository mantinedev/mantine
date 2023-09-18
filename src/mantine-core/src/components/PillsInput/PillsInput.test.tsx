import React from 'react';
import { tests, inputStylesApiSelectors, inputDefaultProps } from '@mantine/tests';
import { PillsInput, PillsInputProps } from './PillsInput';
import { __InputStylesNames } from '../Input';

const defaultProps: PillsInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/PillsInput', () => {
  tests.axe([
    <PillsInput label="test-label">
      <PillsInput.Field />
    </PillsInput>,

    <PillsInput label="test-label" description="test-description">
      <PillsInput.Field />
    </PillsInput>,

    <PillsInput label="test-label" error="test-error">
      <PillsInput.Field />
    </PillsInput>,

    <PillsInput>
      <PillsInput.Field aria-label="test-label" />
    </PillsInput>,
  ]);

  tests.itSupportsSystemProps<PillsInputProps, __InputStylesNames>({
    component: PillsInput,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    refType: HTMLDivElement,
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
