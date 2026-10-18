import { useState } from 'react';
import { act, createEvent, fireEvent, waitFor } from '@testing-library/react';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  renderWithAct,
  screen,
  tests,
} from '@mantine-tests/core';
import { Modal } from '../Modal';
import { Mention } from './Mention';
import { Mentions, MentionsProps, MentionsStylesNames } from './Mentions';

const users = [
  { id: 'walter', display: 'Walter White' },
  { id: 'jesse', display: 'Jesse Pinkman' },
];

const defaultProps: MentionsProps = {
  ...inputDefaultProps,
  defaultValue: 'Hi @[Walter White](walter)',
  children: <Mention trigger="@" data={users} withTrigger />,
};

function getTextarea(container: HTMLElement) {
  return container.querySelector('textarea') as HTMLTextAreaElement;
}

function setCaret(textarea: HTMLTextAreaElement, start: number, end = start) {
  textarea.setSelectionRange(start, end);
  fireEvent.select(textarea);
}

function createClipboard(initial: Record<string, string> = {}) {
  const store: Record<string, string> = { ...initial };
  return {
    store,
    getData: (type: string) => store[type] ?? '',
    setData: (type: string, value: string) => {
      store[type] = value;
    },
  };
}

function getHighlighter(container: HTMLElement) {
  return container.querySelector('.mantine-Mentions-highlighter') as HTMLElement;
}

function getGhost(container: HTMLElement) {
  return container.querySelector('.mantine-Mentions-inlineSuggestion');
}

function typeInto(textarea: HTMLTextAreaElement, value: string, caret = value.length) {
  fireEvent.change(textarea, { target: { value, selectionStart: caret, selectionEnd: caret } });
}

