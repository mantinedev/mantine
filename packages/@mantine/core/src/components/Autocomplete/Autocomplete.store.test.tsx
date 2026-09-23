import { useState } from 'react';
import { act } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { render, screen, userEvent } from '@mantine-tests/core';
import { MantineProvider } from '../../core';
import { Button } from '../Button';
import { Autocomplete, AutocompleteProps } from './Autocomplete';
import {
  AutocompleteStore,
  AutocompleteStoreOptions,
  useAutocomplete,
} from './use-autocomplete/use-autocomplete';

const data = ['React', 'Angular', 'Svelte', 'Vue'];

const comboboxProps = { withinPortal: false, transitionProps: { duration: 0 } };

function StoreTest({
  onStore,
  storeOptions,
  ...others
}: Partial<AutocompleteProps> & {
  onStore: (store: AutocompleteStore) => void;
  storeOptions?: AutocompleteStoreOptions;
}) {
  const store = useAutocomplete(storeOptions);
  onStore(store);
  return (
    <Autocomplete
      aria-label="autocomplete"
      data={data}
      comboboxProps={comboboxProps}
      {...others}
      store={store}
    />
  );
}

function TabCompleteAutocomplete({
  value,
  defaultValue,
  onChange,
  onKeyDown,
  ...others
}: Omit<AutocompleteProps, 'store'>) {
  const store = useAutocomplete({ value, defaultValue, onChange });

  return (
    <Autocomplete
      {...others}
      store={store}
      onKeyDown={(event) => {
        if (event.key === 'Tab' && !event.shiftKey && store.isDropdownOpened()) {
          if (store.getSelectedOptionIndex() === -1) {
            store.selectFirstOption();
          }

          if (store.getSelectedOptionIndex() !== -1) {
            event.preventDefault();
            store.clickSelectedOption();
          }
        }

        onKeyDown?.(event);
      }}
    />
  );
}

function TabCompleteTest({ onChange }: { onChange?: (value: string) => void }) {
  return (
    <>
      <TabCompleteAutocomplete
        aria-label="tab-complete"
        data={data}
        onChange={onChange}
        comboboxProps={comboboxProps}
      />
      <button type="button">next</button>
    </>
  );
}

function ControlledTabCompleteTest() {
  const [value, setValue] = useState('');

  return (
    <>
      <TabCompleteAutocomplete
        aria-label="tab-complete"
        data={data}
        value={value}
        onChange={setValue}
        comboboxProps={comboboxProps}
      />
      <div data-testid="controlled-value">{value}</div>
    </>
  );
}

function ComboboxPropsStoreTest({ onStore }: { onStore: (store: AutocompleteStore) => void }) {
  const store = useAutocomplete();
  const other = useAutocomplete({ defaultDropdownOpened: true });
  onStore(store);

  return (
    <Autocomplete
      aria-label="autocomplete"
      data={data}
      store={store}
      comboboxProps={{ ...comboboxProps, store: other }}
    />
  );
}

function ExternalButtonTest({ onStore }: { onStore: (store: AutocompleteStore) => void }) {
  const store = useAutocomplete();
  onStore(store);

  return (
    <>
      <Autocomplete
        aria-label="autocomplete"
        data={data}
        store={store}
        comboboxProps={comboboxProps}
      />
      <Button
        onClick={() => {
          store.setValue('S');
          store.openDropdown();
        }}
      >
        Suggest
      </Button>
    </>
  );
}

function SsrTest() {
  const store = useAutocomplete({ defaultValue: 'Angular' });
  return <Autocomplete data={data} store={store} />;
}

