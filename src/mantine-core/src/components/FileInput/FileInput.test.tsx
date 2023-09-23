import React from 'react';
import { tests, inputDefaultProps, inputStylesApiSelectors } from '@mantine/tests';
import { FileInput, FileInputProps } from './FileInput';
import { __InputStylesNames } from '../Input';

const defaultProps: FileInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/FileInput', () => {
  tests.axe([<FileInput aria-label="test-label" />]);

  tests.itSupportsSystemProps<FileInputProps, __InputStylesNames>({
    component: FileInput,
    props: defaultProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/FileInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<FileInputProps>({
    component: FileInput,
    props: defaultProps,
    selector: 'button',
  });
});
