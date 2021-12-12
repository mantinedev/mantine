import {
  itSupportsStyle,
  itSupportsClassName,
  itSupportsStylesApi,
  itSupportsMargins,
  itSupportsRef,
  defaultInputProps,
  getInputStylesApiKeys,
  itSupportsSx,
} from '@mantine/tests';
import { JsonInput } from './JsonInput';
import { Input as InputStylesApi } from '../Input/styles.api';
import { InputWrapper as InputWrapperStylesApi } from '../InputWrapper/styles.api';

const defaultProps = {};

describe('@mantine/core/JsonInput', () => {
  itSupportsStyle(JsonInput, defaultProps);
  itSupportsClassName(JsonInput, defaultProps);
  itSupportsMargins(JsonInput, defaultProps);
  itSupportsSx(JsonInput, defaultProps, { dive: 2 });
  itSupportsRef(JsonInput, defaultProps, HTMLTextAreaElement);
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
