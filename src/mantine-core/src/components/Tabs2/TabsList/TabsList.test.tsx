import { itSupportsSystemProps, createContextContainer, itRendersChildren } from '@mantine/tests';
import { TabsList, TabsListProps } from './TabsList';
import { TabsProvider } from '../TabsProvider';

const defaultProps: TabsListProps = {
  children: 'Test children',
};

const TestContainer = createContextContainer(TabsList, TabsProvider);

describe('@mantine/core/TabsList', () => {
  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/TabsList',
  });
});
