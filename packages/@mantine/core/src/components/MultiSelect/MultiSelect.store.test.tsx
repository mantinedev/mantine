import { useState } from 'react';
import { act } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { render, screen, userEvent } from '@mantine-tests/core';
import { MantineProvider } from '../../core';
import { MultiSelect, MultiSelectProps } from './MultiSelect';
import {
  MultiSelectStore,
  MultiSelectStoreOptions,
  useMultiSelect,
} from './use-multi-select/use-multi-select';

const data = ['React', 'Angular', 'Svelte'];
const comboboxProps = { withinPortal: false, transitionProps: { duration: 0 } };

function getPills(container: HTMLElement) {
  return Array.from(container.querySelectorAll('.mantine-MultiSelect-pill')).map(
    (pill) => pill.textContent
  );
}

function StoreTest({
  onStore,
  storeOptions = { defaultValue: ['React'] },
  ...others
}: Partial<MultiSelectProps> & {
  onStore: (store: MultiSelectStore) => void;
  storeOptions?: MultiSelectStoreOptions;
}) {
  const store = useMultiSelect(storeOptions);
  onStore(store);
  return (
    <MultiSelect
      aria-label="test"
      data={data}
      comboboxProps={comboboxProps}
      {...others}
      store={store}
    />
  );
}

interface CreatableMultiSelectProps extends Omit<
  MultiSelectProps,
  'data' | 'store' | 'renderOption'
> {
  data: string[];
  onCreate: (item: string) => void;
}

function CreatableMultiSelect({
  data: items,
  onCreate,
  value,
  defaultValue,
  onChange,
  ...others
}: CreatableMultiSelectProps) {
  const store = useMultiSelect({
    value,
    defaultValue,
    onChange: (next) => {
      next.filter((item) => !items.includes(item)).forEach(onCreate);
      onChange?.(next);
    },
  });

  const search = store.getSearch().trim();
  const canCreate = search !== '' && !items.includes(search);

  return (
    <MultiSelect
      {...others}
      store={store}
      searchable
      data={canCreate ? [...items, search] : items}
      renderOption={({ option }) =>
        items.includes(option.value) ? option.label : `+ Create ${option.label}`
      }
    />
  );
}

function CreatableTest({
  onChange,
  onCreate,
  addOnCreate = true,
  maxValues,
}: {
  onChange?: (value: string[]) => void;
  onCreate?: (item: string) => void;
  addOnCreate?: boolean;
  maxValues?: number;
}) {
  const [items, setItems] = useState(data);

  return (
    <CreatableMultiSelect
      aria-label="creatable"
      data={items}
      maxValues={maxValues}
      onChange={onChange}
      comboboxProps={comboboxProps}
      onCreate={(item) => {
        onCreate?.(item);
        addOnCreate && setItems((current) => [...current, item]);
      }}
    />
  );
}

function SsrTest() {
  const store = useMultiSelect({ defaultValue: ['Angular', 'Svelte'] });
  return (
    <MultiSelect
      data={[
        { value: 'Angular', label: 'Angular.js' },
        { value: 'Svelte', label: 'Svelte.js' },
      ]}
      store={store}
    />
  );
}

function ComboboxStoreTest({ onStore }: { onStore: (store: MultiSelectStore) => void }) {
  const store = useMultiSelect();
  const other = useMultiSelect({ defaultDropdownOpened: true });
  onStore(store);
  return (
    <MultiSelect
      aria-label="test"
      data={data}
      store={store}
      comboboxProps={{ ...comboboxProps, store: other }}
    />
  );
}

