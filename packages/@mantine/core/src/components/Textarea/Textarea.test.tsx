import { inputDefaultProps, inputStylesApiSelectors, tests } from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { Textarea, TextareaProps } from './Textarea';

const defaultProps: TextareaProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/Textarea', () => {
  tests.axe([
    <Textarea aria-label="test-label" key="1" />,
    <Textarea label="test-label" key="2" />,
    <Textarea label="test-label" error key="3" />,
    <Textarea label="test-label" error="test-error" id="test" key="4" />,
    <Textarea label="test-label" description="test-description" key="5" />,
  ]);

  tests.itSupportsSystemProps<TextareaProps, __InputStylesNames>({
    component: Textarea,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLTextAreaElement,
    displayName: '@mantine/core/Textarea',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TextareaProps>({
    component: Textarea,
    props: defaultProps,
    selector: 'textarea',
  });
});
