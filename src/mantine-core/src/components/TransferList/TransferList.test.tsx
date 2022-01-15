import React from 'react';
import { itSupportsSystemProps } from '@mantine/tests';
import { render, fireEvent } from '@testing-library/react';
import { TransferList, TransferListProps } from './TransferList';

const defaultProps: TransferListProps = {
  onChange: () => {},
  titles: ['test-1', 'test-2'],
  value: [
    [
      { value: 'react', label: 'React' },
      { value: 'ng', label: 'Angular' },
      { value: 'next', label: 'Next.js' },
    ],
    [
      { value: 'sv', label: 'Svelte' },
      { value: 'rw', label: 'Redwood' },
    ],
  ],
};

describe('@mantine/core/TransferList', () => {
  itSupportsSystemProps({
    component: TransferList,
    props: defaultProps,
    displayName: '@mantine/core/TransferList',
    refType: HTMLDivElement,
  });

  it('transfers filtered items', () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <TransferList
        {...defaultProps}
        onChange={mockOnChange}
        searchPlaceholder="Search..."
        filterOnTransferAll
      />
    );
    const leftList = container.querySelectorAll('.mantine-TransferList-transferListHeader')[0];
    const filterInput = leftList.querySelector('input');
    const transferAllButton = leftList.querySelectorAll('button')[1];

    fireEvent.change(filterInput, { target: { value: 'react' } });
    fireEvent.click(transferAllButton);
    expect(mockOnChange).toBeCalledWith([
      [
        { value: 'ng', label: 'Angular' },
        { value: 'next', label: 'Next.js' },
      ],
      [
        { value: 'sv', label: 'Svelte' },
        { value: 'rw', label: 'Redwood' },
        { value: 'react', label: 'React' },
      ],
    ]);
  });

  it('transfers all items', () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <TransferList
        {...defaultProps}
        onChange={mockOnChange}
        searchPlaceholder="Search..."
        filterOnTransferAll={false}
      />
    );
    const leftList = container.querySelectorAll('.mantine-TransferList-transferListHeader')[0];
    const filterInput = leftList.querySelector('input');
    const transferAllButton = leftList.querySelectorAll('button')[1];

    fireEvent.change(filterInput, { target: { value: 'react' } });
    fireEvent.click(transferAllButton);
    expect(mockOnChange).toBeCalledWith([
      [],
      [
        { value: 'sv', label: 'Svelte' },
        { value: 'rw', label: 'Redwood' },
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'next', label: 'Next.js' },
      ],
    ]);
  });
});
