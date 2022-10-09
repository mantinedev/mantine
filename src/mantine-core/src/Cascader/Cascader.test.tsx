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
  id: 'cascader',
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
  itSupportsFocusEvents(Cascader, defaultProps, 'input[type="search"]');
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
      <Cascader
        {...defaultProps}
        name="custom-cascader"
        form="custom-form"
        value={['I love', 'react']}
      />
    );
    expect(container.querySelector('input[name="custom-cascader"]')).toHaveValue('I love,react');
    expect(container.querySelector('input[name="custom-cascader"]')).toHaveAttribute(
      'form',
      'custom-form'
    );
  });

  it('opens dropdown when input is clicked', async () => {
    render(<Cascader {...defaultProps} initiallyOpened={false} />);
    expect(screen.queryAllByRole('treeitem')).toHaveLength(0);

    await userEvent.click(screen.getByRole('searchbox'));
    expect(screen.queryAllByRole('treeitem')).toHaveLength(defaultProps.data.length);
  });

  it('supports uncontrolled state', async () => {
    render(<Cascader {...defaultProps} initiallyOpened={false} />);
    await userEvent.click(screen.getByRole('searchbox'));
    await userEvent.click(screen.getAllByRole('treeitem')[0]);
    await userEvent.click(
      screen.getAllByRole('treeitem').find((el) => el.id === 'cascader-menu-1-item-0')
    );
    expect(screen.queryAllByRole('treeitem')).toHaveLength(0);
    expect(screen.getByRole('searchbox')).toHaveValue('I love,react');
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(
      <Cascader
        {...defaultProps}
        value={['I love', 'react']}
        initiallyOpened={false}
        onChange={spy}
      />
    );
    await userEvent.click(screen.getByRole('searchbox'));
    await userEvent.click(screen.getAllByRole('treeitem')[1]);
    await userEvent.click(
      screen.getAllByRole('treeitem').find((el) => el.id === 'cascader-menu-1-item-1')
    );
    expect(screen.queryAllByRole('treeitem')).toHaveLength(0);
    expect(spy).toHaveBeenCalledWith(['I hate', 'solid']);
    expect(screen.getByRole('searchbox')).toHaveValue('I love,react');
  });
});
