import React from 'react';
import { itSupportsSystemProps, createContextContainer } from '@mantine/tests';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Tab, TabProps } from './Tab';
import { TabsProvider } from '../TabsProvider';

const defaultProps: TabProps = {
  value: 'test',
  children: 'Test tab',
};

const Container = createContextContainer(Tab, TabsProvider);

describe('@mantine/core/Tab', () => {
  itSupportsSystemProps({
    component: Container,
    props: defaultProps,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/Tab',
  });

  it('calls onClick function from props', () => {
    const spy = jest.fn();
    render(<Container {...defaultProps} onClick={spy} />);
    userEvent.click(screen.getByRole('tab'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDown function from props', () => {
    const spy = jest.fn();
    render(<Container {...defaultProps} onKeyDown={spy} />);
    userEvent.type(screen.getByRole('tab'), 'R');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