describe('@mantine/core/Mentions', () => {
  afterEach(async () => {
    await act(async () => {});
  });

  tests.axe([
    <Mentions aria-label="test-label" key="1">
      <Mention trigger="@" data={users} />
    </Mentions>,
    <Mentions label="test-label" key="2">
      <Mention trigger="@" data={users} />
    </Mentions>,
    <Mentions label="test-label" error="test-error" key="3">
      <Mention trigger="@" data={users} />
    </Mentions>,
  ]);

  tests.itSupportsSystemProps<MentionsProps, MentionsStylesNames>({
    component: Mentions,
    props: defaultProps,
    displayName: '@mantine/core/Mentions',
    stylesApiSelectors: [...inputStylesApiSelectors, 'field', 'highlighter', 'highlight'],
  });

  tests.itSupportsInputProps<MentionsProps>({
    component: Mentions,
    props: defaultProps,
    selector: 'textarea',
  });

  it('renders the label and the plain text of the markup value', async () => {
    const { container } = await renderWithAct(<Mentions {...defaultProps} />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
    expect(getTextarea(container).value).toBe('Hi @Walter White');
    expect(screen.getByText('@Walter White')).toBeInTheDocument();
  });

  it('hides the trigger in the displayed text by default', async () => {
    const { container } = await renderWithAct(
      <Mentions defaultValue="Hi @[Walter White](walter)">
        <Mention trigger="@" data={users} />
      </Mentions>
    );
    expect(getTextarea(container).value).toBe('Hi Walter White');
    expect(screen.getByText('Walter White')).toBeInTheDocument();
  });

  it('renders custom mention content with renderMention', async () => {
    const { container } = await renderWithAct(
      <Mentions
        defaultValue="Hi @[Walter White](walter)"
        renderMention={({ id, display }) => (
          <a data-testid="custom-mention" href={`/u/${id}`}>
            {display}
          </a>
        )}
      >
        <Mention trigger="@" data={users} />
      </Mentions>
    );
    const custom = container.querySelector('[data-testid="custom-mention"]');
    expect(custom).toHaveTextContent('Walter White');
    expect(custom).toHaveAttribute('href', '/u/walter');
    expect(container.querySelector('[data-interactive]')).toBeInTheDocument();
  });

  it('renders a disabled control', async () => {
    const { container } = await renderWithAct(<Mentions {...defaultProps} disabled />);
    expect(getTextarea(container)).toBeDisabled();
  });

  it('renders a read-only control in static mode', async () => {
    const { container } = await renderWithAct(<Mentions {...defaultProps} mode="static" />);
    expect(getTextarea(container)).toHaveAttribute('readonly');
  });

  it('keeps highlighter keys unique and mirrors the textarea value', async () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { container } = await renderWithAct(
      <Mentions defaultValue="a @[X](x) b @[Y](y) c">
        <Mention trigger="@" data={users} />
      </Mentions>
    );
    const textarea = getTextarea(container);
    typeInto(textarea, 'za X b Y c', 1);
    const keyErrors = spy.mock.calls.filter((call) => String(call[0]).includes('same key'));
    spy.mockRestore();
    expect(keyErrors).toHaveLength(0);
    expect(getHighlighter(container).textContent).toBe(textarea.value);
  });

  describe('line breaks', () => {
    it('normalizes CRLF line breaks so mentions survive the first edit', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue={'a\r\n@[Walter White](walter)'} onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      expect(textarea.value).toBe('a\nWalter White');
      setCaret(textarea, 14);
      typeInto(textarea, 'a\nWalter Whitex', 15);
      const payload = onChange.mock.calls.at(-1)?.[0];
      expect(payload.value).toBe('a\n@[Walter White](walter)x');
      expect(payload.mentions).toHaveLength(1);
    });

    it('normalizes CRLF in a controlled value', async () => {
      const { container } = await renderWithAct(
        <Mentions value={'a\r\n@[Walter White](walter)'} onChange={() => {}}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      expect(getTextarea(container).value).toBe('a\nWalter White');
      expect(getHighlighter(container).textContent).toBe('a\nWalter White');
    });

    it('replaces newlines of the default value with spaces in single-line mode', async () => {
      const { container } = await renderWithAct(
        <Mentions singleLine defaultValue={'a\r\nb\n@[Walter White](walter)'} name="f">
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const hidden = container.querySelector('input[type="hidden"]') as HTMLInputElement;
      expect(hidden.value).toBe('a b @[Walter White](walter)');
      expect(getHighlighter(container).textContent).toBe('a b Walter White');
    });
  });

  describe('props routing and Styles API', () => {
    it('forwards native form props to the underlying control', async () => {
      const { container } = await renderWithAct(
        <Mentions {...defaultProps} maxLength={200} autoComplete="off" />
      );
      const textarea = getTextarea(container);
      expect(textarea).toHaveAttribute('maxlength', '200');
      expect(textarea).toHaveAttribute('autocomplete', 'off');
    });

    it('routes non-wrapper props to the control', async () => {
      const { container } = await renderWithAct(
        <Mentions
          {...defaultProps}
          data-testid="mentions-control"
          aria-describedby="custom-description"
          tabIndex={0}
        />
      );
      const textarea = getTextarea(container);
      expect(textarea).toHaveAttribute('data-testid', 'mentions-control');
      expect(textarea).toHaveAttribute('aria-describedby', 'custom-description');
      expect(textarea).toHaveAttribute('tabindex', '0');
    });

    it('renders the loader for loading and does not forward it to the control', async () => {
      const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const { container } = await renderWithAct(<Mentions {...defaultProps} loading />);
      const errors = spy.mock.calls.length;
      spy.mockRestore();
      expect(container.querySelector('.mantine-Loader-root')).toBeInTheDocument();
      expect(getTextarea(container)).not.toHaveAttribute('loading');
      expect(getTextarea(container)).not.toHaveAttribute('loadingposition');
      expect(errors).toBe(0);
    });

    it('applies the field selector to the control and the input selector to the wrapper', async () => {
      const { container } = await renderWithAct(
        <Mentions {...defaultProps} classNames={{ input: 'w', field: 'f' }} />
      );
      const textarea = getTextarea(container);
      expect(textarea).toHaveClass('f');
      expect(textarea).not.toHaveClass('w');
      const wrapper = container.querySelector('.w') as HTMLElement;
      expect(wrapper).toBeInTheDocument();
      expect(wrapper.tagName).toBe('DIV');
      expect(wrapper).not.toHaveClass('f');
    });

    it('applies vars to the highlight selector', async () => {
      const { container } = await renderWithAct(
        <Mentions
          {...defaultProps}
          vars={() => ({ highlight: { '--mentions-highlight-color': 'red' } }) as any}
        />
      );
      const highlight = container.querySelector('.mantine-Mentions-highlight') as HTMLElement;
      expect(highlight.style.getPropertyValue('--mentions-highlight-color')).toBe('red');
    });

    it('sets the multiline input padding on the wrapper', async () => {
      const { container } = await renderWithAct(<Mentions {...defaultProps} />);
      const wrapper = container.querySelector('.mantine-Mentions-wrapper') as HTMLElement;
      expect(wrapper.style.getPropertyValue('--input-padding-y')).not.toBe('');
    });
  });

  describe('name and hidden input', () => {
    it('submits the markup value through a hidden input when name is set', async () => {
      const { container } = await renderWithAct(
        <Mentions {...defaultProps} name="comment" form="f1" />
      );
      const hidden = container.querySelector('input[type="hidden"]') as HTMLInputElement;
      expect(hidden).toHaveAttribute('name', 'comment');
      expect(hidden).toHaveAttribute('form', 'f1');
      expect(hidden.value).toBe('Hi @[Walter White](walter)');
      expect(getTextarea(container)).not.toHaveAttribute('name');
    });

    it('disables the hidden name input when the field is disabled', async () => {
      const { container } = await renderWithAct(
        <Mentions {...defaultProps} name="comment" disabled />
      );
      expect(container.querySelector('input[type="hidden"]')).toBeDisabled();
    });
  });

  describe('suggestions', () => {
    it('opens the dropdown with filtered suggestions and inserts a mention', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="" onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );

      const textarea = getTextarea(container);
      typeInto(textarea, '@jes');

      const option = await screen.findByText('Jesse Pinkman');
      expect(screen.queryByText('Walter White')).not.toBeInTheDocument();

      fireEvent.click(option);

      await waitFor(() => {
        const last = onChange.mock.calls.at(-1)?.[0];
        expect(last?.value).toBe('@[Jesse Pinkman](jesse)');
        expect(last?.reason.type).toBe('mention-add');
        expect(last?.mentionId).toBe('jesse');
      });
    });

    it('allows whitespace in the query with allowSpaceInQuery', async () => {
      const { container } = await renderWithAct(
        <Mentions defaultValue="">
          <Mention
            trigger="@"
            data={[{ id: 'walter', display: 'Walter White' }]}
            allowSpaceInQuery
          />
        </Mentions>
      );
      typeInto(getTextarea(container), '@Walter Wh');
      expect(await screen.findByText('Walter White')).toBeInTheDocument();
    });

    it('matches accents-insensitively with ignoreAccents', async () => {
      const { container } = await renderWithAct(
        <Mentions defaultValue="">
          <Mention trigger="@" data={[{ id: 'jose', display: 'José' }]} ignoreAccents />
        </Mentions>
      );
      typeInto(getTextarea(container), '@jose');
      expect(await screen.findByText('José')).toBeInTheDocument();
    });

    it('does not open the dropdown in static mode', async () => {
      const { container } = await renderWithAct(
        <Mentions defaultValue="" mode="static">
          <Mention trigger="@" data={users} />
        </Mentions>
      );

      typeInto(getTextarea(container), '@jes');
      await new Promise((resolve) => setTimeout(resolve, 20));
      expect(screen.queryByText('Jesse Pinkman')).not.toBeInTheDocument();
    });

    it('keeps the highlighted option when the parent re-renders', async () => {
      function Wrapper() {
        const [count, setCount] = useState(0);
        return (
          <>
            <button type="button" onClick={() => setCount((c) => c + 1)}>
              rerender {count}
            </button>
            <Mentions defaultValue="">
              <Mention trigger="@" data={[...users]} />
            </Mentions>
          </>
        );
      }

      const { container } = await renderWithAct(<Wrapper />);
      const textarea = getTextarea(container);
      typeInto(textarea, '@');
      await screen.findByText('Jesse Pinkman');
      await waitFor(() => expect(textarea).toHaveAttribute('aria-activedescendant'));
      const first = textarea.getAttribute('aria-activedescendant');
      fireEvent.keyDown(textarea, { key: 'ArrowDown' });
      const second = textarea.getAttribute('aria-activedescendant');
      expect(second).not.toBe(first);
      fireEvent.click(screen.getByRole('button', { name: /rerender/ }));
      await act(async () => {});
      expect(textarea).toHaveAttribute('aria-activedescendant', second!);
    });

    it('highlights the first option again after a same-query async refetch', async () => {
      function Wrapper() {
        const [count, setCount] = useState(0);
        return (
          <>
            <button type="button" onClick={() => setCount((c) => c + 1)}>
              rerender {count}
            </button>
            <Mentions defaultValue="">
              <Mention trigger="@" data={async () => users.map((user) => ({ ...user }))} />
            </Mentions>
          </>
        );
      }

      const { container } = await renderWithAct(<Wrapper />);
      const textarea = getTextarea(container);
      typeInto(textarea, '@');
      await waitFor(() =>
        expect(container.ownerDocument.querySelector('[data-combobox-selected]')).not.toBeNull()
      );

      fireEvent.click(screen.getByRole('button', { name: /rerender/ }));
      await act(async () => {});
      await waitFor(() => {
        const selected = container.ownerDocument.querySelector('[data-combobox-selected]');
        expect(selected).not.toBeNull();
        expect(textarea).toHaveAttribute('aria-activedescendant', selected!.id);
      });
    });

    it('closes the dropdown after an option is picked across an earlier trigger', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="" onChange={onChange} nothingFoundMessage="Nothing found">
          <Mention trigger="@" data={users} allowSpaceInQuery />
        </Mentions>
      );
      const textarea = getTextarea(container);
      typeInto(textarea, '@zz @jes');
      fireEvent.click(await screen.findByText('Jesse Pinkman'));
      await act(async () => {});
      expect(onChange.mock.calls.at(-1)?.[0].value).toBe('@zz @[Jesse Pinkman](jesse)');
      expect(textarea.value).toBe('@zz Jesse Pinkman');
      expect(screen.queryByText('Nothing found')).not.toBeInTheDocument();
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

      await act(async () => {
        document.dispatchEvent(new Event('selectionchange'));
      });
      fireEvent.select(textarea);
      expect(screen.queryByText('Nothing found')).not.toBeInTheDocument();
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('resets the highlight when the trigger is swapped between sources with the same ids', async () => {
      const people = [
        { id: '1', display: 'Alpha' },
        { id: '2', display: 'Beta' },
      ];
      const tags = [
        { id: '1', display: 'Gamma' },
        { id: '2', display: 'Delta' },
      ];
      const { container } = await renderWithAct(
        <Mentions defaultValue="">
          <Mention trigger="@" data={people} />
          <Mention trigger="#" data={tags} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      typeInto(textarea, '@');
      await screen.findByText('Alpha');
      await waitFor(() => expect(textarea).toHaveAttribute('aria-activedescendant'));
      fireEvent.keyDown(textarea, { key: 'ArrowDown' });
      expect(screen.getByRole('option', { name: 'Beta' })).toHaveAttribute(
        'data-combobox-selected'
      );

      setCaret(textarea, 0, 1);
      typeInto(textarea, '#');
      await screen.findByText('Gamma');
      await waitFor(() =>
        expect(screen.getByRole('option', { name: 'Gamma' })).toHaveAttribute(
          'data-combobox-selected'
        )
      );
      expect(screen.getByRole('option', { name: 'Delta' })).not.toHaveAttribute(
        'data-combobox-selected'
      );
    });

    it('does not accept an option with Shift+Tab', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="" onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      typeInto(textarea, '@');
      await screen.findByText('Jesse Pinkman');
      expect(fireEvent.keyDown(textarea, { key: 'Tab', code: 'Tab', shiftKey: true })).toBe(true);
      expect(onChange.mock.calls.some((call) => call[0].reason.type === 'mention-add')).toBe(false);
    });

    it('does not append a second space when one follows the insertion point', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue=" there" onChange={onChange}>
          <Mention trigger="@" data={users} appendSpaceOnAdd />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 0);
      typeInto(textarea, '@wal there', 4);
      fireEvent.click(await screen.findByText('Walter White'));
      expect(onChange.mock.calls.at(-1)?.[0].value).toBe('@[Walter White](walter) there');
      expect(textarea.selectionStart).toBe(13);
    });

    it('supports loadingMessage and errorMessage', async () => {
      let reject: (error: unknown) => void = () => {};
      const data = jest.fn(
        () =>
          new Promise<any[]>((_resolve, r) => {
            reject = r;
          })
      );
      const { container } = await renderWithAct(
        <Mentions defaultValue="" loadingMessage="Searching" errorMessage="Oops">
          <Mention trigger="@" data={data} />
        </Mentions>
      );
      typeInto(getTextarea(container), '@w');
      expect(await screen.findByText('Searching')).toBeInTheDocument();
      await waitFor(() => expect(data).toHaveBeenCalled());
      await act(async () => reject(new Error('fail')));
      expect(await screen.findByText('Oops')).toBeInTheDocument();
    });
  });

  describe('change payload and reasons', () => {
    it('fires onChange with the rich payload on plain-text input', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="@[Walter White](walter)" onChange={onChange}>
          <Mention trigger="@" data={users} withTrigger />
        </Mentions>
      );

      typeInto(getTextarea(container), '@Walter White!', 14);

      const payload = onChange.mock.calls.at(-1)?.[0];
      expect(payload.value).toBe('@[Walter White](walter)!');
      expect(payload.plainTextValue).toBe('@Walter White!');
      expect(payload.idValue).toBe('@walter!');
      expect(payload.mentions).toHaveLength(1);
      expect(payload.mentions[0].id).toBe('walter');
    });

    it('removes the whole mention when part of it is deleted', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="Hi @[Walter White](walter)" onChange={onChange}>
          <Mention trigger="@" data={users} withTrigger />
        </Mentions>
      );

      typeInto(getTextarea(container), 'Hi @Walter Whit', 15);

      const payload = onChange.mock.calls.at(-1)?.[0];
      expect(payload.value).toBe('Hi ');
      expect(payload.reason.type).toBe('mention-remove');
    });

    it('emits undo and redo change reasons', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="Hi" onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 2);
      typeInto(textarea, 'Hi!', 3);
      fireEvent.keyDown(textarea, { key: 'z', ctrlKey: true });
      expect(onChange.mock.calls.at(-1)?.[0].reason.type).toBe('undo');
      fireEvent.keyDown(textarea, { key: 'y', ctrlKey: true });
      expect(onChange.mock.calls.at(-1)?.[0].reason.type).toBe('redo');
    });

    it('classifies the change reason from the native input type', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="Hi" onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 2);
      fireEvent.input(textarea, {
        target: { value: 'Hi there', selectionStart: 8, selectionEnd: 8 },
        inputType: 'insertFromPaste',
      });
      expect(onChange.mock.calls.at(-1)?.[0].reason.type).toBe('paste');
      setCaret(textarea, 2, 8);
      fireEvent.input(textarea, {
        target: { value: 'Hi', selectionStart: 2, selectionEnd: 2 },
        inputType: 'deleteByCut',
      });
      expect(onChange.mock.calls.at(-1)?.[0].reason.type).toBe('cut');
      setCaret(textarea, 2);
      fireEvent.input(textarea, {
        target: { value: 'Hi!', selectionStart: 3, selectionEnd: 3 },
        inputType: 'insertFromDrop',
      });
      expect(onChange.mock.calls.at(-1)?.[0].reason.type).toBe('insert-text');
    });

    it('classifies native history input types as undo and redo', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="Hi" onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 2);
      fireEvent.input(textarea, {
        target: { value: 'H', selectionStart: 1, selectionEnd: 1 },
        inputType: 'historyUndo',
      });
      expect(onChange.mock.calls.at(-1)?.[0].reason.type).toBe('undo');
      fireEvent.input(textarea, {
        target: { value: 'Hi', selectionStart: 2, selectionEnd: 2 },
        inputType: 'historyRedo',
      });
      expect(onChange.mock.calls.at(-1)?.[0].reason.type).toBe('redo');
    });
  });

  describe('undo history', () => {
    it('restores the value with Ctrl+Z / Ctrl+Shift+Z after a mention is removed', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="Hi @[Walter White](walter)" onChange={onChange}>
          <Mention trigger="@" data={users} withTrigger />
        </Mentions>
      );
      const textarea = getTextarea(container);

      typeInto(textarea, 'Hi @Walter Whit', 15);
      expect(onChange.mock.calls.at(-1)?.[0].value).toBe('Hi ');

      fireEvent.keyDown(textarea, { key: 'z', ctrlKey: true });
      expect(onChange.mock.calls.at(-1)?.[0].value).toBe('Hi @[Walter White](walter)');

      fireEvent.keyDown(textarea, { key: 'z', ctrlKey: true, shiftKey: true });
      expect(onChange.mock.calls.at(-1)?.[0].value).toBe('Hi ');
    });

    it('records external controlled value changes in the undo history', async () => {
      const onChange = jest.fn();
      const nowSpy = jest.spyOn(Date, 'now').mockReturnValue(1000);

      function Wrapper() {
        const [value, setValue] = useState('');
        return (
          <>
            <button type="button" onClick={() => setValue('Reply to @[Walter White](walter) ')}>
              set
            </button>
            <Mentions
              value={value}
              onChange={(payload) => {
                onChange(payload);
                setValue(payload.value);
              }}
            >
              <Mention trigger="@" data={users} />
            </Mentions>
          </>
        );
      }

      const { container } = await renderWithAct(<Wrapper />);
      const textarea = getTextarea(container);
      typeInto(textarea, 'hello', 5);
      fireEvent.click(screen.getByText('set'));
      nowSpy.mockReturnValue(1500);
      setCaret(textarea, 22);
      typeInto(textarea, 'Reply to Walter White x', 23);
      expect(onChange.mock.calls.at(-1)?.[0].value).toBe('Reply to @[Walter White](walter) x');
      fireEvent.keyDown(textarea, { key: 'z', ctrlKey: true });
      expect(onChange.mock.calls.at(-1)?.[0].value).toBe('Reply to @[Walter White](walter) ');
      nowSpy.mockRestore();
    });

    it('restores the caret to the position of the undone edit', async () => {
      const { container } = await renderWithAct(
        <Mentions defaultValue="Hi @[Walter White](walter)">
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 8);
      typeInto(textarea, 'Hi WalteXr White', 9);
      fireEvent.keyDown(textarea, { key: 'z', ctrlKey: true });
      expect(textarea.value).toBe('Hi Walter White');
      expect(textarea.selectionStart).toBe(8);
    });

    it('keeps the re-detected query open across repeated undo key presses', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="Hi?" onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      textarea.focus();
      setCaret(textarea, 3);
      typeInto(textarea, 'Hi? @je', 7);
      await screen.findByText('Jesse Pinkman');
      await waitFor(() => expect(textarea).toHaveAttribute('aria-activedescendant'));
      fireEvent.keyDown(textarea, { key: 'Enter' });
      await act(async () => {});
      expect(textarea.value).toBe('Hi? Jesse Pinkman');
      typeInto(textarea, 'Hi? Jesse Pinkman ok', 20);
      await act(async () => {});

      fireEvent.keyDown(textarea, { key: 'z', metaKey: true });
      fireEvent.keyDown(textarea, { key: 'z', metaKey: true });
      await act(async () => {});

      expect(onChange.mock.calls.at(-1)?.[0].value).toBe('Hi? @je');
      expect(textarea.selectionStart).toBe(7);
      expect(await screen.findByText('Jesse Pinkman')).toBeInTheDocument();

      fireEvent.select(textarea);
      await act(async () => {});
      expect(screen.getByText('Jesse Pinkman')).toBeInTheDocument();
    });
  });

  describe('selection', () => {
    it('calls onSelectionChange with the caret after a mention is inserted', async () => {
      const onSelectionChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="" onSelectionChange={onSelectionChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      typeInto(getTextarea(container), '@jes');
      fireEvent.click(await screen.findByText('Jesse Pinkman'));
      expect(onSelectionChange.mock.calls.at(-1)?.[0]).toEqual({ start: 13, end: 13 });
    });

    it('reads a programmatic selection before handling a key press', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="Hi @[Walter White](walter) aa" onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 16);
      textarea.setSelectionRange(17, 17);
      fireEvent.keyDown(textarea, { key: 'a' });
      typeInto(textarea, 'Hi Walter White aaa', 18);
      expect(onChange.mock.calls.at(-1)?.[0].value).toBe('Hi @[Walter White](walter) aaa');
      expect(textarea.selectionStart).toBe(18);
    });
  });

  describe('accessibility', () => {
    it('sets aria-invalid on the control when error is set', async () => {
      const { container } = await renderWithAct(<Mentions {...defaultProps} error="Required" />);
      expect(getTextarea(container)).toHaveAttribute('aria-invalid', 'true');
    });

    it('hides the highlighter from assistive technologies', async () => {
      const { container } = await renderWithAct(<Mentions {...defaultProps} />);
      expect(getHighlighter(container)).toHaveAttribute('aria-hidden', 'true');
    });

    it('labels the suggestions listbox by default', async () => {
      const { container } = await renderWithAct(
        <Mentions defaultValue="">
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      typeInto(getTextarea(container), '@');
      expect(await screen.findByRole('listbox')).toHaveAttribute('aria-label', 'Suggestions');
    });

    it('removes aria-activedescendant when there are no options', async () => {
      const { container } = await renderWithAct(
        <Mentions defaultValue="" nothingFoundMessage="No users found">
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      typeInto(textarea, '@w');
      await waitFor(() => expect(textarea).toHaveAttribute('aria-activedescendant'));
      typeInto(textarea, '@wzz');
      expect(await screen.findByText('No users found')).toBeInTheDocument();
      expect(textarea).not.toHaveAttribute('aria-activedescendant');
    });

    it('does not set aria-activedescendant when an async source resolves to no items', async () => {
      const { container } = await renderWithAct(
        <Mentions defaultValue="" nothingFoundMessage="No users found">
          <Mention trigger="@" data={async () => []} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      typeInto(textarea, '@w');
      expect(await screen.findByText('No users found')).toBeInTheDocument();
      expect(textarea).not.toHaveAttribute('aria-activedescendant');
    });

    it('exposes autocomplete accessibility attributes', async () => {
      const { container } = await renderWithAct(<Mentions {...defaultProps} />);
      const textarea = getTextarea(container);
      expect(textarea).toHaveAttribute('aria-autocomplete', 'list');
      expect(textarea).toHaveAttribute('aria-haspopup', 'listbox');
    });

    it('uses the combobox role for single-line inputs', async () => {
      const { container } = await renderWithAct(<Mentions {...defaultProps} singleLine />);
      expect(container.querySelector('input')).toHaveAttribute('role', 'combobox');
    });

    it('does not advertise a popup when no suggestions can open', async () => {
      const { container, rerender } = await renderWithAct(
        <Mentions {...defaultProps} mode="static" />
      );
      expect(getTextarea(container)).not.toHaveAttribute('aria-haspopup');
      expect(getTextarea(container)).not.toHaveAttribute('aria-autocomplete');
      rerender(<Mentions {...defaultProps} disabled />);
      expect(getTextarea(container)).not.toHaveAttribute('aria-haspopup');
      expect(getTextarea(container)).not.toHaveAttribute('aria-autocomplete');
    });
  });

  describe('IME composition', () => {
    it('does not move the selection with ArrowDown while composing', async () => {
      const { container } = await renderWithAct(
        <Mentions defaultValue="">
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      typeInto(textarea, '@');
      await screen.findByText('Jesse Pinkman');
      const notPrevented = fireEvent.keyDown(textarea, {
        key: 'ArrowDown',
        code: 'ArrowDown',
        isComposing: true,
      });
      expect(notPrevented).toBe(true);
    });

    it('does not insert an option on Enter with keyCode 229', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="" onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      typeInto(textarea, '@');
      await screen.findByText('Jesse Pinkman');
      const notPrevented = fireEvent.keyDown(textarea, {
        key: 'Enter',
        code: 'Enter',
        keyCode: 229,
      });
      expect(notPrevented).toBe(true);
      expect(onChange.mock.calls.some((call) => call[0].reason.type === 'mention-add')).toBe(false);
    });

    it('does not accept the inline suggestion on Enter while composing', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="" onChange={onChange} suggestionsDisplay="inline">
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      typeInto(textarea, '@wa');
      expect(getGhost(container)).toBeInTheDocument();
      const notPrevented = fireEvent.keyDown(textarea, {
        key: 'Enter',
        code: 'Enter',
        isComposing: true,
      });
      expect(notPrevented).toBe(true);
      expect(onChange.mock.calls.some((call) => call[0].reason.type === 'mention-add')).toBe(false);
    });
  });

  describe('inline suggestions', () => {
    const renderInline = (props: Partial<MentionsProps> = {}, data: any = users) =>
      renderWithAct(
        <Mentions defaultValue="" suggestionsDisplay="inline" {...props}>
          <Mention trigger="@" data={data} />
        </Mentions>
      );

    it('renders the ghost only when the top suggestion starts with the query', async () => {
      const { container } = await renderInline();
      const textarea = getTextarea(container);
      typeInto(textarea, '@wa');
      expect(getGhost(container)).toHaveTextContent('lter White');
      typeInto(textarea, '@hit');
      expect(getGhost(container)).not.toBeInTheDocument();
    });

    it('does not render the ghost while the query is loading', async () => {
      let resolve: (items: any[]) => void = () => {};
      const data = jest.fn(
        () =>
          new Promise<any[]>((r) => {
            resolve = r;
          })
      );
      const { container } = await renderInline({}, data);
      const textarea = getTextarea(container);
      typeInto(textarea, '@w');
      await waitFor(() => expect(data).toHaveBeenCalledTimes(1));
      await act(async () => resolve([users[0]]));
      expect(getGhost(container)).toBeInTheDocument();
      typeInto(textarea, '@wa');
      expect(getGhost(container)).not.toBeInTheDocument();
      await waitFor(() => expect(data).toHaveBeenCalledTimes(2));
      await act(async () => resolve([users[0]]));
      expect(getGhost(container)).toBeInTheDocument();
    });

    it('dismisses the ghost with Escape until the query changes', async () => {
      const { container } = await renderInline();
      const textarea = getTextarea(container);
      typeInto(textarea, '@wa');
      expect(getGhost(container)).toBeInTheDocument();
      fireEvent.keyDown(textarea, { key: 'Escape' });
      expect(getGhost(container)).not.toBeInTheDocument();
      expect(fireEvent.keyDown(textarea, { key: 'Enter', code: 'Enter' })).toBe(true);
      typeInto(textarea, '@wal');
      expect(getGhost(container)).toBeInTheDocument();
    });

    it('clears the query on blur', async () => {
      const { container } = await renderInline();
      const textarea = getTextarea(container);
      typeInto(textarea, '@wa');
      expect(getGhost(container)).toBeInTheDocument();
      fireEvent.blur(textarea);
      expect(getGhost(container)).not.toBeInTheDocument();
    });

    it('renders the ghost only when the caret is at the end of its line', async () => {
      const onChange = jest.fn();
      const { container } = await renderInline({ onChange, defaultValue: ' more' });
      const textarea = getTextarea(container);
      setCaret(textarea, 0);
      typeInto(textarea, '@wa more', 3);
      expect(getGhost(container)).not.toBeInTheDocument();
      expect(fireEvent.keyDown(textarea, { key: 'Enter', code: 'Enter' })).toBe(true);
      expect(fireEvent.keyDown(textarea, { key: 'Tab', code: 'Tab' })).toBe(true);
      expect(onChange.mock.calls.some((call) => call[0].reason.type === 'mention-add')).toBe(false);
    });

    it('renders the ghost when the text after the caret starts on the next line', async () => {
      const { container } = await renderInline({ defaultValue: '\nmore' });
      const textarea = getTextarea(container);
      setCaret(textarea, 0);
      typeInto(textarea, '@wa\nmore', 3);
      expect(getGhost(container)).toBeInTheDocument();
    });

    it('accepts the ghost with Enter', async () => {
      const onChange = jest.fn();
      const { container } = await renderInline({ onChange });
      const textarea = getTextarea(container);
      typeInto(textarea, '@wa');
      expect(fireEvent.keyDown(textarea, { key: 'Enter', code: 'Enter' })).toBe(false);
      expect(onChange.mock.calls.at(-1)?.[0].value).toBe('@[Walter White](walter)');
    });

    it('accepts the ghost with ArrowRight only at the end of the text', async () => {
      const onChange = jest.fn();
      const { container } = await renderInline({ onChange, defaultValue: '\nmore' });
      const textarea = getTextarea(container);
      setCaret(textarea, 0);
      typeInto(textarea, '@wa\nmore', 3);
      expect(getGhost(container)).toBeInTheDocument();
      expect(fireEvent.keyDown(textarea, { key: 'ArrowRight' })).toBe(true);
      expect(fireEvent.keyDown(textarea, { key: 'Enter', code: 'Enter' })).toBe(false);
      expect(onChange.mock.calls.at(-1)?.[0].value).toBe('@[Walter White](walter)\nmore');
    });
  });

  describe('clipboard', () => {
    const value = 'Hi @[Walter White](walter) there';

    it('copies plain text and the markup slice', async () => {
      const { container } = await renderWithAct(
        <Mentions defaultValue={value}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 0, 15);
      const clipboardData = createClipboard();
      const event = createEvent.copy(textarea, { clipboardData });
      fireEvent(textarea, event);
      expect(event.defaultPrevented).toBe(true);
      expect(clipboardData.store['text/plain']).toBe('Hi Walter White');
      expect(clipboardData.store['application/x-mantine-mentions']).toBe(
        'Hi @[Walter White](walter)'
      );
    });

    it('cuts the selection and emits the cut reason', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue={value} onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 2, 15);
      const clipboardData = createClipboard();
      fireEvent(textarea, createEvent.cut(textarea, { clipboardData }));
      expect(clipboardData.store['application/x-mantine-mentions']).toBe(
        ' @[Walter White](walter)'
      );
      const payload = onChange.mock.calls.at(-1)?.[0];
      expect(payload.value).toBe('Hi there');
      expect(payload.reason.type).toBe('cut');
      expect(textarea.selectionStart).toBe(2);
    });

    it('pastes markup from the custom clipboard type', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="Hey " onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 4);
      const clipboardData = createClipboard({
        'text/plain': 'Jesse Pinkman',
        'application/x-mantine-mentions': '@[Jesse Pinkman](jesse)',
      });
      const event = createEvent.paste(textarea, { clipboardData });
      fireEvent(textarea, event);
      expect(event.defaultPrevented).toBe(true);
      const payload = onChange.mock.calls.at(-1)?.[0];
      expect(payload.value).toBe('Hey @[Jesse Pinkman](jesse)');
      expect(payload.reason.type).toBe('paste');
      expect(payload.mentions).toHaveLength(1);
      expect(textarea.selectionStart).toBe(17);
    });

    it('falls back to the default paste without the custom type', async () => {
      const { container } = await renderWithAct(
        <Mentions defaultValue="Hey ">
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 4);
      const event = createEvent.paste(textarea, {
        clipboardData: createClipboard({ 'text/plain': 'plain' }),
      });
      fireEvent(textarea, event);
      expect(event.defaultPrevented).toBe(false);
    });

    it('respects user handlers that prevent default', async () => {
      const onCopy = jest.fn((event: React.ClipboardEvent) => event.preventDefault());
      const { container } = await renderWithAct(
        <Mentions defaultValue={value} onCopy={onCopy}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 0, 15);
      const clipboardData = createClipboard();
      fireEvent(textarea, createEvent.copy(textarea, { clipboardData }));
      expect(onCopy).toHaveBeenCalled();
      expect(clipboardData.store['application/x-mantine-mentions']).toBeUndefined();
    });

    it('writes only plain text when the selection starts or ends inside a mention', async () => {
      const { container } = await renderWithAct(
        <Mentions defaultValue={value}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 5, 7);
      const clipboardData = createClipboard();
      fireEvent(textarea, createEvent.copy(textarea, { clipboardData }));
      expect(clipboardData.store['text/plain']).toBe('lt');
      expect(clipboardData.store['application/x-mantine-mentions']).toBeUndefined();
    });

    it('writes only plain text when the selection contains no mentions', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="Hey @[Walter White](walter)" onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 0, 3);
      const copyData = createClipboard();
      fireEvent(textarea, createEvent.copy(textarea, { clipboardData: copyData }));
      expect(copyData.store).toEqual({ 'text/plain': 'Hey' });

      setCaret(textarea, 0, 3);
      const cutData = createClipboard();
      fireEvent(textarea, createEvent.cut(textarea, { clipboardData: cutData }));
      expect(cutData.store).toEqual({ 'text/plain': 'Hey' });
      expect(onChange.mock.calls.at(-1)?.[0].value).toBe(' @[Walter White](walter)');
    });

    it('cuts whole mentions and carries them to the clipboard', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue={value} onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 5, 7);
      const clipboardData = createClipboard();
      fireEvent(textarea, createEvent.cut(textarea, { clipboardData }));
      expect(clipboardData.store['text/plain']).toBe('Walter White');
      expect(clipboardData.store['application/x-mantine-mentions']).toBe('@[Walter White](walter)');
      expect(onChange.mock.calls.at(-1)?.[0].value).toBe('Hi  there');

      setCaret(textarea, 3);
      fireEvent(textarea, createEvent.paste(textarea, { clipboardData }));
      expect(onChange.mock.calls.at(-1)?.[0].value).toBe(value);
    });

    it('uses the default paste when the target sources cannot parse the markup', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="" onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 0);
      const event = createEvent.paste(textarea, {
        clipboardData: createClipboard({
          'text/plain': 'see bug',
          'application/x-mantine-mentions': 'see #[bug](42)',
        }),
      });
      fireEvent(textarea, event);
      expect(event.defaultPrevented).toBe(false);
      expect(onChange).not.toHaveBeenCalled();
    });

    it('uses the default paste when the pasted markup would exceed maxLength', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions defaultValue="Hey " onChange={onChange} maxLength={10}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      setCaret(textarea, 4);
      const event = createEvent.paste(textarea, {
        clipboardData: createClipboard({
          'text/plain': 'Jesse Pinkman',
          'application/x-mantine-mentions': '@[Jesse Pinkman](jesse)',
        }),
      });
      fireEvent(textarea, event);
      expect(event.defaultPrevented).toBe(false);
      expect(onChange).not.toHaveBeenCalled();
    });

    it('replaces pasted newlines with spaces in single-line mode', async () => {
      const onChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions singleLine defaultValue="" onChange={onChange}>
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const input = container.querySelector('input:not([type="hidden"])') as HTMLInputElement;
      input.setSelectionRange(0, 0);
      fireEvent.select(input);
      fireEvent(
        input,
        createEvent.paste(input, {
          clipboardData: createClipboard({
            'text/plain': 'a\nWalter White',
            'application/x-mantine-mentions': 'a\n@[Walter White](walter)',
          }),
        })
      );
      expect(onChange.mock.calls.at(-1)?.[0].value).toBe('a @[Walter White](walter)');
      expect(input.value).toBe('a Walter White');
      input.setSelectionRange(14, 14);
      fireEvent.select(input);
      fireEvent.change(input, {
        target: { value: 'a Walter White!', selectionStart: 15, selectionEnd: 15 },
      });
      const payload = onChange.mock.calls.at(-1)?.[0];
      expect(payload.value).toBe('a @[Walter White](walter)!');
      expect(payload.value).not.toContain('\n');
      expect(payload.mentions).toHaveLength(1);
    });
  });

  describe('mention chip clicks', () => {
    it('keeps focus in the control and moves the caret to a mention boundary', async () => {
      const { container } = await renderWithAct(
        <Mentions
          defaultValue="Hi @[Walter White](walter) there"
          renderMention={({ display }) => <span>{display}</span>}
        >
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      const chip = container.querySelector('.mantine-Mentions-highlight') as HTMLElement;
      expect(fireEvent.mouseDown(chip, { clientX: 0 })).toBe(false);
      expect(document.activeElement).toBe(textarea);
      expect([3, 15]).toContain(textarea.selectionStart);
    });

    it.each([
      ['static', { mode: 'static' as const }],
      ['readOnly', { readOnly: true }],
      ['disabled', { disabled: true }],
    ])('ignores chip presses in a %s field', async (_name, props) => {
      const onSelectionChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions
          defaultValue="Hi @[Walter White](walter) there"
          renderMention={({ display }) => <span>{display}</span>}
          onSelectionChange={onSelectionChange}
          {...props}
        >
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      expect(container.querySelector('[data-interactive]')).not.toBeInTheDocument();
      const chip = container.querySelector('.mantine-Mentions-highlight') as HTMLElement;
      expect(fireEvent.mouseDown(chip, { clientX: 0 })).toBe(true);
      expect(document.activeElement).not.toBe(getTextarea(container));
      expect(onSelectionChange).not.toHaveBeenCalled();
    });

    it('lets interactive content inside renderMention receive the mousedown', async () => {
      const { container } = await renderWithAct(
        <Mentions
          defaultValue="Hi @[Walter White](walter) there"
          renderMention={({ display }) => <button type="button">{display}</button>}
        >
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const button = container.querySelector('.mantine-Mentions-highlight button') as HTMLElement;
      expect(fireEvent.mouseDown(button)).toBe(true);
    });

    it('calls onSelectionChange when a mention chip click moves the caret', async () => {
      const onSelectionChange = jest.fn();
      const { container } = await renderWithAct(
        <Mentions
          defaultValue="Hi @[Walter White](walter) there"
          renderMention={({ display }) => <span>{display}</span>}
          onSelectionChange={onSelectionChange}
        >
          <Mention trigger="@" data={users} />
        </Mentions>
      );
      const textarea = getTextarea(container);
      const chip = container.querySelector('.mantine-Mentions-highlight') as HTMLElement;
      fireEvent.mouseDown(chip, { clientX: 0 });
      const [selection, mentions] = onSelectionChange.mock.calls.at(-1)!;
      expect(selection).toEqual({ start: textarea.selectionStart, end: textarea.selectionStart });
      expect(mentions.map((mention: any) => mention.id)).toEqual(['walter']);
    });
  });

  describe('Escape inside a modal', () => {
    it('closes the dropdown first and the modal on the next Escape', async () => {
      const onClose = jest.fn();
      await renderWithAct(
        <Modal opened onClose={onClose} title="Modal">
          <Mentions defaultValue="">
            <Mention trigger="@" data={users} />
          </Mentions>
        </Modal>
      );
      const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
      typeInto(textarea, '@wa');
      await screen.findByText('Walter White');
      await waitFor(() =>
        expect(textarea).toHaveAttribute('data-mantine-stop-propagation', 'true')
      );
      fireEvent.keyDown(textarea, { key: 'Escape' });
      expect(onClose).not.toHaveBeenCalled();
      await waitFor(() => expect(textarea).not.toHaveAttribute('data-mantine-stop-propagation'));
      fireEvent.keyDown(textarea, { key: 'Escape' });
      expect(onClose).toHaveBeenCalled();
    });

    it('dismisses the inline ghost without closing the modal', async () => {
      const onClose = jest.fn();
      await renderWithAct(
        <Modal opened onClose={onClose} title="Modal">
          <Mentions defaultValue="" suggestionsDisplay="inline">
            <Mention trigger="@" data={users} />
          </Mentions>
        </Modal>
      );
      const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
      typeInto(textarea, '@wa');
      expect(textarea).toHaveAttribute('data-mantine-stop-propagation', 'true');
      fireEvent.keyDown(textarea, { key: 'Escape' });
      expect(onClose).not.toHaveBeenCalled();
      expect(textarea).not.toHaveAttribute('data-mantine-stop-propagation');
    });
  });
});
