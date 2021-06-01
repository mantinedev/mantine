import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
} from '@mantine/tests';
import { Center } from './Center';

describe('@mantine/core/Center', () => {
  itRendersChildren(Center, {});
  itSupportsClassName(Center, {});
  itSupportsStyle(Center, {});
  itSupportsOthers(Center, {});

  it('has correct displayName', () => {
    expect(Center.displayName).toEqual('@mantine/core/Center');
  });
});
