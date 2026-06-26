import { useState } from 'react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Button } from '../Button';
import { ComboboxPopover, ComboboxPopoverProps } from './ComboboxPopover';

const defaultProps: ComboboxPopoverProps = {
  data: ['test-1', 'test-2'],
  children: (
    <ComboboxPopover.Target>
      <Button>Toggle</Button>
    </ComboboxPopover.Target>
  ),
};

const target = (
  <ComboboxPopover.Target>
    <Button>Toggle</Button>
  </ComboboxPopover.Target>
);

describe('@mantine/core/ComboboxPopover', () => {
  tests.axe([
    <ComboboxPopover aria-label="test-label" data={['test-1', 'test-2']} key="1">
      {target}
    </ComboboxPopover>,
  ]);

  tests.itSupportsSystemProps<ComboboxPopoverProps>({
    component: ComboboxPopover,
    props: defaultProps,
    displayName: '@mantine/core/ComboboxPopover',
    refType: null,
    variant: false,
    size: false,
    id: false,
    mod: false,
    styleProps: false,
    classes: false,
    extend: false,
    withProps: false,
    providerName: null,
  });

  it('opens/closes dropdown on target click', async () => {
    render(<ComboboxPopover {...defaultProps} />);
    expect(screen.queryByRole('listbox')).toBe(null);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.queryByRole('listbox')).toBe(null);
  });

  it('supports uncontrolled single value state', async () => {
    const spy = jest.fn();
    render(<ComboboxPopover {...defaultProps} onChange={spy} />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(spy).toHaveBeenCalledWith('test-1');
  });

  it('supports controlled single value state', async () => {
    const spy = jest.fn();
    render(<ComboboxPopover {...defaultProps} value="test-1" onChange={spy} />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-2' }));
    expect(spy).toHaveBeenCalledWith('test-2');
  });

  it('allows deselecting the selected option in single mode', async () => {
    const spy = jest.fn();
    render(<ComboboxPopover {...defaultProps} defaultValue="test-1" onChange={spy} />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(spy).toHaveBeenCalledWith(null);
  });

  it('does not allow deselecting when allowDeselect is false', async () => {
    const spy = jest.fn();
    render(
      <ComboboxPopover
        {...defaultProps}
        defaultValue="test-1"
        allowDeselect={false}
        onChange={spy}
      />
    );
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(spy).toHaveBeenCalledWith('test-1');
  });

  it('closes dropdown after selecting option in single mode', async () => {
    render(<ComboboxPopover {...defaultProps} />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(screen.queryByRole('listbox')).toBe(null);
  });

  it('supports uncontrolled multiple value state', async () => {
    const spy = jest.fn();
    render(
      <ComboboxPopover data={['test-1', 'test-2']} multiple onChange={spy}>
        {target}
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(spy).toHaveBeenCalledWith(['test-1']);
  });

  it('supports controlled multiple value state', async () => {
    const spy = jest.fn();
    render(
      <ComboboxPopover data={['test-1', 'test-2']} multiple value={['test-1']} onChange={spy}>
        {target}
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-2' }));
    expect(spy).toHaveBeenCalledWith(['test-1', 'test-2']);
  });

  it('allows deselecting in multiple mode', async () => {
    const spy = jest.fn();
    render(
      <ComboboxPopover
        data={['test-1', 'test-2']}
        multiple
        defaultValue={['test-1']}
        onChange={spy}
      >
        {target}
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(spy).toHaveBeenCalledWith([]);
  });

  it('keeps dropdown open after selecting option in multiple mode', async () => {
    render(
      <ComboboxPopover data={['test-1', 'test-2']} multiple>
        {target}
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(screen.getByRole('listbox')).toBeVisible();
  });

  it('allows controlling dropdown state with dropdownOpened prop', async () => {
    const { rerender } = render(<ComboboxPopover {...defaultProps} dropdownOpened />);
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeVisible();

    rerender(<ComboboxPopover {...defaultProps} dropdownOpened={false} />);
    expect(screen.queryByRole('listbox')).toBe(null);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.queryByRole('listbox')).toBe(null);
  });

  it('displays nothing found message when there is no data', async () => {
    render(
      <ComboboxPopover data={[]} nothingFoundMessage="No data">
        {target}
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByText('No data')).toBeVisible();
  });

  it('displays check icon for selected option', async () => {
    render(<ComboboxPopover {...defaultProps} defaultValue="test-1" withCheckIcon />);
    await userEvent.click(screen.getByRole('combobox'));
    const option = screen.getByRole('option', { name: 'test-1' });
    expect(option.querySelector('svg')).toBeInTheDocument();
  });

  it('sets input value on the hidden input', async () => {
    render(<ComboboxPopover {...defaultProps} name="test-combobox-popover" />);
    expect(document.querySelector('input[name="test-combobox-popover"]')).toHaveValue('');
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(document.querySelector('input[name="test-combobox-popover"]')).toHaveValue('test-1');
  });

  it('calls onDropdownOpen and onDropdownClose', async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    render(<ComboboxPopover {...defaultProps} onDropdownOpen={onOpen} onDropdownClose={onClose} />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(onOpen).toHaveBeenCalledTimes(1);
    await userEvent.click(screen.getByRole('combobox'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('supports data with groups', async () => {
    render(
      <ComboboxPopover
        data={[
          { group: 'Frontend', items: ['React', 'Vue'] },
          { group: 'Backend', items: ['Node', 'Python'] },
        ]}
      >
        {target}
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByText('Frontend')).toBeVisible();
    expect(screen.getByText('Backend')).toBeVisible();
    expect(screen.getAllByRole('option')).toHaveLength(4);
  });

  it('renders search input in dropdown when searchable', async () => {
    render(
      <ComboboxPopover data={['React', 'Angular', 'Vue']} searchable>
        {target}
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByPlaceholderText('Search...')).toBeVisible();
  });

  it('filters options when typing in search input', async () => {
    render(
      <ComboboxPopover data={['React', 'Angular', 'Vue']} searchable>
        {target}
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getAllByRole('option')).toHaveLength(3);
    await userEvent.type(screen.getByPlaceholderText('Search...'), 'Rea');
    expect(screen.getAllByRole('option')).toHaveLength(1);
    expect(screen.getByRole('option', { name: 'React' })).toBeVisible();
  });

  it('displays nothing found message when search has no matches', async () => {
    render(
      <ComboboxPopover
        data={['React', 'Angular', 'Vue']}
        searchable
        nothingFoundMessage="Nothing found"
      >
        {target}
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.type(screen.getByPlaceholderText('Search...'), 'xyz');
    expect(screen.getByText('Nothing found')).toBeVisible();
  });

  it('clears search value after option selection in searchable mode', async () => {
    render(
      <ComboboxPopover data={['React', 'Angular', 'Vue']} searchable>
        {target}
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.type(screen.getByPlaceholderText('Search...'), 'Rea');
    await userEvent.click(screen.getByRole('option', { name: 'React' }));
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByPlaceholderText('Search...')).toHaveValue('');
    expect(screen.getAllByRole('option')).toHaveLength(3);
  });

  it('renders without errors with controlled component', () => {
    const Wrapper = () => {
      const [value, setValue] = useState<string | null>(null);
      return (
        <ComboboxPopover data={['test-1', 'test-2']} value={value} onChange={setValue}>
          <ComboboxPopover.Target>
            <Button>{value || 'Select'}</Button>
          </ComboboxPopover.Target>
        </ComboboxPopover>
      );
    };

    render(<Wrapper />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
