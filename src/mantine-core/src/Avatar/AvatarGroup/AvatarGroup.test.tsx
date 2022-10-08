import { itSupportsSystemProps, itRendersChildren } from '@mantine/tests';
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup';

const defaultProps: AvatarGroupProps = {
  children: 'test-children',
};

describe('@mantine/core/AvatarGroup', () => {
  itRendersChildren(AvatarGroup, defaultProps);
  itSupportsSystemProps({
    component: AvatarGroup,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/AvatarGroup',
    providerName: 'AvatarGroup',
  });
});
