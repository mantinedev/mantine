import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
} from '@mantine/tests';
import { Skeleton } from './Skeleton';

const defaultProps = {
  height: 34,
  children: 'Skeleton',
};

describe('@mantine/core/Skeleton', () => {
  itRendersChildren(Skeleton, defaultProps);
  itSupportsClassName(Skeleton, defaultProps);
  itSupportsOthers(Skeleton, defaultProps);
  itSupportsStyle(Skeleton, defaultProps);

  it('has correct displayName', () => {
    expect(Skeleton.displayName).toEqual('@mantine/core/Skeleton');
  });
});
