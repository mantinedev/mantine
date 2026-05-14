import { createContextContainer, tests } from '@mantine-tests/core';
import { AppShell } from '../AppShell';
import { AppShellMain, AppShellMainProps, AppShellMainStylesNames } from './AppShellMain';

const TestContainer = createContextContainer(AppShellMain, AppShell, {});

const defaultProps: AppShellMainProps = {};

describe('@mantine/core/AppShellMain', () => {
  tests.itSupportsSystemProps<AppShellMainProps, AppShellMainStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/AppShellMain',
    stylesApiSelectors: ['main'],
    selector: '.mantine-AppShell-main',
    stylesApiName: 'AppShell',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: AppShellMain,
    props: defaultProps,
    error: 'AppShell was not found in tree',
  });
});
