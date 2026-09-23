import { useState } from 'react';
import { act } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { TagsInput, TagsInputProps } from './TagsInput';
import {
  TagsInputStore,
  TagsInputStoreOptions,
  useTagsInput,
} from './use-tags-input/use-tags-input';

const comboboxProps = { withinPortal: false, transitionProps: { duration: 0 } };
const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function StoreTest({
  onStore,
  storeOptions,
  ...others
}: Partial<TagsInputProps> & {
  onStore: (store: TagsInputStore) => void;
  storeOptions?: TagsInputStoreOptions;
}) {
  const store = useTagsInput(storeOptions);
  onStore(store);
  return <TagsInput aria-label="tags" comboboxProps={comboboxProps} {...others} store={store} />;
}

interface EmailsInputProps extends Omit<TagsInputProps, 'store' | 'error'> {
  onInvalidEmail?: (email: string) => void;
}

function EmailsInput({
  value,
  defaultValue,
  onChange,
  onInvalidEmail,
  ...others
}: EmailsInputProps) {
  const [error, setError] = useState<string | null>(null);
  const store = useTagsInput({
    value,
    defaultValue,
    onChange,
    onSearchChange: () => setError(null),
    isValidTag: (tag) => EMAIL_REGEXP.test(tag),
    onInvalidTag: (tag) => {
      onInvalidEmail?.(tag);
      setError(`${tag} is not a valid email`);
    },
  });

  return <TagsInput {...others} store={store} error={error} />;
}

function EmailsTest({
  onChange,
  onInvalidEmail,
}: {
  onChange?: (value: string[]) => void;
  onInvalidEmail?: (email: string) => void;
}) {
  return (
    <EmailsInput
      aria-label="emails"
      onChange={onChange}
      onInvalidEmail={onInvalidEmail}
      comboboxProps={comboboxProps}
    />
  );
}

function ComboboxStoreTest({ onStore }: { onStore: (store: TagsInputStore) => void }) {
  const store = useTagsInput();
  const other = useTagsInput({ defaultDropdownOpened: true });
  onStore(store);
  return (
    <TagsInput
      aria-label="tags"
      data={['React']}
      store={store}
      comboboxProps={{ ...comboboxProps, store: other }}
    />
  );
}

function getPills(container: HTMLElement) {
  return Array.from(container.querySelectorAll('.mantine-TagsInput-pill')).map(
    (pill) => pill.textContent
  );
}

