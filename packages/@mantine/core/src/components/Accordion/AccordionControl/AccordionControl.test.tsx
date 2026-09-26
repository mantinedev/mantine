import { createContextContainer, tests } from '@mantine-tests/core';
import { Accordion } from '../Accordion';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import {
  AccordionControl,
  AccordionControlProps,
  AccordionControlStylesNames,
} from './AccordionControl';

const defaultProps: AccordionControlProps = {
  icon: '$',
};

const _ContextContainer = createContextContainer(AccordionControl, AccordionItem, {
  value: 'test',
});
const ContextContainer = createContextContainer(_ContextContainer, Accordion, { order: 3 });

describe('@mantine/core/AccordionControl', () => {
  tests.itSupportsSystemProps<AccordionControlProps, AccordionControlStylesNames>({
    component: ContextContainer,
    props: defaultProps,
    children: true,
    id: false,
    displayName: '@mantine/core/AccordionControl',
    stylesApiSelectors: ['control', 'chevron', 'label', 'icon', 'itemTitle'],
    stylesApiName: 'Accordion',
    selector: '.mantine-Accordion-control',
    providerStylesApi: false,
    compound: true,
  });

  tests.itThrowsContextError(
    {
      component: AccordionControl,
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
