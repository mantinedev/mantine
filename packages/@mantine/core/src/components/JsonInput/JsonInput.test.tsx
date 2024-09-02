import { inputDefaultProps, inputStylesApiSelectors, tests } from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { JsonInput, JsonInputProps } from './JsonInput';

const defaultProps: JsonInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/JsonInput', () => {
  tests.axe([
    <JsonInput aria-label="test-label" key="1" />,
    <JsonInput label="test-label" key="2" />,
    <JsonInput label="test-label" error key="3" />,
    <JsonInput label="test-label" error="test-error" id="test" key="4" />,
    <JsonInput label="test-label" description="test-description" key="5" />,
  ]);

  tests.itSupportsSystemProps<JsonInputProps, __InputStylesNames>({
    component: JsonInput,
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
    displayName: '@mantine/core/JsonInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<JsonInputProps>({
    component: JsonInput,
    props: defaultProps,
    selector: 'textarea',
  });
});
