import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  itSupportsSx,
} from '@mantine/tests';
import { Skeleton } from './Skeleton';

const defaultProps = {};

describe('@mantine/core/Skeleton', () => {
  itRendersChildren(Skeleton, defaultProps);
  itSupportsClassName(Skeleton, defaultProps);
  itSupportsMargins(Skeleton, defaultProps);
  itSupportsOthers(Skeleton, defaultProps);
  itSupportsStyle(Skeleton, defaultProps);
  itSupportsSx(Skeleton, defaultProps);
  itSupportsRef(Skeleton, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Skeleton.displayName).toEqual('@mantine/core/Skeleton');
  });
});
