import {
  itSupportsStyle,
  itSupportsClassName,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { JsonInput } from './JsonInput';

const defaultProps = {};

describe('@mantine/core/JsonInput', () => {
  itSupportsStyle(JsonInput, defaultProps);
  itSupportsClassName(JsonInput, defaultProps);
  itSupportsMargins(JsonInput, defaultProps);
  itSupportsSx(JsonInput, defaultProps);
  itSupportsRef(JsonInput, defaultProps, HTMLTextAreaElement);

  it('has correct displayName', () => {
    expect(JsonInput.displayName).toEqual('@mantine/core/JsonInput');
  });
});
