import React from 'react';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
} from '@mantine/tests';
import { Accordion, AccordionItem } from './Accordion';
import { Accordion as AccordionStylesApi } from './styles.api';

const defaultProps = {
  children: [
    <AccordionItem label="Test 1">Test 1</AccordionItem>,
    <AccordionItem label="Test 2">Test 2</AccordionItem>,
    <AccordionItem label="Test 3">Test 3</AccordionItem>,
  ],
};

describe('@mantine/core/Accordion', () => {
  itSupportsClassName(Accordion, defaultProps);
  itSupportsOthers(Accordion, defaultProps);
  itSupportsStyle(Accordion, defaultProps);
  itSupportsStylesApi(Accordion, defaultProps, Object.keys(AccordionStylesApi), 'accordion');

  it('has correct displayName', () => {
    expect(Accordion.displayName).toEqual('@mantine/core/Accordion');
  });
});