describe('@mantine/core/TagsInput/store', () => {
  it('takes value from the store and ignores value, defaultValue and onChange props', () => {
    const onChange = jest.fn();
    let store: TagsInputStore = null as any;
    const { container } = render(
      <StoreTest
        onStore={(s) => (store = s)}
        storeOptions={{ defaultValue: ['React'] }}
        value={['Vue']}
        defaultValue={['Angular']}
        onChange={onChange}
      />
    );

    expect(getPills(container)).toEqual(['React']);

    act(() => store.setValue(['React', 'Svelte']));
    expect(getPills(container)).toEqual(['React', 'Svelte']);
    expect(store.getValue()).toEqual(['React', 'Svelte']);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('calls onChange passed to useTagsInput when the user adds and removes tags', async () => {
    const onChange = jest.fn();
    let store: TagsInputStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} storeOptions={{ onChange }} />);

    await userEvent.type(screen.getByRole('combobox'), 'React{enter}');
    expect(onChange).toHaveBeenLastCalledWith(['React']);
    expect(store.getValue()).toEqual(['React']);

    await userEvent.type(screen.getByRole('combobox'), '{backspace}');
    expect(onChange).toHaveBeenLastCalledWith([]);
  });

  it('exposes typed search through getSearch and displays search set with setSearch', async () => {
    let store: TagsInputStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} />);

    await userEvent.type(screen.getByRole('combobox'), 'Rea');
    expect(store.getSearch()).toBe('Rea');

    act(() => store.setSearch('Vue'));
    expect(screen.getByRole('combobox')).toHaveValue('Vue');
  });

  it('uses submission rules from the store and ignores the ones passed to TagsInput', async () => {
    const storeMaxTags = jest.fn();
    const propMaxTags = jest.fn();
    let store: TagsInputStore = null as any;
    const { container } = render(
      <StoreTest
        onStore={(s) => (store = s)}
        storeOptions={{ maxTags: 1, onMaxTags: storeMaxTags, splitChars: ['|'] }}
        maxTags={5}
        onMaxTags={propMaxTags}
        splitChars={[',']}
      />
    );

    await userEvent.type(screen.getByRole('combobox'), 'React,');
    expect(getPills(container)).toEqual([]);
    expect(store.getSearch()).toBe('React,');

    await userEvent.clear(screen.getByRole('combobox'));
    await userEvent.type(screen.getByRole('combobox'), 'React|Vue{enter}');
    expect(getPills(container)).toEqual(['React']);
    expect(storeMaxTags).toHaveBeenCalledWith('Vue');
    expect(propMaxTags).not.toHaveBeenCalled();
  });

  it('adds a tag with store addTag', () => {
    let store: TagsInputStore = null as any;
    const { container } = render(<StoreTest onStore={(s) => (store = s)} />);

    act(() => {
      store.addTag('React');
    });
    expect(getPills(container)).toEqual(['React']);
  });

  it('opens and closes the dropdown with store actions', () => {
    let store: TagsInputStore = null as any;
    render(<StoreTest onStore={(s) => (store = s)} data={['React', 'Vue']} />);

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    act(() => store.openDropdown());
    expect(store.isDropdownOpened()).toBe(true);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(store.getListId()).toBe(screen.getByRole('listbox').id);

    act(() => store.closeDropdown());
    expect(store.isDropdownOpened()).toBe(false);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('keeps TagsInput dropdown behavior with an external store', () => {
    let store: TagsInputStore = null as any;
    render(
      <StoreTest
        onStore={(s) => (store = s)}
        data={['React', 'Vue']}
        selectFirstOptionOnDropdownOpen
      />
    );

    act(() => store.openDropdown());
    expect(store.getSelectedOptionIndex()).toBe(0);
    expect(screen.getByRole('option', { name: 'React' })).toHaveAttribute('data-combobox-selected');
  });

  it('selects the highlighted option with store actions', () => {
    let store: TagsInputStore = null as any;
    const { container } = render(
      <StoreTest onStore={(s) => (store = s)} data={['React', 'Vue', 'Svelte']} />
    );

    act(() => store.openDropdown());
    act(() => {
      store.selectOption(1);
    });
    act(() => store.clickSelectedOption());

    expect(store.getValue()).toEqual(['Vue']);
    expect(getPills(container)).toEqual(['Vue']);
  });

  it('calls dropdown callbacks passed to useTagsInput and ignores the ones passed to TagsInput', () => {
    const storeOpen = jest.fn();
    const propOpen = jest.fn();
    let store: TagsInputStore = null as any;
    render(
      <StoreTest
        onStore={(s) => (store = s)}
        storeOptions={{ onDropdownOpen: storeOpen }}
        onDropdownOpen={propOpen}
      />
    );

    act(() => store.openDropdown());
    expect(storeOpen).toHaveBeenCalledTimes(1);
    expect(propOpen).not.toHaveBeenCalled();
  });

  it('ignores store passed in comboboxProps', () => {
    let store: TagsInputStore = null as any;
    render(<ComboboxStoreTest onStore={(s) => (store = s)} />);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    act(() => store.openDropdown());
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('rejects an invalid email on Enter and keeps it in the input', async () => {
    const onChange = jest.fn();
    const onInvalidEmail = jest.fn();
    const { container } = render(
      <EmailsTest onChange={onChange} onInvalidEmail={onInvalidEmail} />
    );

    await userEvent.type(screen.getByRole('combobox'), 'john{enter}');

    expect(onInvalidEmail).toHaveBeenCalledWith('john');
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole('combobox')).toHaveValue('john');
    expect(screen.getByText('john is not a valid email')).toBeInTheDocument();

    await userEvent.type(screen.getByRole('combobox'), '@example.com{enter}');
    expect(onChange).toHaveBeenLastCalledWith(['john@example.com']);
    expect(getPills(container)).toEqual(['john@example.com']);
    expect(screen.getByRole('combobox')).toHaveValue('');
    expect(screen.queryByText('john is not a valid email')).not.toBeInTheDocument();
  });

  it('puts an invalid option picked from the dropdown into the input', async () => {
    const onInvalidEmail = jest.fn();
    const { container } = render(
      <EmailsInput
        aria-label="emails"
        data={['john', 'john@example.com']}
        onInvalidEmail={onInvalidEmail}
        comboboxProps={comboboxProps}
      />
    );

    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'john' }));

    expect(onInvalidEmail).toHaveBeenCalledWith('john');
    expect(getPills(container)).toEqual([]);
    expect(screen.getByRole('combobox')).toHaveValue('john');
    expect(screen.getByText('john is not a valid email')).toBeInTheDocument();
  });

  it('adds valid pasted emails and keeps invalid ones in the input', async () => {
    const { container } = render(<EmailsTest />);

    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.paste('a@b.co, nope, c@d.co');

    expect(getPills(container)).toEqual(['a@b.co', 'c@d.co']);
    expect(screen.getByRole('combobox')).toHaveValue('nope');
    expect(screen.getByText('nope is not a valid email')).toBeInTheDocument();
  });

  it('keeps an invalid email in the input on blur', async () => {
    const { container } = render(<EmailsTest />);

    await userEvent.type(screen.getByRole('combobox'), 'nope');
    await userEvent.tab();

    expect(getPills(container)).toEqual([]);
    expect(screen.getByRole('combobox')).toHaveValue('nope');
    expect(screen.getByText('nope is not a valid email')).toBeInTheDocument();
  });

  it('adds a valid email typed before a split character', async () => {
    const { container } = render(<EmailsTest />);

    await userEvent.type(screen.getByRole('combobox'), 'a@b.co,');
    expect(getPills(container)).toEqual(['a@b.co']);
    expect(screen.getByRole('combobox')).toHaveValue('');
  });
});
