import { act, useEffect, useState } from 'react';
import { waitFor } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { TextInput } from '../TextInput';
import { Combobox, ComboboxProps } from './Combobox';
import { ComboboxStore, useCombobox } from './use-combobox/use-combobox';
import { useVirtualizedCombobox } from './use-combobox/use-virtualized-combobox';

function AxeTest() {
  const store = useCombobox({
    defaultOpened: true,
  });

  return (
    <div style={{ padding: 40 }}>
      <Combobox store={store} withinPortal={false}>
        <Combobox.Target>
          <TextInput
            label="Test input"
            onFocus={() => store.openDropdown()}
            onBlur={() => store.closeDropdown()}
          />
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Options aria-label="test">
            <Combobox.Option value="react">React</Combobox.Option>
            <Combobox.Option value="vue">Vue</Combobox.Option>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}

interface TestComboboxProps {
  targetType?: 'input' | 'button';
  readOnly?: boolean;
  onOptionSubmit?: ComboboxProps['onOptionSubmit'];
  storeRef?: { current: ComboboxStore | null };
}

function TestCombobox({ targetType, readOnly, onOptionSubmit, storeRef }: TestComboboxProps) {
  const store = useCombobox();

  if (storeRef) {
    storeRef.current = store;
  }

  return (
    <Combobox
      store={store}
      withinPortal={false}
      transitionProps={{ duration: 0 }}
      readOnly={readOnly}
      onOptionSubmit={onOptionSubmit}
    >
      <Combobox.Target targetType={targetType}>
        {targetType === 'button' ? (
          <button type="button">Pick</button>
        ) : (
          <input aria-label="Pick" />
        )}
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options aria-label="Frameworks">
          <Combobox.Option value="react">React</Combobox.Option>
          <Combobox.Option value="vue" disabled>
            Vue
          </Combobox.Option>
          <Combobox.Option value="angular">Angular</Combobox.Option>
          <Combobox.Option value="svelte">Svelte</Combobox.Option>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

const virtualizedData = ['Alpha', 'Bravo', 'Charlie', 'Data', 'Echo', 'Foxtrot', 'Golf'];

interface TestVirtualizedComboboxProps {
  activeOptionIndex?: number;
  renderedFrom?: number;
  onSelectedOptionIndexChange?: (index: number) => void;
}

function TestVirtualizedCombobox({
  activeOptionIndex,
  renderedFrom = 0,
  onSelectedOptionIndexChange,
}: TestVirtualizedComboboxProps) {
  const [opened, setOpened] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);

  const store = useVirtualizedCombobox({
    opened,
    onOpenedChange: setOpened,
    totalOptionsCount: virtualizedData.length,
    getOptionId: (index) => `virtualized-option-${index}`,
    selectedOptionIndex,
    activeOptionIndex,
    setSelectedOptionIndex: (index) => {
      setSelectedOptionIndex(index);
      onSelectedOptionIndexChange?.(index);
    },
    onSelectedOptionSubmit: () => {},
  });

  return (
    <Combobox store={store} withinPortal={false} transitionProps={{ duration: 0 }}>
      <Combobox.Target targetType="button">
        <button type="button">Pick</button>
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options aria-label="Virtualized">
          {virtualizedData.slice(renderedFrom).map((item, offset) => {
            const index = renderedFrom + offset;
            return (
              <Combobox.Option
                key={item}
                value={item}
                id={`virtualized-option-${index}`}
                selected={index === selectedOptionIndex}
              >
                {item}
              </Combobox.Option>
            );
          })}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots'];

function TestFilteredCombobox() {
  const store = useCombobox();
  const [search, setSearch] = useState('');
  const options = groceries.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase().trim())
  );

  useEffect(() => {
    store.selectFirstOption();
  }, [search]);

  return (
    <Combobox store={store} withinPortal={false} transitionProps={{ duration: 0 }}>
      <Combobox.Target>
        <input
          aria-label="Search"
          value={search}
          onChange={(event) => {
            setSearch(event.currentTarget.value);
            store.openDropdown();
          }}
        />
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options aria-label="Groceries">
          {options.length === 0 ? (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          ) : (
            options.map((item) => (
              <Combobox.Option value={item} key={item}>
                {item}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

function TestRemovingCombobox({ storeRef }: { storeRef?: { current: ComboboxStore | null } }) {
  const store = useCombobox();
  const [value, setValue] = useState<string[]>([]);

  if (storeRef) {
    storeRef.current = store;
  }

  return (
    <Combobox
      store={store}
      withinPortal={false}
      transitionProps={{ duration: 0 }}
      onOptionSubmit={(val) => setValue((current) => [...current, val])}
    >
      <Combobox.Target>
        <input aria-label="Groceries" />
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options aria-label="Groceries">
          {groceries
            .filter((item) => !value.includes(item))
            .map((item) => (
              <Combobox.Option value={item} key={item}>
                {item}
              </Combobox.Option>
            ))}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

function DeferredOptions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setMounted(true), 10);
    return () => window.clearTimeout(timeout);
  }, []);

  return mounted ? (
    <Combobox.Options aria-label="Deferred">
      <Combobox.Option value="react">React</Combobox.Option>
    </Combobox.Options>
  ) : null;
}

function TestDeferredListCombobox() {
  const store = useCombobox();

  return (
    <Combobox store={store} withinPortal={false} transitionProps={{ duration: 0 }}>
      <Combobox.Target>
        <input aria-label="Deferred" onFocus={() => store.openDropdown()} />
      </Combobox.Target>
      <Combobox.Dropdown>
        <DeferredOptions />
      </Combobox.Dropdown>
    </Combobox>
  );
}

const getHighlighted = () =>
  screen.getAllByRole('option').find((option) => option.hasAttribute('data-combobox-selected'));

describe('@mantine/core/Combobox', () => {
  tests.axe([<AxeTest key="1" />]);

  it('sets role="combobox" and aria-expanded on the target by default', async () => {
    render(<TestCombobox />);
    const target = screen.getByRole('combobox');
    expect(target).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(target);
    await userEvent.keyboard('{ArrowDown}');
    expect(target).toHaveAttribute('aria-expanded', 'true');
  });

  it('sets aria-autocomplete="list" only on input targets', () => {
    const { unmount } = render(<TestCombobox />);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-autocomplete', 'list');
    unmount();

    render(<TestCombobox targetType="button" />);
    expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-autocomplete');
  });

  it('opens dropdown and moves highlight with ArrowDown and ArrowUp, skipping disabled options', async () => {
    render(<TestCombobox />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.keyboard('{ArrowDown}');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(getHighlighted()).toHaveTextContent('React');

    await userEvent.keyboard('{ArrowDown}');
    expect(getHighlighted()).toHaveTextContent('Angular');

    await userEvent.keyboard('{ArrowUp}');
    expect(getHighlighted()).toHaveTextContent('React');
  });

  it('keeps aria-activedescendant in sync with the highlighted option', async () => {
    const storeRef: { current: ComboboxStore | null } = { current: null };
    render(<TestCombobox storeRef={storeRef} />);
    const target = screen.getByRole('combobox');
    await userEvent.click(target);
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    expect(getHighlighted()).toHaveTextContent('Angular');
    expect(target).toHaveAttribute('aria-activedescendant', getHighlighted()!.id);

    act(() => {
      storeRef.current!.selectOption(3);
    });
    expect(getHighlighted()).toHaveTextContent('Svelte');
    expect(target).toHaveAttribute('aria-activedescendant', getHighlighted()!.id);

    act(() => {
      storeRef.current!.resetSelectedOption();
    });
    expect(target).not.toHaveAttribute('aria-activedescendant');
  });

  it('submits highlighted option with Enter', async () => {
    const spy = jest.fn();
    render(<TestCombobox onOptionSubmit={spy} />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.keyboard('{ArrowDown}{Enter}');
    expect(spy).toHaveBeenCalledWith('react', expect.anything());
  });

  it('closes dropdown with Escape', async () => {
    render(<TestCombobox />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.keyboard('{ArrowDown}');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('toggles dropdown with Space and opens it with Enter on button target', async () => {
    render(<TestCombobox targetType="button" />);
    screen.getByRole('combobox').focus();
    await userEvent.keyboard(' ');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    await userEvent.keyboard(' ');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    await userEvent.keyboard('{Enter}');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('moves highlight to first and last option with Home and End on button target', async () => {
    render(<TestCombobox targetType="button" />);
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard('{End}');
    expect(getHighlighted()).toHaveTextContent('Svelte');
    await userEvent.keyboard('{Home}');
    expect(getHighlighted()).toHaveTextContent('React');
  });

  it('highlights option matching typed characters on button target', async () => {
    render(<TestCombobox targetType="button" />);
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard('s');
    expect(getHighlighted()).toHaveTextContent('Svelte');
    await userEvent.keyboard('{Enter}');
  });

  it('opens dropdown and highlights matching option when typing on closed button target', async () => {
    render(<TestCombobox targetType="button" />);
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('a');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    await waitFor(() => expect(getHighlighted()).toHaveTextContent('Angular'));
  });

  it('skips disabled options in typeahead', async () => {
    render(<TestCombobox targetType="button" />);
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard('v');
    expect(getHighlighted()).toBeUndefined();
  });

  it('does not respond to keyboard when readOnly is set', async () => {
    render(<TestCombobox readOnly />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.keyboard('{ArrowDown}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('highlights the first option when a closed virtualized combobox is opened with ArrowDown without an active option', async () => {
    const spy = jest.fn();
    render(<TestVirtualizedCombobox activeOptionIndex={-1} onSelectedOptionIndexChange={spy} />);
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{ArrowDown}');
    expect(spy).toHaveBeenLastCalledWith(0);
    expect(getHighlighted()).toHaveTextContent('Alpha');
  });

  it('highlights the active option when a closed virtualized combobox is opened with ArrowDown', async () => {
    const spy = jest.fn();
    render(<TestVirtualizedCombobox activeOptionIndex={2} onSelectedOptionIndexChange={spy} />);
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{ArrowDown}');
    expect(spy).toHaveBeenLastCalledWith(2);
  });

  it('keeps the highlighted option of a virtualized combobox when its row unmounts', async () => {
    const spy = jest.fn();
    const { rerender } = render(<TestVirtualizedCombobox onSelectedOptionIndexChange={spy} />);
    const target = screen.getByRole('combobox');
    target.focus();
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    expect(spy).toHaveBeenLastCalledWith(1);
    expect(target).toHaveAttribute('aria-activedescendant', 'virtualized-option-1');

    rerender(<TestVirtualizedCombobox renderedFrom={3} onSelectedOptionIndexChange={spy} />);
    await act(() => new Promise((resolve) => setTimeout(resolve, 10)));

    expect(spy).toHaveBeenLastCalledWith(1);
    expect(target).toHaveAttribute('aria-activedescendant', 'virtualized-option-1');
  });

  it('does not select a wrong option with typeahead in a virtualized combobox', async () => {
    const spy = jest.fn();
    render(<TestVirtualizedCombobox renderedFrom={3} onSelectedOptionIndexChange={spy} />);
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{Enter}');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    await userEvent.keyboard('f');
    expect(spy).not.toHaveBeenCalled();
    expect(getHighlighted()).toBeUndefined();
  });

  it('matches typeahead against option labels that start with an emoji', async () => {
    render(
      <Combobox withinPortal={false} transitionProps={{ duration: 0 }}>
        <Combobox.Target targetType="button">
          <button type="button">Pick</button>
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Options aria-label="Groceries">
            {groceries.map((item) => (
              <Combobox.Option value={item} key={item}>
                {item}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    );

    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard('b');
    expect(getHighlighted()).toHaveTextContent('Bananas');
  });

  it('clears aria-activedescendant when the options list becomes empty', async () => {
    render(<TestFilteredCombobox />);
    const target = screen.getByRole('combobox');
    await userEvent.type(target, 'c');
    expect(target).toHaveAttribute('aria-activedescendant', getHighlighted()!.id);

    await userEvent.type(target, 'x');
    expect(screen.queryAllByRole('option')).toHaveLength(0);
    expect(target).not.toHaveAttribute('aria-activedescendant');
  });

  it('resets the highlighted option when it is removed from the list', async () => {
    render(<TestRemovingCombobox />);
    const target = screen.getByRole('combobox');
    await userEvent.click(target);
    await userEvent.keyboard('{ArrowDown}');
    expect(getHighlighted()).toHaveTextContent('Apples');

    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(target).not.toHaveAttribute('aria-activedescendant'));

    await userEvent.keyboard('{ArrowDown}');
    expect(getHighlighted()).toHaveTextContent('Bananas');
    expect(target).toHaveAttribute('aria-activedescendant', getHighlighted()!.id);
  });

  it('clears a stale highlighted option id when selected index is updated to the active option', async () => {
    const storeRef: { current: ComboboxStore | null } = { current: null };
    render(<TestRemovingCombobox storeRef={storeRef} />);
    const target = screen.getByRole('combobox');
    await userEvent.click(target);
    await userEvent.keyboard('{ArrowDown}');

    act(() => {
      storeRef.current!.clickSelectedOption();
    });

    act(() => {
      storeRef.current!.updateSelectedOptionIndex('active');
    });

    await waitFor(() => expect(target).not.toHaveAttribute('aria-activedescendant'));
  });

  it('points aria-controls at the listbox when the list mounts after the target', async () => {
    render(<TestDeferredListCombobox />);
    const target = screen.getByRole('combobox');
    await userEvent.click(target);

    const listbox = await screen.findByRole('listbox');
    await waitFor(() => expect(target).toHaveAttribute('aria-controls', listbox.id));
    expect(target).toHaveAttribute('aria-expanded', 'true');
  });
});
