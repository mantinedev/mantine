import { inputDefaultProps, inputStylesApiSelectors, tests } from '@mantine-tests/core';
import { TagsInput, TagsInputProps, TagsInputStylesNames } from './TagsInput';

const defaultProps: TagsInputProps = {
  ...inputDefaultProps,
  data: ['test-1', 'test-2'],
};

describe('@mantine/core/TagsInput', () => {
  tests.axe([
    <TagsInput aria-label="test-label" data={['test-1', 'test-2']} key="1" />,
    <TagsInput label="test-label" data={['test-1', 'test-2']} key="2" />,
    <TagsInput label="test-label" error data={['test-1', 'test-2']} key="3" />,
    <TagsInput
      label="test-label"
      error="test-error"
      id="test"
      data={['test-1', 'test-2']}
      key="4"
    />,
    <TagsInput
      label="test-label"
      description="test-description"
      data={['test-1', 'test-2']}
      key="5"
    />,
  ]);

  tests.itSupportsSystemProps<TagsInputProps, TagsInputStylesNames>({
    component: TagsInput,
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
    displayName: '@mantine/core/TagsInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TagsInputProps>({
    component: TagsInput,
    props: defaultProps,
    selector: 'input',
  });
});
