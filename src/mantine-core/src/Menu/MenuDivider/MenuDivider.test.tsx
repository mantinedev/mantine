import { createContextContainer, itSupportsSystemProps } from '@mantine/tests';
import { MenuDivider, MenuDividerProps } from './MenuDivider';
import { Menu } from '../Menu';

const defaultProps: MenuDividerProps = {};

const TestContainer = createContextContainer(MenuDivider, Menu, { opened: true });

describe('@mantine/core/MenuDivider', () => {
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    displayName: '@mantine/core/MenuDivider',
  });
});
