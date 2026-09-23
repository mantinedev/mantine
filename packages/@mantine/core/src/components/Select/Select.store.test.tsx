import { useState } from 'react';
import { act } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { render, screen, userEvent } from '@mantine-tests/core';
import { MantineProvider } from '../../core';
import { Select, SelectProps } from './Select';
import { SelectStore, SelectStoreOptions, useSelect } from './use-select/use-select';

const data = ['React', 'Angular', 'Svelte'];

function StoreTest({
  onStore,
  ...others
}: Partial<SelectProps> & { onStore: (store: SelectStore) => void }) {
  const store = useSelect({ defaultValue: 'React' });
  onStore(store);
  return <Select data={data} {...others} store={store} />;
}

interface CreatableSelectProps extends Omit<SelectProps, 'data' | 'store' | 'renderOption'> {
  data: string[];
  onCreate: (item: string) => void;
}

function CreatableSelect({
  data: items,
  onCreate,
  value,
  defaultValue,
  onChange,
  ...others
}: CreatableSelectProps) {
  const store = useSelect({
    value,
    defaultValue,
    onChange: (item, option) => {
      if (item !== null && !items.includes(item)) {
        onCreate(item);
      }

      onChange?.(item, option);
    },
  });

  const search = store.getSearch().trim();
  const canCreate = search !== '' && !items.includes(search);

  return (
    <Select
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
}: {
  onChange?: (value: string | null) => void;
  onCreate?: (item: string) => void;
  addOnCreate?: boolean;
}) {
  const [items, setItems] = useState(data);

  return (
    <CreatableSelect
      aria-label="creatable"
      data={items}
      onChange={onChange}
      comboboxProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
      onCreate={(item) => {
        onCreate?.(item);
        addOnCreate && setItems((current) => [...current, item]);
      }}
    />
  );
}

function DropdownTest({
  onStore,
  storeOptions,
  ...others
}: Partial<SelectProps> & {
  onStore: (store: SelectStore) => void;
  storeOptions?: SelectStoreOptions;
}) {
  const store = useSelect<string>(storeOptions);
  onStore(store);
  return (
    <Select
      data={data}
      comboboxProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
      {...others}
      store={store}
    />
  );
}