describe('@mantine/core/MultiSelect/store', () => {
  it('takes value from the store and ignores value, defaultValue and onChange props', () => {
    const onChange = jest.fn();
    let store: MultiSelectStore = null as any;
    const { container } = render(
      <StoreTest
        onStore={(s) => (store = s)}
        value={['Svelte']}
        defaultValue={['Angular']}
        onChange={onChange}
      />
    );

    expect(getPills(container)).toEqual(['React']);

    act(() => store.setValue(['React', 'Angular']));
    expect(getPills(container)).toEqual(['React', 'Angular']);
    expect(store.getValue()).toEqual(['React', 'Angular']);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('calls onChange passed to useMultiSelect when an option is picked', async () => {
    const onChange = jest.fn();
    render(<StoreTest onStore={() => {}} storeOptions={{ onChange }} />);

    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'Svelte' }));
    expect(onChange).toHaveBeenLastCalledWith(['Svelte']);
  });

  it('exposes search typed into the input through getSearch', async () => {
    let store: MultiSelectStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} searchable />);

    await userEvent.type(screen.getByRole('combobox'), 'Sve');
    expect(store.getSearch()).toBe('Sve');
  });

  it('clears search set with setSearch on blur', async () => {
    let store: MultiSelectStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} searchable />);

    act(() => store.setSearch('Ang'));
    expect(screen.getByRole('combobox')).toHaveValue('Ang');

    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.tab();
    expect(screen.getByRole('combobox')).toHaveValue('');
    expect(store.getSearch()).toBe('');
  });

  it('shows the label of an option passed to setValue that is not in data', () => {
    let store: MultiSelectStore = null as any;
    const { container } = render(<StoreTest onStore={(s) => (store = s)} />);

    act(() => store.setValue(['React', 'Vue'], [{ value: 'Vue', label: 'Vue.js' }]));
    expect(getPills(container)).toEqual(['React', 'Vue.js']);
    expect(store.getValueOptions()).toEqual([
      { value: 'React', label: 'React' },
      { value: 'Vue', label: 'Vue.js' },
    ]);
  });

  it('retains pill labels after options are removed from data', () => {
    let store: MultiSelectStore = null as any;
    const labeled = [
      { value: 'React', label: 'React.js' },
      { value: 'Angular', label: 'Angular.js' },
    ];
    const { container, rerender } = render(
      <StoreTest onStore={(s) => (store = s)} data={labeled} />
    );
    expect(getPills(container)).toEqual(['React.js']);

    rerender(
      <>
        <StoreTest onStore={(s) => (store = s)} data={[labeled[1]]} />
      </>
    );
    expect(getPills(container)).toEqual(['React.js']);
    expect(store.getValueOptions()).toEqual([labeled[0]]);
  });

  it('removes the last value with Backspace and calls onRemove', async () => {
    const onRemove = jest.fn();
    let store: MultiSelectStore = null as any;
    const { container } = render(
      <StoreTest
        onStore={(s) => (store = s)}
        storeOptions={{ defaultValue: ['React', 'Svelte'] }}
        onRemove={onRemove}
        searchable
      />
    );

    await userEvent.type(screen.getByRole('combobox'), '{Backspace}');
    expect(getPills(container)).toEqual(['React']);
    expect(store.getValue()).toEqual(['React']);
    expect(onRemove).toHaveBeenCalledWith('Svelte');
  });

  it('creates an option from the search in a wrapper component', async () => {
    const onChange = jest.fn();
    const onCreate = jest.fn();
    const { container } = render(<CreatableTest onChange={onChange} onCreate={onCreate} />);

    await userEvent.type(screen.getByRole('combobox'), 'Vue');
    await userEvent.click(screen.getByRole('option', { name: '+ Create Vue' }));

    expect(onCreate).toHaveBeenCalledTimes(1);
    expect(onCreate).toHaveBeenCalledWith('Vue');
    expect(onChange).toHaveBeenLastCalledWith(['Vue']);
    expect(getPills(container)).toEqual(['Vue']);
    expect(screen.getByRole('combobox')).toHaveValue('');
    expect(screen.getByRole('option', { name: 'Vue' })).toBeInTheDocument();
    expect(screen.queryByRole('option', { name: '+ Create Vue' })).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('option', { name: 'React' }));
    expect(onCreate).toHaveBeenCalledTimes(1);
    expect(getPills(container)).toEqual(['Vue', 'React']);
  });

  it('selects an existing option without creating one', async () => {
    const onCreate = jest.fn();
    const { container } = render(<CreatableTest onCreate={onCreate} />);

    await userEvent.type(screen.getByRole('combobox'), 'Sve');
    expect(screen.getByRole('option', { name: '+ Create Sve' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('option', { name: 'Svelte' }));

    expect(onCreate).not.toHaveBeenCalled();
    expect(getPills(container)).toEqual(['Svelte']);
  });

  it('keeps the created value label when the parent does not add it to data', async () => {
    const { container } = render(<CreatableTest addOnCreate={false} />);

    await userEvent.type(screen.getByRole('combobox'), 'Vue');
    await userEvent.click(screen.getByRole('option', { name: '+ Create Vue' }));
    await userEvent.tab();

    expect(getPills(container)).toEqual(['Vue']);
  });

  it('does not create an option when maxValues is reached', async () => {
    const onCreate = jest.fn();
    const { container } = render(<CreatableTest onCreate={onCreate} maxValues={1} />);

    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'React' }));
    await userEvent.type(screen.getByRole('combobox'), 'Vue');
    await userEvent.click(screen.getByRole('option', { name: '+ Create Vue' }));

    expect(onCreate).not.toHaveBeenCalled();
    expect(getPills(container)).toEqual(['React']);
  });

  it('renders pill labels of an external store on the server', () => {
    const container = document.createElement('div');
    container.innerHTML = renderToString(
      <MantineProvider>
        <SsrTest />
      </MantineProvider>
    );

    expect(getPills(container)).toEqual(['Angular.js', 'Svelte.js']);
  });

  it('opens and closes the dropdown with store actions', () => {
    let store: MultiSelectStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} />);

    expect(store.isDropdownOpened()).toBe(false);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    act(() => store.openDropdown());
    expect(store.isDropdownOpened()).toBe(true);
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    act(() => store.closeDropdown());
    expect(store.isDropdownOpened()).toBe(false);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    act(() => store.toggleDropdown());
    expect(store.isDropdownOpened()).toBe(true);
  });

  it('reflects dropdown opened by the user in isDropdownOpened', async () => {
    let store: MultiSelectStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} />);

    await userEvent.click(screen.getByRole('combobox'));
    expect(store.isDropdownOpened()).toBe(true);
  });

  it('calls dropdown callbacks passed to useMultiSelect and ignores the ones passed to MultiSelect', () => {
    const storeOpen = jest.fn();
    const storeClose = jest.fn();
    const propOpen = jest.fn();
    const propClose = jest.fn();
    let store: MultiSelectStore = null as any;
    render(
      <StoreTest
        onStore={(s) => (store = s)}
        storeOptions={{ onDropdownOpen: storeOpen, onDropdownClose: storeClose }}
        onDropdownOpen={propOpen}
        onDropdownClose={propClose}
      />
    );

    act(() => store.openDropdown());
    act(() => store.closeDropdown());

    expect(storeOpen).toHaveBeenCalledTimes(1);
    expect(storeClose).toHaveBeenCalledTimes(1);
    expect(propOpen).not.toHaveBeenCalled();
    expect(propClose).not.toHaveBeenCalled();
  });

  it('keeps MultiSelect dropdown behavior with an external store', () => {
    let store: MultiSelectStore = null as any;
    render(
      <StoreTest onStore={(s) => (store = s)} storeOptions={{}} selectFirstOptionOnDropdownOpen />
    );

    act(() => store.openDropdown());
    expect(store.getSelectedOptionIndex()).toBe(0);
    expect(screen.getByRole('option', { name: 'React' })).toHaveAttribute('data-combobox-selected');

    act(() => store.closeDropdown());
    expect(store.getSelectedOptionIndex()).toBe(-1);
  });

  it('adds the highlighted option with store actions', () => {
    let store: MultiSelectStore = null as any;
    const { container } = render(<StoreTest onStore={(s) => (store = s)} />);

    act(() => store.openDropdown());
    act(() => {
      store.selectOption(2);
    });
    act(() => store.clickSelectedOption());

    expect(store.getValue()).toEqual(['React', 'Svelte']);
    expect(getPills(container)).toEqual(['React', 'Svelte']);
  });

  it('ignores store passed in comboboxProps', () => {
    let store: MultiSelectStore = null as any;
    render(<ComboboxStoreTest onStore={(s) => (store = s)} />);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    act(() => store.openDropdown());
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });
});
