import React from 'react';
import {
  itSupportsOthers,
  itRendersChildren,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsStylesApi,
} from '@mantine/tests';
import { AccordionControl } from './AccordionControl';
import { Accordion as AccordionStylesApi } from '../styles.api';

const defaultProps = {
  opened: true,
  onToggle: () => {},
  transitionDuration: 200,
};

describe('@mantine/core/AccordionControl', () => {
  itSupportsOthers(AccordionControl, defaultProps);
  itRendersChildren(AccordionControl, defaultProps);
  itSupportsStyle(AccordionControl, defaultProps);
  itSupportsClassName(AccordionControl, defaultProps);
  itSupportsStylesApi(
    AccordionControl,
    defaultProps,
    Object.keys(AccordionStylesApi).filter((key) => key !== 'item' && key !== 'itemOpened'),
    'accordion'
  );
});
