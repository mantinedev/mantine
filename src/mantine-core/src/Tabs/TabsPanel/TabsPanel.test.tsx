import {
  itSupportsSystemProps,
  createContextContainer,
  itRendersChildren,
  itThrowsContextError,
} from '@mantine/tests';
import { TabsPanel, TabsPanelProps } from './TabsPanel';
import { TabsProvider } from '../TabsProvider';
import { TABS_ERRORS } from '../Tabs.errors';

const defaultProps: TabsPanelProps = {
  value: 'test',
  children: 'Test children',
};

const TestContainer = createContextContainer(TabsPanel, TabsProvider);

describe('@mantine/core/TabsPanel', () => {
  itThrowsContextError(TabsPanel, defaultProps, TABS_ERRORS.context);
  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/TabsPanel',
    providerName: 'TabsPanel',
  });
});
