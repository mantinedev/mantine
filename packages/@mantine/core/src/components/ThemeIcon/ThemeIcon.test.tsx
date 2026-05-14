import { tests } from '@mantine-tests/core';
import { ThemeIcon, ThemeIconProps, ThemeIconStylesNames } from './ThemeIcon';

const defaultProps: ThemeIconProps = {};

describe('@mantine/core/ThemeIcon', () => {
  tests.itSupportsSystemProps<ThemeIconProps, ThemeIconStylesNames>({
    component: ThemeIcon,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/ThemeIcon',
    stylesApiSelectors: ['root'],
  });
});
