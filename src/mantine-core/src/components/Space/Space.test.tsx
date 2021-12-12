import {
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Space } from './Space';

const defaultProps = {};

describe('@mantine/core/Space', () => {
  itSupportsClassName(Space, defaultProps);
  itSupportsSx(Space, defaultProps);
  itSupportsMargins(Space, defaultProps);
  itSupportsOthers(Space, defaultProps);
  itSupportsStyle(Space, defaultProps);
  itSupportsRef(Space, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Space.displayName).toEqual('@mantine/core/Space');
  });
});
