import { useState } from 'react';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { MultiSelect, MultiSelectProps, MultiSelectStylesNames } from './MultiSelect';

const defaultProps: MultiSelectProps = {
  ...inputDefaultProps,
  data: ['test-1', 'test-2'],
};

describe('@mantine/core/MultiSelect', () => {
  tests.axe([
    <MultiSelect aria-label="test-label" data={['test-1', 'test-2']} key="1" />,
    <MultiSelect label="test-label" data={['test-1', 'test-2']} key="2" />,
    <MultiSelect label="test-label" error data={['test-1', 'test-2']} key="3" />,
    <MultiSelect
      label="test-label"
      error="test-error"
      id="test"
      data={['test-1', 'test-2']}
      key="4"
    />,
    <MultiSelect
      label="test-label"
      description="test-description"
      data={['test-1', 'test-2']}
      key="5"
    />,
    <MultiSelect label="test-label" data={['test-1', 'test-2']} dropdownOpened key="6" />,
  ]);

  tests.itSupportsSystemProps<MultiSelectProps, MultiSelectStylesNames>({
    component: MultiSelect,
    props: defaultProps,
    displayName: '@mantine/core/MultiSelect',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<MultiSelectProps>({
    component: MultiSelect,
    props: defaultProps,
    selector: 'input',
  });

  it('supports uncontrolled state', async () => {
    render(<MultiSelect {...defaultProps} name="test-multi-select" />);
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(document.querySelector('input[name="test-multi-select"]')).toHaveValue('test-1');

    await userEvent.click(screen.getByRole('option', { name: 'test-2' }));
    expect(document.querySelector('input[name="test-multi-select"]')).toHaveValue('test-1,test-2');
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(
      <MultiSelect {...defaultProps} value={['test-1']} onChange={spy} name="test-multi-select" />
    );
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-2' }));
    expect(document.querySelector('input[name="test-multi-select"]')).toHaveValue('test-1');
    expect(spy).toHaveBeenLastCalledWith(['test-1', 'test-2']);
  });

  it('supports defaultValue', () => {
    render(<MultiSelect {...defaultProps} defaultValue={['test-1']} name="test-multi-select" />);
    expect(document.querySelector('input[name="test-multi-select"]')).toHaveValue('test-1');
  });

  it('allows controlling dropdown state with dropdownOpened prop', async () => {
    const { rerender } = render(<MultiSelect {...defaultProps} dropdownOpened />);
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByRole('listbox')).toBeVisible();

    rerender(<MultiSelect {...defaultProps} dropdownOpened={false} />);
    expect(screen.queryByRole('listbox')).toBe(null);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.queryByRole('listbox')).toBe(null);
  });

  it('displays the nothing found message if no options matched the search query', async () => {
    render(<MultiSelect {...defaultProps} searchable nothingFoundMessage="Nothing found" />);
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.type(screen.getByRole('textbox'), 'test-3');
    expect(screen.getByText('Nothing found')).toBeVisible();
  });

  it('displays the nothing found message if there is no data', async () => {
    render(<MultiSelect {...defaultProps} data={[]} nothingFoundMessage="No data" />);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByText('No data')).toBeVisible();
  });

  it('retains labels of selected values when data changes', async () => {
    function Demo() {
      const [data, setData] = useState([
        { value: '1', label: 'React' },
        { value: '2', label: 'Angular' },
        { value: '3', label: 'Svelte' },
      ]);

      return (
        <div>
          <button
            type="button"
            onClick={() =>
              setData([
                { value: '4', label: 'Vue' },
                { value: '5', label: 'Ember' },
                { value: '6', label: 'Backbone' },
              ])
            }
          >
            Update data
          </button>
          <MultiSelect data={data} defaultValue={['1', '2']} searchable />
        </div>
      );
    }

    render(<Demo />);
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Angular').length).toBeGreaterThan(0);

    await userEvent.click(screen.getByRole('button', { name: 'Update data' }));

    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Angular').length).toBeGreaterThan(0);
  });

  it('calls onRemove when pill remove button is clicked', async () => {
    const spy = jest.fn();
    render(<MultiSelect {...defaultProps} defaultValue={['test-1']} onRemove={spy} />);
    await userEvent.click(document.querySelector('.mantine-Pill-remove')!);
    expect(spy).toHaveBeenCalledWith('test-1');
  });

  it('calls onClear when clear button is clicked', async () => {
    const spy = jest.fn();
    render(
      <MultiSelect
        {...defaultProps}
        defaultValue={['test-1']}
        clearable
        onClear={spy}
        clearButtonProps={{ 'aria-label': 'Clear value' }}
      />
    );
    await userEvent.click(screen.getByLabelText('Clear value'));
    expect(spy).toHaveBeenCalled();
  });

  it('removes last value when backspace is pressed with empty search', async () => {
    render(<MultiSelect {...defaultProps} defaultValue={['test-1', 'test-2']} searchable />);
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.keyboard('{Backspace}');
    expect(
      screen.queryByText('test-2', { selector: '.mantine-Pill-label' })
    ).not.toBeInTheDocument();
    expect(screen.getByText('test-1', { selector: '.mantine-Pill-label' })).toBeInTheDocument();
  });

  it('toggles dropdown when space is pressed and searchable is false', async () => {
    render(<MultiSelect {...defaultProps} searchable={false} />);
    // Use focus instead of click to avoid triggering onClick handler
    screen.getByRole('textbox').focus();
    await userEvent.keyboard(' ');
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.keyboard(' ');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('maxValues prevents additional selections', async () => {
    const onMaxValues = jest.fn();
    render(
      <MultiSelect
        {...defaultProps}
        maxValues={1}
        data={['test-1', 'test-2']}
        onMaxValues={onMaxValues}
        defaultValue={['test-1']}
      />
    );
    await userEvent.click(screen.getByRole('textbox'));

    await userEvent.click(screen.getByRole('option', { name: 'test-2' }));
    expect(
      screen.queryByText('test-2', { selector: '.mantine-Pill-label' })
    ).not.toBeInTheDocument();
    expect(onMaxValues).toHaveBeenCalled();
  });

  it('clears search on change when clearSearchOnChange is true', async () => {
    render(<MultiSelect {...defaultProps} searchable clearSearchOnChange data={['test-1']} />);
    await userEvent.type(screen.getByRole('textbox'), 'test');
    expect(screen.getByRole('textbox')).toHaveValue('test');
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('does not clear search on change when clearSearchOnChange is false', async () => {
    render(
      <MultiSelect {...defaultProps} searchable clearSearchOnChange={false} data={['test-1']} />
    );
    await userEvent.type(screen.getByRole('textbox'), 'test');
    expect(screen.getByRole('textbox')).toHaveValue('test');
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(screen.getByRole('textbox')).toHaveValue('test');
  });

  it('opens dropdown on focus when openOnFocus is true', async () => {
    render(<MultiSelect {...defaultProps} openOnFocus />);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByRole('listbox')).toBeVisible();
  });

  it('does not open dropdown on focus when openOnFocus is false', async () => {
    render(<MultiSelect {...defaultProps} openOnFocus={false} />);
    screen.getByRole('textbox').focus();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('hides picked options when hidePickedOptions is true', async () => {
    render(
      <MultiSelect
        {...defaultProps}
        hidePickedOptions
        data={['test-1', 'test-2']}
        defaultValue={['test-1']}
      />
    );
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.queryByRole('option', { name: 'test-1' })).not.toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'test-2' })).toBeVisible();
  });

  it('does not allow removing disabled option', async () => {
    const onRemove = jest.fn();
    render(
      <MultiSelect
        {...defaultProps}
        data={[{ value: 'test-1', label: 'test-1', disabled: true }, 'test-2']}
        defaultValue={['test-1', 'test-2']}
        onRemove={onRemove}
      />
    );

    const pill1 = screen
      .getByText('test-1', { selector: '.mantine-Pill-label' })
      .closest('.mantine-Pill-root');
    expect(pill1?.querySelector('button')).toBeNull();
  });

  it('supports custom hidden input divider', () => {
    render(
      <MultiSelect
        {...defaultProps}
        defaultValue={['test-1', 'test-2']}
        hiddenInputValuesDivider="|"
        name="test"
      />
    );
    expect(document.querySelector('input[name="test"]')).toHaveValue('test-1|test-2');
  });
});
