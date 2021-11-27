import {
  itSupportsStyle,
  itSupportsClassName,
  itSupportsStylesApi,
  itSupportsMargins,
  itSupportsRef,
  defaultInputProps,
  getInputStylesApiKeys,
} from '@mantine/tests';
import { JsonInput } from './JsonInput';
import { Input as InputStylesApi } from '../Input/styles.api';
import { InputWrapper as InputWrapperStylesApi } from '../InputWrapper/styles.api';

describe('@mantine/core/JsonInput', () => {
  itSupportsStyle(JsonInput, {});
  itSupportsClassName(JsonInput, {});
  itSupportsMargins(JsonInput, {});
  itSupportsRef(JsonInput, {}, HTMLTextAreaElement);
  itSupportsStylesApi(
    JsonInput,
    defaultInputProps,
    getInputStylesApiKeys(Object.keys({ ...InputStylesApi, ...InputWrapperStylesApi })),
    'JsonInput'
  );

  it('has correct displayName', () => {
    expect(JsonInput.displayName).toEqual('@mantine/core/JsonInput');
  });
});
