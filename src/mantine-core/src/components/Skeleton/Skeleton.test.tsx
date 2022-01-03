import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { Skeleton, SkeletonProps } from './Skeleton';

const defaultProps: SkeletonProps = {};

describe('@mantine/core/Skeleton', () => {
  itRendersChildren(Skeleton, defaultProps);
  itSupportsSystemProps({
    component: Skeleton,
    props: defaultProps,
    displayName: '@mantine/core/Skeleton',
    refType: HTMLDivElement,
  });
});
