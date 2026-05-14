import { createContextContainer, tests } from '@mantine-tests/core';
import { Menu } from '../Menu';
import { MenuLabel, MenuLabelProps, MenuLabelStylesNames } from './MenuLabel';

const TestContainer = createContextContainer(MenuLabel, Menu, { opened: true });

const defaultProps: MenuLabelProps = {};

describe('@mantine/core/MenuLabel', () => {
  tests.itSupportsSystemProps<MenuLabelProps, MenuLabelStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/MenuLabel',
    stylesApiSelectors: ['label'],
    stylesApiName: 'Menu',
    compound: true,
    providerStylesApi: false,
  });
});