describe('@mantine/core/Select/store', () => {
  it('takes value from the store and ignores value, defaultValue and onChange props', async () => {
    const onChange = jest.fn();
    let store: SelectStore = null as any;
    render(
      <StoreTest
        onStore={(s) => (store = s)}
        value="Svelte"
        defaultValue="Angular"
        onChange={onChange}
      />
    );

    expect(screen.getByRole('combobox')).toHaveValue('React');

    act(() => store.setValue('Angular'));
    expect(screen.getByRole('combobox')).toHaveValue('Angular');
    expect(store.getValue()).toBe('Angular');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('calls onChange passed to useSelect with the resolved option', () => {
    const onChange = jest.fn();
    let store: SelectStore = null as any;

    function Test() {
      store = useSelect({ onChange });
      return <Select data={data} store={store} />;
    }

    render(<Test />);
    act(() => store.setValue('Svelte'));
    expect(onChange).toHaveBeenLastCalledWith('Svelte', { value: 'Svelte', label: 'Svelte' });
  });

  it('exposes search typed into the input through getSearch', async () => {
    let store: SelectStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} searchable />);

    await userEvent.clear(screen.getByRole('combobox'));
    await userEvent.type(screen.getByRole('combobox'), 'Sve');
    expect(store.getSearch()).toBe('Sve');
  });

  it('resets search set with setSearch to the selected option label on blur', async () => {
    let store: SelectStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} searchable />);

    act(() => store.setSearch('Ang'));
    expect(screen.getByRole('combobox')).toHaveValue('Ang');

    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.tab();
    expect(screen.getByRole('combobox')).toHaveValue('React');
  });

  it('keeps the label of an option passed to setValue that is not in data', async () => {
    let store: SelectStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} searchable />);

    act(() => store.setValue('Vue', { value: 'Vue', label: 'Vue.js' }));
    expect(store.getValueOption()).toEqual({ value: 'Vue', label: 'Vue.js' });
    expect(screen.getByRole('combobox')).toHaveValue('Vue.js');

    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.tab();
    expect(screen.getByRole('combobox')).toHaveValue('Vue.js');
  });

  it('retains the selected option after it is removed from data', () => {
    let store: SelectStore = null as any;
    const { rerender } = render(<StoreTest onStore={(s) => (store = s)} />);
    expect(store.getValueOption()).toEqual({ value: 'React', label: 'React' });

    rerender(
      <>
        <StoreTest onStore={(s) => (store = s)} data={['Angular']} />
      </>
    );
    expect(store.getValueOption()).toEqual({ value: 'React', label: 'React' });
    expect(screen.getByRole('combobox')).toHaveValue('React');
  });

  it('creates an option from the search in a wrapper component', async () => {
    const onChange = jest.fn();
    const onCreate = jest.fn();
    render(<CreatableTest onChange={onChange} onCreate={onCreate} />);

    await userEvent.type(screen.getByRole('combobox'), 'Vue');
    await userEvent.click(screen.getByRole('option', { name: '+ Create Vue' }));

    expect(onCreate).toHaveBeenCalledWith('Vue');
    expect(onChange).toHaveBeenLastCalledWith('Vue', { value: 'Vue', label: 'Vue' });
    expect(screen.getByRole('combobox')).toHaveValue('Vue');

    await userEvent.tab();
    expect(screen.getByRole('combobox')).toHaveValue('Vue');

    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('option', { name: 'Vue' })).toBeInTheDocument();
    expect(screen.queryByRole('option', { name: '+ Create Vue' })).not.toBeInTheDocument();
  });

  it('selects an existing option without creating one', async () => {
    const onCreate = jest.fn();
    render(<CreatableTest onCreate={onCreate} />);

    await userEvent.type(screen.getByRole('combobox'), 'Sve');
    expect(screen.getByRole('option', { name: '+ Create Sve' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('option', { name: 'Svelte' }));

    expect(onCreate).not.toHaveBeenCalled();
    expect(screen.getByRole('combobox')).toHaveValue('Svelte');
  });

  it('keeps the created value label when the parent does not add it to data', async () => {
    render(<CreatableTest addOnCreate={false} />);

    await userEvent.type(screen.getByRole('combobox'), 'Vue');
    await userEvent.click(screen.getByRole('option', { name: '+ Create Vue' }));
    await userEvent.tab();

    expect(screen.getByRole('combobox')).toHaveValue('Vue');
  });

  it('renders the selected option label of an external store on the server', () => {
    function Test() {
      const store = useSelect({ defaultValue: 'Angular' });
      return <Select data={data} store={store} />;
    }

    const container = document.createElement('div');
    container.innerHTML = renderToString(
      <MantineProvider>
        <Test />
      </MantineProvider>
    );

    expect(container.querySelector('input:not([type="hidden"])')).toHaveValue('Angular');
  });

  it('opens and closes the dropdown with store actions', () => {
    let store: SelectStore = null as any;
    render(<DropdownTest onStore={(s) => (store = s)} />);

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
    let store: SelectStore = null as any;
    render(<DropdownTest onStore={(s) => (store = s)} />);

    await userEvent.click(screen.getByRole('combobox'));
    expect(store.isDropdownOpened()).toBe(true);
  });

  it('calls dropdown callbacks passed to useSelect and ignores the ones passed to Select', () => {
    const storeOpen = jest.fn();
    const storeClose = jest.fn();
    const propOpen = jest.fn();
    const propClose = jest.fn();
    let store: SelectStore = null as any;
    render(
      <DropdownTest
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

  it('keeps Select dropdown behavior with an external store', () => {
    let store: SelectStore = null as any;
    render(
      <DropdownTest
        onStore={(s) => (store = s)}
        storeOptions={{ defaultValue: null }}
        selectFirstOptionOnDropdownOpen
      />
    );

    act(() => store.openDropdown());
    expect(store.getSelectedOptionIndex()).toBe(0);
    expect(screen.getByRole('option', { name: 'React' })).toHaveAttribute('data-combobox-selected');
  });

  it('selects the highlighted option with store actions', () => {
    let store: SelectStore = null as any;
    render(<DropdownTest onStore={(s) => (store = s)} storeOptions={{ defaultValue: null }} />);

    act(() => store.openDropdown());
    act(() => {
      store.selectOption(2);
    });
    act(() => store.clickSelectedOption());

    expect(store.getValue()).toBe('Svelte');
    expect(screen.getByRole('combobox')).toHaveValue('Svelte');
  });

  it('exposes the current list id through getListId', () => {
    let store: SelectStore = null as any;
    render(<DropdownTest onStore={(s) => (store = s)} />);

    act(() => store.openDropdown());
    const listbox = screen.getByRole('listbox');
    expect(store.getListId()).toBe(listbox.id);
  });

  it('ignores store passed in comboboxProps', () => {
    let store: SelectStore = null as any;

    function Test() {
      store = useSelect();
      const other = useSelect({ defaultDropdownOpened: true });
      return (
        <Select
          data={data}
          store={store}
          comboboxProps={{ store: other, withinPortal: false, transitionProps: { duration: 0 } }}
        />
      );
    }

    render(<Test />);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    act(() => store.openDropdown());
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('discards typed search that was not created on blur', async () => {
    const onCreate = jest.fn();
    render(<CreatableTest onCreate={onCreate} />);

    await userEvent.type(screen.getByRole('combobox'), 'Vue');
    await userEvent.tab();

    expect(onCreate).not.toHaveBeenCalled();
    expect(screen.getByRole('combobox')).toHaveValue('');
  });
});
