import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  itSupportsMargins,
} from '@mantine/tests';
import { UnstyledButton } from './UnstyledButton';

describe('@mantine/core/UnstyledButton', () => {
  itRendersChildren(UnstyledButton, {});
  itSupportsClassName(UnstyledButton, {});
  itSupportsMargins(UnstyledButton, {});
  itSupportsOthers(UnstyledButton, {});
  itSupportsStyle(UnstyledButton, {});
  itSupportsRef(UnstyledButton, {}, HTMLButtonElement);

  it('has correct displayName', () => {
    expect(UnstyledButton.displayName).toEqual('@mantine/core/UnstyledButton');
  });
});
