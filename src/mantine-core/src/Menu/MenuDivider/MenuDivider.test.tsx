import { itSupportsSystemProps } from '@mantine/tests';
import { MenuDivider, MenuDividerProps } from './MenuDivider';

const defaultProps: MenuDividerProps = {};

describe('@mantine/core/MenuDivider', () => {
  itSupportsSystemProps({
    component: MenuDivider,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/MenuDivider',
    providerName: 'MenuDivider',
  });
});
