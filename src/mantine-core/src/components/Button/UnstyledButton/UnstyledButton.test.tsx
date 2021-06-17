import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
} from '@mantine/tests';
import { UnstyledButton } from './UnstyledButton';

describe('@mantine/core/UnstyledButton', () => {
  itRendersChildren(UnstyledButton, {});
  itSupportsClassName(UnstyledButton, {});
  itSupportsOthers(UnstyledButton, {});
  itSupportsStyle(UnstyledButton, {});
  itSupportsRef(UnstyledButton, {}, HTMLButtonElement, 'elementRef');

  it('has correct displayName', () => {
    expect(UnstyledButton.displayName).toEqual('@mantine/core/UnstyledButton');
  });
});