describe('@mantine/core/Autocomplete/store', () => {
  it('takes value from the store and ignores value, defaultValue and onChange props', () => {
    const onChange = jest.fn();
    let store: AutocompleteStore = null as any;
    render(
      <StoreTest
        onStore={(s) => (store = s)}
        storeOptions={{ defaultValue: 'React' }}
        value="Svelte"
        defaultValue="Angular"
        onChange={onChange}
      />
    );

    expect(screen.getByRole('combobox')).toHaveValue('React');

    act(() => store.setValue('Vue'));
    expect(screen.getByRole('combobox')).toHaveValue('Vue');
    expect(store.getValue()).toBe('Vue');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('calls onChange passed to useAutocomplete when the user types', async () => {
    const onChange = jest.fn();
    let store: AutocompleteStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} storeOptions={{ onChange }} />);

    await userEvent.type(screen.getByRole('combobox'), 'Sv');
    expect(onChange).toHaveBeenLastCalledWith('Sv');
    expect(store.getValue()).toBe('Sv');
  });

  it('sets the value from an option click', async () => {
    let store: AutocompleteStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} />);

    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'Svelte' }));

    expect(store.getValue()).toBe('Svelte');
    expect(store.isDropdownOpened()).toBe(false);
  });

  it('opens and closes the dropdown with store actions', () => {
    let store: AutocompleteStore = null as any;
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
    let store: AutocompleteStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} />);

    await userEvent.click(screen.getByRole('combobox'));
    expect(store.isDropdownOpened()).toBe(true);
  });

  it('filters options by a value set from outside the input', async () => {
    let store: AutocompleteStore = null as any;
    render(<ExternalButtonTest onStore={(s) => (store = s)} />);

    await userEvent.click(screen.getByRole('button', { name: 'Suggest' }));

    expect(screen.getByRole('combobox')).toHaveValue('S');
    expect(store.isDropdownOpened()).toBe(true);
    expect(screen.getByRole('option', { name: 'Svelte' })).toBeInTheDocument();
    expect(screen.queryByRole('option', { name: 'Angular' })).not.toBeInTheDocument();
  });

  it('calls dropdown callbacks passed to useAutocomplete and ignores the ones passed to Autocomplete', () => {
    const storeOpen = jest.fn();
    const storeClose = jest.fn();
    const propOpen = jest.fn();
    const propClose = jest.fn();
    let store: AutocompleteStore = null as any;
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

  it('keeps Autocomplete dropdown behavior with an external store', () => {
    let store: AutocompleteStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} selectFirstOptionOnDropdownOpen />);

    act(() => store.openDropdown());
    expect(store.getSelectedOptionIndex()).toBe(0);
    expect(screen.getByRole('option', { name: 'React' })).toHaveAttribute('data-combobox-selected');
  });

  it('resets the highlighted option after the dropdown closes with an external store', () => {
    jest.useFakeTimers();
    let store: AutocompleteStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} />);

    try {
      act(() => store.openDropdown());
      act(() => {
        store.selectOption(1);
      });
      expect(store.getSelectedOptionIndex()).toBe(1);

      act(() => store.closeDropdown());
      act(() => {
        jest.runAllTimers();
      });
      expect(store.getSelectedOptionIndex()).toBe(-1);
    } finally {
      jest.useRealTimers();
    }
  });

  it('selects the highlighted option with store actions', () => {
    let store: AutocompleteStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} />);

    act(() => store.openDropdown());
    act(() => {
      store.selectOption(2);
    });
    act(() => store.clickSelectedOption());

    expect(store.getValue()).toBe('Svelte');
    expect(screen.getByRole('combobox')).toHaveValue('Svelte');
  });

  it('exposes the current list id through getListId', () => {
    let store: AutocompleteStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} />);

    act(() => store.openDropdown());
    expect(store.getListId()).toBe(screen.getByRole('listbox').id);
  });

  it('ignores store passed in comboboxProps', () => {
    let store: AutocompleteStore = null as any;
    render(<ComboboxPropsStoreTest onStore={(s) => (store = s)} />);

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    act(() => store.openDropdown());
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('completes the first matching option on Tab and keeps focus in a wrapper component', async () => {
    const onChange = jest.fn();
    render(<TabCompleteTest onChange={onChange} />);

    await userEvent.type(screen.getByRole('combobox'), 'sv');
    await userEvent.tab();

    expect(screen.getByRole('combobox')).toHaveValue('Svelte');
    expect(screen.getByRole('combobox')).toHaveFocus();
    expect(onChange).toHaveBeenLastCalledWith('Svelte');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('completes the option highlighted with arrow keys on Tab', async () => {
    render(<TabCompleteTest />);

    await userEvent.type(screen.getByRole('combobox'), 'a');
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await userEvent.tab();

    expect(screen.getByRole('combobox')).toHaveValue('Angular');
  });

  it('moves focus on Tab when no option matches', async () => {
    render(<TabCompleteTest />);

    await userEvent.type(screen.getByRole('combobox'), 'xyz');
    await userEvent.tab();

    expect(screen.getByRole('combobox')).toHaveValue('xyz');
    expect(screen.getByRole('button', { name: 'next' })).toHaveFocus();
  });

  it('completes on Tab in a controlled wrapper', async () => {
    render(<ControlledTabCompleteTest />);

    await userEvent.type(screen.getByRole('combobox'), 'vu');
    await userEvent.tab();

    expect(screen.getByRole('combobox')).toHaveValue('Vue');
    expect(screen.getByTestId('controlled-value')).toHaveTextContent('Vue');
  });

  it('renders the value of an external store on the server', () => {
    const container = document.createElement('div');
    container.innerHTML = renderToString(
      <MantineProvider>
        <SsrTest />
      </MantineProvider>
    );

    expect(container.querySelector('input')).toHaveValue('Angular');
  });
});
