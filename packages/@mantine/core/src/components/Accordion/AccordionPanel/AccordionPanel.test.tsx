import { createContextContainer, tests } from '@mantine-tests/core';
import { Accordion } from '../Accordion';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import { AccordionPanel, AccordionPanelProps, AccordionPanelStylesNames } from './AccordionPanel';

const defaultProps: AccordionPanelProps = {};

const _ContextContainer = createContextContainer(AccordionPanel, AccordionItem, { value: 'test' });
const ContextContainer = createContextContainer(_ContextContainer, Accordion, {});

describe('@mantine/core/AccordionPanel', () => {
  tests.itSupportsSystemProps<AccordionPanelProps, AccordionPanelStylesNames>({
    component: ContextContainer,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/AccordionPanel',
    stylesApiSelectors: ['panel', 'content'],
    stylesApiName: 'Accordion',
    selector: '.mantine-Accordion-panel',
    providerStylesApi: false,
    compound: true,
  });

  tests.itThrowsContextError(
    {
      component: AccordionPanel,
      props: defaultProps,
      error: 'Accordion.Item component was not found in the tree',
    },
    'throws error when rendered outside of Accordion.Item context'
  );

  tests.itThrowsContextError(
    {
      component: _ContextContainer,
      props: defaultProps,
      error: 'Accordion component was not found in the tree',
    },
    'throws error when rendered outside of Accordion context'
  );
});
