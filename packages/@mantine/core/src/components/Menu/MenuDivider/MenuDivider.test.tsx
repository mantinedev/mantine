import { createContextContainer, tests } from '@mantine-tests/core';
import { Menu } from '../Menu';
import { MenuDivider, MenuDividerProps, MenuDividerStylesNames } from './MenuDivider';

const TestContainer = createContextContainer(MenuDivider, Menu, { opened: true });

const defaultProps: MenuDividerProps = {};

describe('@mantine/core/MenuDivider', () => {
  tests.itSupportsSystemProps<MenuDividerProps, MenuDividerStylesNames>({
    component: TestContainer,
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
    displayName: '@mantine/core/MenuDivider',
    stylesApiSelectors: ['divider'],
    stylesApiName: 'Menu',
    compound: true,
    providerStylesApi: false,
  });
});
