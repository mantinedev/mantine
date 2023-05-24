import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup';

const defaultProps: AvatarGroupProps = {
  children: 'test-children',
};

describe('@mantine/core/AvatarGroup', () => {
  itRendersChildren(AvatarGroup, defaultProps);
  itSupportsProviderVariant(AvatarGroup, defaultProps, 'AvatarGroup');
  itSupportsSystemProps({
    component: AvatarGroup,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/AvatarGroup',
    providerName: 'AvatarGroup',
  });
});
