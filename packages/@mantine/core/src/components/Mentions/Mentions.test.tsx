import { fireEvent, waitFor } from '@testing-library/react';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
} from '@mantine-tests/core';
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

function typeInto(textarea: HTMLTextAreaElement, value: string, caret = value.length) {
  fireEvent.change(textarea, { target: { value, selectionStart: caret, selectionEnd: caret } });
}

describe('@mantine/core/Mentions', () => {
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
    stylesApiSelectors: [...inputStylesApiSelectors, 'highlighter', 'highlight'],
  });

  it('renders the label and the plain text of the markup value', () => {
    const { container } = render(<Mentions {...defaultProps} />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
    expect(getTextarea(container).value).toBe('Hi @Walter White');
    expect(screen.getByText('@Walter White')).toBeInTheDocument();
  });

  it('hides the trigger in the displayed text by default', () => {
    const { container } = render(
      <Mentions defaultValue="Hi @[Walter White](walter)">
        <Mention trigger="@" data={users} />
      </Mentions>
    );
    expect(getTextarea(container).value).toBe('Hi Walter White');
    expect(screen.getByText('Walter White')).toBeInTheDocument();
  });

  it('renders custom mention content with renderMention', () => {
    const { container } = render(
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

  it('renders a disabled control', () => {
    const { container } = render(<Mentions {...defaultProps} disabled />);
    expect(getTextarea(container)).toBeDisabled();
  });

  it('renders a read-only control in static mode', () => {
    const { container } = render(<Mentions {...defaultProps} mode="static" />);
    expect(getTextarea(container)).toHaveAttribute('readonly');
  });

  it('exposes autocomplete accessibility attributes', () => {
    const { container } = render(<Mentions {...defaultProps} />);
    const textarea = getTextarea(container);
    expect(textarea).toHaveAttribute('aria-autocomplete', 'list');
    expect(textarea).toHaveAttribute('aria-haspopup', 'listbox');
  });

  it('uses the combobox role for single-line inputs', () => {
    const { container } = render(<Mentions {...defaultProps} singleLine />);
    expect(container.querySelector('input')).toHaveAttribute('role', 'combobox');
  });

  it('forwards native form props to the underlying control', () => {
    const { container } = render(
      <Mentions {...defaultProps} name="comment" maxLength={200} autoComplete="off" />
    );
    const textarea = getTextarea(container);
    expect(textarea).toHaveAttribute('name', 'comment');
    expect(textarea).toHaveAttribute('maxlength', '200');
    expect(textarea).toHaveAttribute('autocomplete', 'off');
  });

  it('opens the dropdown with filtered suggestions and inserts a mention', async () => {
    const onChange = jest.fn();
    const { container } = render(
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
      expect(last?.trigger.type).toBe('mention-add');
      expect(last?.mentionId).toBe('jesse');
    });
  });

  it('allows whitespace in the query with allowSpaceInQuery', async () => {
    const { container } = render(
      <Mentions defaultValue="">
        <Mention trigger="@" data={[{ id: 'walter', display: 'Walter White' }]} allowSpaceInQuery />
      </Mentions>
    );
    typeInto(getTextarea(container), '@Walter Wh');
    expect(await screen.findByText('Walter White')).toBeInTheDocument();
  });

  it('matches accents-insensitively with ignoreAccents', async () => {
    const { container } = render(
      <Mentions defaultValue="">
        <Mention trigger="@" data={[{ id: 'jose', display: 'José' }]} ignoreAccents />
      </Mentions>
    );
    typeInto(getTextarea(container), '@jose');
    expect(await screen.findByText('José')).toBeInTheDocument();
  });

  it('fires onChange with the rich payload on plain-text input', () => {
    const onChange = jest.fn();
    const { container } = render(
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

  it('removes the whole mention when part of it is deleted', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Mentions defaultValue="Hi @[Walter White](walter)" onChange={onChange}>
        <Mention trigger="@" data={users} withTrigger />
      </Mentions>
    );

    // plain text is "Hi @Walter White" (length 16); delete the trailing "e"
    typeInto(getTextarea(container), 'Hi @Walter Whit', 15);

    const payload = onChange.mock.calls.at(-1)?.[0];
    expect(payload.value).toBe('Hi ');
    expect(payload.trigger.type).toBe('mention-remove');
  });

  it('restores the value with Ctrl+Z / Ctrl+Shift+Z after a mention is removed', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Mentions defaultValue="Hi @[Walter White](walter)" onChange={onChange}>
        <Mention trigger="@" data={users} withTrigger />
      </Mentions>
    );
    const textarea = getTextarea(container);

    // atomic delete removes the whole mention
    typeInto(textarea, 'Hi @Walter Whit', 15);
    expect(onChange.mock.calls.at(-1)?.[0].value).toBe('Hi ');

    // undo restores the mention
    fireEvent.keyDown(textarea, { key: 'z', ctrlKey: true });
    expect(onChange.mock.calls.at(-1)?.[0].value).toBe('Hi @[Walter White](walter)');

    // redo removes it again
    fireEvent.keyDown(textarea, { key: 'z', ctrlKey: true, shiftKey: true });
    expect(onChange.mock.calls.at(-1)?.[0].value).toBe('Hi ');
  });

  it('does not open the dropdown in static mode', async () => {
    const { container } = render(
      <Mentions defaultValue="" mode="static">
        <Mention trigger="@" data={users} />
      </Mentions>
    );

    typeInto(getTextarea(container), '@jes');
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(screen.queryByText('Jesse Pinkman')).not.toBeInTheDocument();
  });
});
