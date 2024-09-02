import React, { useState } from 'react';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { Select, SelectProps, SelectStylesNames } from './Select';

const defaultProps: SelectProps = {
  ...inputDefaultProps,
  data: ['test-1', 'test-2'],
};

describe('@mantine/core/Select', () => {
  tests.axe([
    <Select aria-label="test-label" data={['test-1', 'test-2']} key="1" />,
    <Select aria-label="test-label" dropdownOpened data={['test-1', 'test-2']} key="2" />,
    <Select label="test-label" data={['test-1', 'test-2']} key="3" />,
    <Select label="test-label" error data={['test-1', 'test-2']} key="4" />,
    <Select label="test-label" error="test-error" id="test" data={['test-1', 'test-2']} key="5" />,
    <Select
      label="test-label"
      description="test-description"
      data={['test-1', 'test-2']}
      key="6"
    />,
  ]);

  tests.itSupportsSystemProps<SelectProps, SelectStylesNames>({
    component: Select,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@mantine/core/Select',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<SelectProps>({
    component: Select,
    props: defaultProps,
    selector: 'input',
  });

  it('supports uncontrolled state', async () => {
    render(<Select {...defaultProps} />);
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(screen.getByRole('textbox')).toHaveValue('test-1');
  });

  it('allows deselecting option', async () => {
    render(<Select {...defaultProps} defaultValue="test-1" />);
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('does not allow to deselect option if allowDeselect is false', async () => {
    render(<Select {...defaultProps} defaultValue="test-1" allowDeselect={false} />);
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(screen.getByRole('textbox')).toHaveValue('test-1');
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<Select {...defaultProps} value="test-1" onChange={spy} />);
    expect(screen.getByRole('textbox')).toHaveValue('test-1');
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-2' }));
    expect(screen.getByRole('textbox')).toHaveValue('test-1');
    expect(spy).toHaveBeenCalledWith('test-2', { label: 'test-2', value: 'test-2' });
  });

  it('opens/closes dropdown on input click', async () => {
    render(<Select {...defaultProps} />);
    expect(screen.queryByRole('listbox')).toBe(null);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.queryByRole('listbox')).toBe(null);
  });

  it('allows controlling dropdown state with dropdownOpened prop', async () => {
    const { rerender } = render(<Select {...defaultProps} dropdownOpened />);
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByRole('listbox')).toBeVisible();

    rerender(<Select {...defaultProps} dropdownOpened={false} />);
    expect(screen.queryByRole('listbox')).toBe(null);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.queryByRole('listbox')).toBe(null);
  });

  it('allows searching options with searchable prop', async () => {
    render(<Select {...defaultProps} searchable />);
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.type(screen.getByRole('textbox'), 'test-1');
    expect(screen.getByRole('option', { name: 'test-1' })).toBeVisible();
    expect(screen.queryByRole('option', { name: 'test-2' })).toBe(null);
  });

  it('displays nothing found message if no options matched search query', async () => {
    render(<Select {...defaultProps} searchable nothingFoundMessage="Nothing found" />);
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.type(screen.getByRole('textbox'), 'test-3');
    expect(screen.getByText('Nothing found')).toBeVisible();
  });

  it('displays the nothing found message if there is no data', async () => {
    render(<Select {...defaultProps} data={[]} nothingFoundMessage="No data" />);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByText('No data')).toBeVisible();
  });

  it('allows controlling search value with searchValue prop', async () => {
    render(<Select {...defaultProps} searchable searchValue="test-1" />);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByRole('option', { name: 'test-1' })).toBeVisible();
    expect(screen.queryByRole('option', { name: 'test-2' })).toBe(null);
  });

  it('calls onSearchChange when search value changes', async () => {
    const spy = jest.fn();
    render(<Select {...defaultProps} searchable onSearchChange={spy} />);
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.type(screen.getByRole('textbox'), 'test-1');
    expect(spy).toHaveBeenCalledWith('test-1');
  });

  it('sets input value on the hidden input', async () => {
    render(<Select {...defaultProps} name="test-select" />);
    expect(document.querySelector('input[name="test-select"]')).toHaveValue('');
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(screen.getByRole('textbox')).toHaveValue('test-1');
    expect(document.querySelector('input[name="test-select"]')).toHaveValue('test-1');
  });

  it('allows selecting multiple Selects with react testing library', async () => {
    render(
      <>
        <Select label="First" data={['first-1', 'first-2']} />
        <Select label="Second" data={['second-1', 'second-2']} />
      </>
    );

    await userEvent.click(screen.getByRole('textbox', { name: 'First' }));
    expect(screen.queryByRole('listbox', { name: 'First' })).toBeVisible();

    await userEvent.click(screen.getByRole('textbox', { name: 'Second' }));
    expect(screen.queryByRole('listbox', { name: 'Second' })).toBeVisible();
  });

  it('supports dynamically changing data', async () => {
    const Wrapper: React.FunctionComponent = () => {
      const [data, setData] = useState([{ value: '1', label: 'initial-label' }]);
      return (
        <>
          <Select label="First" data={data} value="1" />
          <button type="button" onClick={() => setData([{ value: '1', label: 'new-label' }])}>
            Set Data
          </button>
        </>
      );
    };

    render(<Wrapper />);

    expect(screen.getByRole('textbox')).toHaveValue('initial-label');
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('textbox')).toHaveValue('new-label');
  });

  it('allows to change controlled search value when value is controlled and selected', async () => {
    const Wrapper: React.FunctionComponent = () => {
      const [value, setValue] = useState<string | null>('Angular');
      const [searchValue, setSearchValue] = useState('');

      return (
        <Select
          {...defaultProps}
          value={value}
          onChange={setValue}
          searchable
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          data={['React', 'Angular', 'Svelte']}
        />
      );
    };

    render(<Wrapper />);

    await userEvent.click(screen.getByRole('textbox'));
    // Type backspace to remove last character
    await userEvent.type(screen.getByRole('textbox'), '{backspace}');
    expect(screen.getByRole('textbox')).toHaveValue('Angula');
  });
});
