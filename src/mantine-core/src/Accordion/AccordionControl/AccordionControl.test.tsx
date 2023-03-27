import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  createContextContainer,
  itSupportsSystemProps,
  itThrowsContextError,
  itRendersChildren,
} from '@mantine/tests';
import { AccordionControl, AccordionControlProps } from './AccordionControl';
import { AccordionProvider } from '../AccordionProvider';
import { AccordionItemContextProvider } from '../AccordionItem.context';
import { ACCORDION_ERRORS } from '../Accordion.errors';

const TestContainer = createContextContainer(
  createContextContainer(AccordionControl, AccordionItemContextProvider, {
    value: { value: 'test-value' },
  }),
  AccordionProvider
);

const defaultProps: AccordionControlProps = {};

describe('@mantine/core/AccordionControl', () => {
  itThrowsContextError(
    createContextContainer(AccordionControl, AccordionItemContextProvider, {
      value: { value: 'test-value' },
    }),
    defaultProps,
    ACCORDION_ERRORS.context
  );

  itRendersChildren(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    displayName: '@mantine/core/AccordionControl',
    excludePadding: true,
    refType: HTMLButtonElement,
    providerName: 'AccordionControl',
  });

  it('calls onClick function from props', async () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onClick={spy} />);
    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDown function from props', async () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onKeyDown={spy} />);
    await userEvent.type(screen.getByRole('button'), 'R');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
