import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
} from '@mantine/tests';
import { Skeleton } from './Skeleton';

describe('@mantine/core/Skeleton', () => {
  itRendersChildren(Skeleton, {});
  itSupportsClassName(Skeleton, {});
  itSupportsMargins(Skeleton, {});
  itSupportsOthers(Skeleton, {});
  itSupportsStyle(Skeleton, {});
  itSupportsRef(Skeleton, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Skeleton.displayName).toEqual('@mantine/core/Skeleton');
  });
});
