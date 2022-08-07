import { createContextContainer, itSupportsSystemProps, itRendersChildren } from '@mantine/tests';
import { MenuLabel, MenuLabelProps } from './MenuLabel';
import { Menu } from '../Menu';

const defaultProps: MenuLabelProps = {};

const TestContainer = createContextContainer(MenuLabel, Menu, { opened: true });

describe('@mantine/core/MenuLabel', () => {
  itRendersChildren(MenuLabel, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    displayName: '@mantine/core/MenuLabel',
  });
});
