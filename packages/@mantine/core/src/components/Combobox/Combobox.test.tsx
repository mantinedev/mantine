import { act } from 'react';
import { waitFor } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { TextInput } from '../TextInput';
import { Combobox, ComboboxProps } from './Combobox';
import { ComboboxStore, useCombobox } from './use-combobox/use-combobox';

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
});
