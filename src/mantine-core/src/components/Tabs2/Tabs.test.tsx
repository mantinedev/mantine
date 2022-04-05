import { itSupportsSystemProps, itRendersChildren } from '@mantine/tests';
import { Tabs, TabsProps } from './Tabs';
// import { TABS_ERRORS } from '../Tabs.errors';

const defaultProps: TabsProps = {
  children: 'Test children',
};

describe('@mantine/core/Tabs', () => {
  itRendersChildren(Tabs, defaultProps);
  itSupportsSystemProps({
    component: Tabs,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Tabs',
  });
});
