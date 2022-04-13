import { itSupportsSystemProps, createContextContainer, itRendersChildren } from '@mantine/tests';
import { AccordionItem, AccordionItemProps } from './AccordionItem';
import { AccordionProvider } from '../AccordionProvider';

const defaultProps: AccordionItemProps = {
  value: 'test',
  children: 'Test item',
};

const TestContainer = createContextContainer(AccordionItem, AccordionProvider, { order: 3 });

describe('@mantine/core/AccordionItem', () => {
  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/AccordionItem',
  });
});
