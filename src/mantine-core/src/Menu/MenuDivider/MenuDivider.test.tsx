import { itSupportsSystemProps, createContextContainer } from '@mantine/tests';
import { MenuDivider, MenuDividerProps } from './MenuDivider';
import { Menu } from '../Menu';

const defaultProps: MenuDividerProps = {};

const TestContainer = createContextContainer<any>(MenuDivider, Menu, { opened: true });

describe('@mantine/core/MenuDivider', () => {
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/MenuDivider',
    providerName: 'MenuDivider',
  });
});
