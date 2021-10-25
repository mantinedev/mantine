import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { Center } from './Center';

describe('@mantine/core/Center', () => {
  itRendersChildren(Center, {});
  itSupportsClassName(Center, {});
  itSupportsStyle(Center, {});
  itSupportsOthers(Center, {});
  itSupportsMargins(Center, {});
  itSupportsRef(Center, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Center.displayName).toEqual('@mantine/core/Center');
  });
});
