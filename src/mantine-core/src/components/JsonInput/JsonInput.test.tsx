import { itSupportsStyle, itSupportsClassName, itSupportsStylesApi } from '@mantine/tests';
import { JsonInput } from './JsonInput';
import { Input as InputStylesApi } from '../Input/styles.api';
import { InputWrapper as InputWrapperStylesApi } from '../InputWrapper/styles.api';

describe('@mantine/core/JsonInput', () => {
  itSupportsStyle(JsonInput, {});
  itSupportsClassName(JsonInput, {});
  itSupportsStylesApi(
    JsonInput,
    {
      icon: '$',
      rightSection: '$',
      label: 'test-label',
      error: 'test-error',
      description: 'test-description',
      required: true,
    },
    Object.keys({ ...InputStylesApi, ...InputWrapperStylesApi }),
    'json-input'
  );

  it('has correct displayName', () => {
    expect(JsonInput.displayName).toEqual('@mantine/core/JsonInput');
  });
});
