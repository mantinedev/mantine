import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { Skeleton, SkeletonProps } from './Skeleton';

const defaultProps: SkeletonProps = {};

describe('@mantine/core/Skeleton', () => {
  itRendersChildren(Skeleton, defaultProps);
  itSupportsProviderVariant(Skeleton, defaultProps, 'Skeleton');
  itSupportsSystemProps({
    component: Skeleton,
    props: defaultProps,
    displayName: '@mantine/core/Skeleton',
    refType: HTMLDivElement,
    providerName: 'Skeleton',
  });
});
