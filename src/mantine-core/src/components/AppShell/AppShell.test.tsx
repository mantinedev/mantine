import { tests } from '@mantine/tests';
import { AppShell, AppShellProps, AppShellStylesNames } from './AppShell';

const defaultProps: AppShellProps = {};

describe('@mantine/core/AppShell', () => {
  tests.itSupportsSystemProps<AppShellProps, AppShellStylesNames>({
    component: AppShell,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/AppShell',
    stylesApiSelectors: ['root'],
  });
});
