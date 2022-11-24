import React from 'react';
import {
  itSupportsSystemProps,
  createContextContainer,
  itRendersChildren,
  itSupportsFocusEvents,
  itThrowsContextError,
} from '@mantine/tests';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Tab, TabProps } from './Tab';
import { TabsProvider } from '../TabsProvider';
import { TABS_ERRORS } from '../Tabs.errors';

const defaultProps: TabProps = {
  value: 'test',
  children: 'Test tab',
};

const TestContainer = createContextContainer(Tab, TabsProvider);

describe('@mantine/core/Tab', () => {
  itThrowsContextError(Tab, defaultProps, TABS_ERRORS.context);
  itRendersChildren(TestContainer, defaultProps);
  itSupportsFocusEvents(TestContainer, defaultProps, '[role="tab"]');
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/Tab',
    providerName: 'TabsTab',
  });

  it('calls onClick function from props', async () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onClick={spy} />);
    await userEvent.click(screen.getByRole('tab'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDown function from props', async () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onKeyDown={spy} />);
    await userEvent.type(screen.getByRole('tab'), 'R');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renders given right section and icon', () => {
    render(<TestContainer {...defaultProps} rightSection="test-right-section" icon="test-icon" />);
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
    expect(screen.getByText('test-icon')).toBeInTheDocument();
  });
});
