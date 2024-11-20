import { inputDefaultProps, inputStylesApiSelectors, tests } from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { FileInput, FileInputProps } from './FileInput';

const defaultProps: FileInputProps = {
  ...inputDefaultProps,
  placeholder: 'test-placeholder',
};

describe('@mantine/core/FileInput', () => {
  tests.axe([<FileInput aria-label="test-label" key="1" />]);

  tests.itSupportsSystemProps<FileInputProps, __InputStylesNames | 'placeholder'>({
    component: FileInput,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
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
