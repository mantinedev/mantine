import { useState } from 'react';
import { act, waitFor } from '@testing-library/react';
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

    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('option', { name: 'test-1' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('option', { name: 'test-2' })).toHaveAttribute(
      'aria-selected',
      'false'
    );
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
    expect(screen.getByRole('option', { name: 'test-1' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('option', { name: 'test-2' })).toHaveAttribute(
      'aria-selected',
      'false'
    );
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

  it('supports search Styles API selector', async () => {
    render(
      <ComboboxPopover
        data={['React', 'Angular']}
        searchable
        classNames={{ search: 'test-search' }}
      >
        {target}
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByPlaceholderText('Search...')).toHaveClass('test-search');
  });

  it('returns focus to the target when searchable dropdown is closed with Escape', async () => {
    render(
      <ComboboxPopover data={['React', 'Angular']} searchable>
        {target}
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    await waitFor(() => expect(screen.getByPlaceholderText('Search...')).toHaveFocus());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByRole('combobox')).toHaveFocus());
  });

  it('returns focus to the target after option is selected in searchable mode', async () => {
    render(
      <ComboboxPopover data={['React', 'Angular']} searchable>
        {target}
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    await waitFor(() => expect(screen.getByPlaceholderText('Search...')).toHaveFocus());
    await userEvent.click(screen.getByRole('option', { name: 'React' }));
    await waitFor(() => expect(screen.getByRole('combobox')).toHaveFocus());
  });

  it('does not steal focus from an element clicked outside of searchable dropdown', async () => {
    render(
      <>
        <ComboboxPopover data={['React', 'Angular']} searchable>
          {target}
        </ComboboxPopover>
        <input data-testid="outside" />
      </>
    );
    await userEvent.click(screen.getByRole('combobox'));
    await waitFor(() => expect(screen.getByPlaceholderText('Search...')).toHaveFocus());
    await userEvent.click(screen.getByTestId('outside'));
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));
    expect(screen.getByTestId('outside')).toHaveFocus();
  });

  it('does not move focus to the target on outside click when dropdownOpened is controlled', async () => {
    render(
      <>
        <ComboboxPopover data={['React', 'Angular']} searchable dropdownOpened>
          {target}
        </ComboboxPopover>
        <input data-testid="outside" />
      </>
    );
    await userEvent.click(screen.getByTestId('outside'));
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));
    expect(screen.getByTestId('outside')).toHaveFocus();
    expect(screen.getByRole('listbox')).toBeVisible();
  });

  it('updates target content with controlled value', async () => {
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
    expect(screen.getByRole('combobox')).toHaveTextContent('Select');
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-2' }));
    expect(screen.getByRole('combobox')).toHaveTextContent('test-2');
  });

  it('labels the listbox with the target', async () => {
    render(<ComboboxPopover {...defaultProps} />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toHaveAttribute(
      'aria-labelledby',
      screen.getByRole('combobox').id
    );
  });

  it('labels the listbox with the target id when target has its own id', async () => {
    render(
      <ComboboxPopover data={['test-1']}>
        <ComboboxPopover.Target>
          <Button id="custom-target">Custom</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toHaveAttribute('aria-labelledby', 'custom-target');
  });

  it('labels the listbox with the target in searchable mode', async () => {
    render(<ComboboxPopover {...defaultProps} searchable />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toHaveAttribute(
      'aria-labelledby',
      screen.getByRole('combobox').id
    );
  });

  it('uses aria-label as the listbox name', async () => {
    render(<ComboboxPopover {...defaultProps} aria-label="Frameworks" />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox', { name: 'Frameworks' })).toBeInTheDocument();
  });

  it('sets aria-multiselectable on the listbox in multiple mode', async () => {
    render(
      <ComboboxPopover data={['test-1', 'test-2']} multiple>
        {target}
      </ComboboxPopover>
    );
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toHaveAttribute('aria-multiselectable', 'true');
  });

  it('opens dropdown with Enter and submits option with ArrowDown and Enter', async () => {
    const spy = jest.fn();
    render(
      <ComboboxPopover
        {...defaultProps}
        onChange={spy}
        comboboxProps={{ transitionProps: { duration: 0 } }}
      />
    );
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{Enter}');
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
    expect(spy).toHaveBeenCalledWith('test-2');
  });

  it('highlights first option on open when selectFirstOptionOnDropdownOpen is set', async () => {
    render(<ComboboxPopover {...defaultProps} selectFirstOptionOnDropdownOpen />);
    await userEvent.click(screen.getByRole('combobox'));
    await waitFor(() =>
      expect(screen.getByRole('option', { name: 'test-1' })).toHaveAttribute(
        'data-combobox-selected'
      )
    );
  });

  it('supports controlled search value', async () => {
    const spy = jest.fn();
    render(
      <ComboboxPopover
        data={['React', 'Angular', 'Vue']}
        searchable
        searchValue="an"
        onSearchChange={spy}
        defaultDropdownOpened
      >
        {target}
      </ComboboxPopover>
    );
    expect(screen.getAllByRole('option')).toHaveLength(1);
    expect(screen.getByRole('option', { name: 'Angular' })).toBeInTheDocument();
    await userEvent.type(screen.getByPlaceholderText('Search...'), 'g');
    expect(spy).toHaveBeenLastCalledWith('ang');
    expect(screen.getAllByRole('option')).toHaveLength(1);
  });

  it('limits the number of displayed options', async () => {
    render(
      <ComboboxPopover data={['a', 'b', 'c', 'd']} limit={2} searchable defaultDropdownOpened>
        {target}
      </ComboboxPopover>
    );
    expect(screen.getAllByRole('option')).toHaveLength(2);
  });

  it('supports renderOption', async () => {
    render(
      <ComboboxPopover
        {...defaultProps}
        defaultValue="test-2"
        defaultDropdownOpened
        renderOption={({ option, checked }) => (
          <span>
            {option.label}
            {checked ? ' (checked)' : ''}
          </span>
        )}
      />
    );
    expect(screen.getByText('test-1')).toBeInTheDocument();
    expect(screen.getByText('test-2 (checked)')).toBeInTheDocument();
  });
});
