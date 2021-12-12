import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsSx,
} from '@mantine/tests';
import { UnstyledButton } from './UnstyledButton';

const defaultProps = {};

describe('@mantine/core/UnstyledButton', () => {
  itRendersChildren(UnstyledButton, defaultProps);
  itSupportsClassName(UnstyledButton, defaultProps);
  itSupportsMargins(UnstyledButton, defaultProps);
  itSupportsOthers(UnstyledButton, defaultProps);
  itSupportsStyle(UnstyledButton, defaultProps);
  itSupportsSx(UnstyledButton, defaultProps);
  itSupportsRef(UnstyledButton, defaultProps, HTMLButtonElement);

  it('has correct displayName', () => {
    expect(UnstyledButton.displayName).toEqual('@mantine/core/UnstyledButton');
  });
});
