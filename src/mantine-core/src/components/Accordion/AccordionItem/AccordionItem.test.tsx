import { tests, createContextContainer } from '@mantine/tests';
import { AccordionItem, AccordionItemProps, AccordionItemStylesNames } from './AccordionItem';
import { Accordion } from '../Accordion';

const defaultProps: AccordionItemProps = {
  value: 'test',
};

const ContextContainer = createContextContainer(AccordionItem, Accordion, {});

describe('@mantine/core/AccordionItem', () => {
  tests.itSupportsSystemProps<AccordionItemProps, AccordionItemStylesNames>({
    component: ContextContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/AccordionItem',
    stylesApiSelectors: ['item'],
    stylesApiName: 'Accordion',
    selector: '.mantine-Accordion-item',
    providerStylesApi: false,
    compound: true,
  });

  tests.itThrowsContextError({
    component: AccordionItem,
    props: defaultProps,
    error: 'Accordion component was not found in the tree',
  });
});
