import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { PinInput } from './PinInput';
// import { PinInput as PinInputStylesApi } from './styles.api';

const defaultProps = {};

describe('@mantine/core/PinInput', () => {
  itSupportsClassName(PinInput, defaultProps);
  itSupportsMargins(PinInput, defaultProps);
  itSupportsOthers(PinInput, defaultProps);
  itSupportsStyle(PinInput, defaultProps);
  itSupportsRef(PinInput, defaultProps, HTMLDivElement);
  // itSupportsStylesApi(PinInput, defaultProps, Object.keys(PinInputStylesApi), 'PinInput');

  it('has correct displayName', () => {
    expect(PinInput.displayName).toEqual('@mantine/core/PinInput');
  });
});
