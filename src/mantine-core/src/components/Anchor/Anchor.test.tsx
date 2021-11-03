import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  itSupportsMargins,
  itIsPolymorphic,
} from '@mantine/tests';
import { Anchor } from './Anchor';

describe('@mantine/core/Anchor', () => {
  itSupportsClassName(Anchor, {});
  itRendersChildren(Anchor, {});
  itSupportsOthers(Anchor, {});
  itSupportsStyle(Anchor, {});
  itSupportsMargins(Anchor, {});
  itIsPolymorphic(Anchor, {}, { dive: true });
  itSupportsRef(Anchor, {}, HTMLAnchorElement);

  it('has correct displayName', () => {
    expect(Anchor.displayName).toEqual('@mantine/core/Anchor');
  });
});
