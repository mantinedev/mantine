import {
  itSupportsOthers,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsRef,
  itIsPolymorphic,
} from '@mantine/tests';
import { Overlay } from './Overlay';

describe('@mantine/core/Overlay', () => {
  itSupportsStyle(Overlay, {});
  itSupportsClassName(Overlay, {});
  itSupportsOthers(Overlay, {});
  itIsPolymorphic(Overlay, {});
  itSupportsRef(Overlay, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Overlay.displayName).toEqual('@mantine/core/Overlay');
  });
});
