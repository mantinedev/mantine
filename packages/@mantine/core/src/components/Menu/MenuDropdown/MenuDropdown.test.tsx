import { createContextContainer, tests } from '@mantine-tests/core';
import { Menu } from '../Menu';
import { MenuDropdown, MenuDropdownProps, MenuDropdownStylesNames } from './MenuDropdown';

const TestContainer = createContextContainer(MenuDropdown, Menu, {
  opened: true,
  withinPortal: false,
});

const defaultProps: MenuDropdownProps = {};

describe('@mantine/core/MenuDropdown', () => {
  tests.itSupportsSystemProps<MenuDropdownProps, MenuDropdownStylesNames>({
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
    displayName: '@mantine/core/MenuDropdown',
    stylesApiSelectors: ['dropdown'],
    stylesApiName: 'Menu',
    compound: true,
    providerStylesApi: false,
  });
});
