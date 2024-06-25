import { tests } from '@mantine-tests/core';
import { ThemeIcon, ThemeIconProps, ThemeIconStylesNames } from './ThemeIcon';

const defaultProps: ThemeIconProps = {};

describe('@mantine/core/ThemeIcon', () => {
  tests.itSupportsSystemProps<ThemeIconProps, ThemeIconStylesNames>({
    component: ThemeIcon,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/ThemeIcon',
    stylesApiSelectors: ['root'],
  });
});
