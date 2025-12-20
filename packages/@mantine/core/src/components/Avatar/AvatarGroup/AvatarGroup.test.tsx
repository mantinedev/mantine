import { tests } from '@mantine-tests/core';
import { AvatarGroup, AvatarGroupProps, AvatarGroupStylesNames } from './AvatarGroup';

const defaultProps: AvatarGroupProps = {};

describe('@mantine/core/AvatarGroup', () => {
  tests.itSupportsSystemProps<AvatarGroupProps, AvatarGroupStylesNames>({
    component: AvatarGroup,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/AvatarGroup',
    stylesApiSelectors: ['group'],
  });
});
