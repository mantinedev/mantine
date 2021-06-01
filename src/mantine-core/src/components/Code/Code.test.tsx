import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
} from '@mantine/tests';
import { Code } from './Code';

describe('@mantine/core/Code', () => {
  itRendersChildren(Code, {});
  itSupportsClassName(Code, {});
  itSupportsOthers(Code, {});
  itSupportsStyle(Code, {});

  it('has correct displayName', () => {
    expect(Code.displayName).toEqual('@mantine/core/Code');
  });
});
