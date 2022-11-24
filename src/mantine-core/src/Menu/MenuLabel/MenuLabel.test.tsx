import { itSupportsSystemProps, itRendersChildren } from '@mantine/tests';
import { MenuLabel, MenuLabelProps } from './MenuLabel';

const defaultProps: MenuLabelProps = {};

describe('@mantine/core/MenuLabel', () => {
  itRendersChildren(MenuLabel, defaultProps);
  itSupportsSystemProps({
    component: MenuLabel,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/MenuLabel',
    providerName: 'MenuLabel',
  });
});
