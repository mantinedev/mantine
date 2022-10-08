import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  itSupportsFocusEvents,
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputProps,
} from '@mantine/tests';
import { Cascader, CascaderProps } from './Cascader';

const defaultProps: CascaderProps = {
  initiallyOpened: true,
  label: 'test-label',
  withinPortal: false,
  data: [
    { value: 'I love', children: [{ value: 'react' }, { value: 'svelte' }, { value: 'vue' }] },
    {
      value: 'I hate',
      children: [{ value: 'react', disabled: true }, { value: 'solid' }, { value: 'angular' }],
    },
  ],
};

describe('@mantine/core/Cascader', () => {
  checkAccessibility([<Cascader {...defaultProps} />]);
  itSupportsFocusEvents(Cascader, defaultProps, 'input');
  itSupportsInputProps(Cascader, defaultProps, 'Cascader');
  itSupportsSystemProps({
    component: Cascader,
    props: defaultProps,
    displayName: '@mantine/core/Cascader',
    refType: HTMLInputElement,
    othersSelector: '.mantine-Cascader-input',
    providerName: 'Cascader',
  });

  it('renders hidden input with current input value', () => {
    const { container } = render(
      <Cascader {...defaultProps} name="custom-cascader" form="custom-form" value={['I love', 'react']} />
    );
    expect(container.querySelector('input[name="custom-cascader"]')).toHaveValue('I love, react');
    expect(container.querySelector('input[name="custom-cascader"]')).toHaveAttribute(
      'form',
      'custom-form'
    );
  });

  it('opens dropdown when input is clicked (searchable={false})', async () => {
    render(<Cascader {...defaultProps} initiallyOpened={false} />);
    expect(screen.queryAllByRole('option')).toHaveLength(0);

    await userEvent.click(screen.getByRole('searchbox'));
    expect(screen.queryAllByRole('option')).toHaveLength(defaultProps.data.length);
  });

  it('supports uncontrolled state', async () => {
    render(<Cascader {...defaultProps} initiallyOpened={false} />);
    await userEvent.click(screen.getByRole('searchbox'));
    await userEvent.click(screen.getAllByRole('option')[0]);
    expect(screen.queryAllByRole('option')).toHaveLength(0);
    expect(screen.getByRole('searchbox')).toHaveValue('Test item 1');
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(
      <Cascader {...defaultProps} value={['test-item-1']} initiallyOpened={false} onChange={spy} />
    );
    await userEvent.click(screen.getByRole('searchbox'));
    await userEvent.click(screen.getAllByRole('option')[1]);
    expect(screen.queryAllByRole('option')).toHaveLength(0);
    expect(screen.getByRole('searchbox')).toHaveValue('Test item 1');
    expect(spy).toHaveBeenCalledWith('test-item-2');
  });
});
