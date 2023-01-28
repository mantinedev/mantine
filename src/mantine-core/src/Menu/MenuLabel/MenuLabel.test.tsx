import { itSupportsSystemProps, itRendersChildren, createContextContainer } from '@mantine/tests';
import { MenuLabel, MenuLabelProps } from './MenuLabel';
import { Menu } from '../Menu';

const defaultProps: MenuLabelProps = {};

const TestContainer = createContextContainer<any>(MenuLabel, Menu, { opened: true });

describe('@mantine/core/MenuLabel', () => {
  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/MenuLabel',
    providerName: 'MenuLabel',
  });
});
