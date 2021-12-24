import {
  itSupportsOthers,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsRef,
  itIsPolymorphic,
  itSupportsSx,
} from '@mantine/tests';
import { Overlay } from './Overlay';

const defaultProps = {};

describe('@mantine/core/Overlay', () => {
  itSupportsStyle(Overlay, defaultProps);
  itSupportsClassName(Overlay, defaultProps);
  itSupportsOthers(Overlay, defaultProps);
  itIsPolymorphic(Overlay, defaultProps);
  itSupportsSx(Overlay, defaultProps);
  itSupportsRef(Overlay, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Overlay.displayName).toEqual('@mantine/core/Overlay');
  });
});
