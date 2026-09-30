import { Activity, createRef } from 'react';
import { act, fireEvent } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Modal } from '../Modal';
import { Editable, EditableProps, EditableStylesNames } from './Editable';
import { useEditable } from './use-editable';

const defaultProps: EditableProps = { defaultValue: 'Value' };

describe('@mantine/core/Editable', () => {
  tests.axe([<Editable defaultValue="Value" />, <Editable aria-label="Title" />]);

  tests.itSupportsSystemProps<EditableProps, EditableStylesNames>({
    component: Editable,
    props: defaultProps,
    displayName: '@mantine/core/Editable',
    stylesApiSelectors: ['root', 'preview'],
  });

  it('renders the value in the preview by default', () => {
    render(<Editable defaultValue="Project name" />);
    expect(screen.getByText('Project name')).toBeInTheDocument();
  });

  it('renders the preview placeholder when the value is empty', () => {
    render(<Editable placeholder={{ preview: 'Add a name' }} />);
    expect(screen.getByText('Add a name')).toBeInTheDocument();
  });

  it('enters edit mode on click with activationMode="click"', () => {
    render(<Editable defaultValue="Value" activationMode="click" />);
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Value'));
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('does not enter edit mode on click with activationMode="none"', () => {
    render(<Editable defaultValue="Value" activationMode="none" />);
    fireEvent.click(screen.getByText('Value'));
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('commits the value on Enter and calls onValueCommit', () => {
    const onValueCommit = jest.fn();
    render(<Editable defaultValue="Value" activationMode="click" onValueCommit={onValueCommit} />);

    fireEvent.click(screen.getByText('Value'));
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Updated' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(onValueCommit).toHaveBeenCalledWith('Updated');
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.getByText('Updated')).toBeInTheDocument();
  });

  it('reverts the value on Escape and calls onValueRevert', () => {
    const onValueRevert = jest.fn();
    render(<Editable defaultValue="Value" activationMode="click" onValueRevert={onValueRevert} />);

    fireEvent.click(screen.getByText('Value'));
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Discarded' } });
    fireEvent.keyDown(input, { key: 'Escape' });

    expect(onValueRevert).toHaveBeenCalledWith('Value');
    expect(screen.getByText('Value')).toBeInTheDocument();
  });

  it('commits on blur with submitMode="both"', () => {
    const onValueCommit = jest.fn();
    render(<Editable defaultValue="Value" activationMode="click" onValueCommit={onValueCommit} />);

    fireEvent.click(screen.getByText('Value'));
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Blurred' } });
    fireEvent.blur(input, { relatedTarget: null });

    expect(onValueCommit).toHaveBeenCalledWith('Blurred');
  });

  it('does not commit on blur with submitMode="enter"', () => {
    const onValueCommit = jest.fn();
    render(
      <Editable
        defaultValue="Value"
        activationMode="click"
        submitMode="enter"
        onValueCommit={onValueCommit}
      />
    );

    fireEvent.click(screen.getByText('Value'));
    fireEvent.blur(screen.getByRole('textbox'));
    expect(onValueCommit).not.toHaveBeenCalled();
  });

  it('calls onChange on each keystroke', () => {
    const onChange = jest.fn();
    render(<Editable defaultValue="a" activationMode="click" onChange={onChange} />);

    fireEvent.click(screen.getByText('a'));
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'ab' } });
    expect(onChange).toHaveBeenLastCalledWith('ab');
  });

  it('does not enter edit mode when disabled', () => {
    render(<Editable defaultValue="Value" activationMode="click" disabled />);
    fireEvent.click(screen.getByText('Value'));
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('renders a textarea when multiline is set', () => {
    render(<Editable defaultValue="Value" multiline activationMode="click" />);
    fireEvent.click(screen.getByText('Value'));
    expect(screen.getByRole('textbox').tagName).toBe('TEXTAREA');
  });

  it('renders a hidden input with the value for form submission in preview mode', () => {
    const { container } = render(<Editable name="title" defaultValue="Project" />);
    const hidden = container.querySelector('input[type="hidden"][name="title"]');
    expect(hidden).toHaveValue('Project');
  });

  it('moves the name to the visible input during editing to avoid duplicate values', () => {
    const { container } = render(
      <Editable name="title" defaultValue="Project" activationMode="click" />
    );

    fireEvent.click(screen.getByText('Project'));
    expect(container.querySelector('input[type="hidden"]')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('name', 'title');
  });

  it('binds to an external controller', () => {
    function Wrapper() {
      const controller = useEditable({ defaultValue: 'Controller', activationMode: 'click' });
      return (
        <div>
          <span data-testid="editing">{String(controller.editing)}</span>
          <Editable controller={controller} />
        </div>
      );
    }

    render(<Wrapper />);
    expect(screen.getByTestId('editing')).toHaveTextContent('false');
    fireEvent.click(screen.getByText('Controller'));
    expect(screen.getByTestId('editing')).toHaveTextContent('true');
  });

  it('supports custom layout with triggers', () => {
    render(
      <Editable defaultValue="Value" activationMode="none">
        <Editable.Preview />
        <Editable.Input />
        <Editable.Control>
          <Editable.EditTrigger>edit</Editable.EditTrigger>
          <Editable.SubmitTrigger>submit</Editable.SubmitTrigger>
          <Editable.CancelTrigger>cancel</Editable.CancelTrigger>
        </Editable.Control>
      </Editable>
    );

    expect(screen.getByText('edit')).toBeInTheDocument();
    expect(screen.queryByText('submit')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('edit'));
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('submit')).toBeInTheDocument();
    expect(screen.queryByText('edit')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('cancel'));
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.getByText('edit')).toBeInTheDocument();
  });

  it('reverts to the value at edit start when editing is entered through the controlled prop', () => {
    const onChange = jest.fn();

    function Wrapper({ value, editing }: { value: string; editing: boolean }) {
      return (
        <Editable value={value} editing={editing} onChange={onChange} activationMode="click" />
      );
    }

    const { rerender } = render(<Wrapper value="" editing={false} />);
    rerender(<Wrapper value="Loaded" editing={false} />);
    rerender(<Wrapper value="Loaded" editing />);
    rerender(<Wrapper value="LoadedX" editing />);

    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Escape' });
    expect(onChange).toHaveBeenLastCalledWith('Loaded');
  });

  it('does not move focus when re-shown by Activity', () => {
    const view = (mode: 'visible' | 'hidden') => (
      <>
        <button type="button">toggle</button>
        <Activity mode={mode}>
          <Editable defaultValue="Value" />
        </Activity>
      </>
    );

    const { rerender } = render(view('visible'));
    const toggle = screen.getByRole('button', { name: 'toggle' });
    act(() => toggle.focus());

    rerender(view('hidden'));
    rerender(view('visible'));
    expect(document.activeElement).toBe(toggle);
  });

  it('focuses the input on defaultEditing mount', () => {
    render(<Editable defaultValue="Value" defaultEditing />);
    expect(document.activeElement).toBe(screen.getByRole('textbox'));
  });

  it('keeps editing when a non-focusable area inside the root is clicked', async () => {
    const onValueCommit = jest.fn();
    render(
      <Editable defaultValue="Value" activationMode="click" onValueCommit={onValueCommit}>
        <Editable.Preview />
        <Editable.Input />
        <Editable.Control>
          <span>label text</span>
          <Editable.SubmitTrigger>submit</Editable.SubmitTrigger>
        </Editable.Control>
      </Editable>
    );

    await userEvent.click(screen.getByText('Value'));
    await userEvent.type(screen.getByRole('textbox'), 'X');
    await userEvent.click(screen.getByText('label text'));

    expect(screen.getByRole('textbox')).toHaveFocus();
    expect(onValueCommit).not.toHaveBeenCalled();
  });

  it('does not submit when focus moves from the input to a trigger inside the root', async () => {
    const onValueCommit = jest.fn();
    const onValueRevert = jest.fn();
    render(
      <Editable
        defaultValue="Value"
        activationMode="click"
        onValueCommit={onValueCommit}
        onValueRevert={onValueRevert}
      >
        <Editable.Preview />
        <Editable.Input />
        <Editable.Control>
          <Editable.SubmitTrigger>submit</Editable.SubmitTrigger>
          <Editable.CancelTrigger>cancel</Editable.CancelTrigger>
        </Editable.Control>
      </Editable>
    );

    await userEvent.click(screen.getByText('Value'));
    await userEvent.type(screen.getByRole('textbox'), 'X');
    await userEvent.tab();
    await userEvent.tab();

    expect(onValueCommit).not.toHaveBeenCalled();
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'cancel' }));

    await userEvent.keyboard('{Enter}');
    expect(onValueCommit).not.toHaveBeenCalled();
    expect(onValueRevert).toHaveBeenCalledWith('Value');
    expect(screen.getByText('Value')).toBeInTheDocument();
    expect(document.activeElement).toBe(screen.getByText('Value'));
  });

  it('commits when focus leaves the root from a trigger', async () => {
    const onValueCommit = jest.fn();
    render(
      <>
        <Editable defaultValue="Value" activationMode="click" onValueCommit={onValueCommit}>
          <Editable.Preview />
          <Editable.Input />
          <Editable.Control>
            <Editable.SubmitTrigger>submit</Editable.SubmitTrigger>
            <Editable.CancelTrigger>cancel</Editable.CancelTrigger>
          </Editable.Control>
        </Editable>
        <button type="button">outside</button>
      </>
    );

    await userEvent.click(screen.getByText('Value'));
    await userEvent.type(screen.getByRole('textbox'), 'X');
    await userEvent.tab();
    await userEvent.tab();
    expect(onValueCommit).not.toHaveBeenCalled();

    await userEvent.tab();
    expect(onValueCommit).toHaveBeenCalledTimes(1);
    expect(onValueCommit).toHaveBeenCalledWith('ValueX');
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'outside' }));
  });

  it('does not commit when focus leaves the root with submitMode="enter"', async () => {
    const onValueCommit = jest.fn();
    render(
      <>
        <Editable
          defaultValue="Value"
          activationMode="click"
          submitMode="enter"
          onValueCommit={onValueCommit}
        >
          <Editable.Preview />
          <Editable.Input />
          <Editable.SubmitTrigger>submit</Editable.SubmitTrigger>
        </Editable>
        <button type="button">outside</button>
      </>
    );

    await userEvent.click(screen.getByText('Value'));
    await userEvent.tab();
    await userEvent.tab();

    expect(onValueCommit).not.toHaveBeenCalled();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('commits when focus moves outside of the root', async () => {
    const onValueCommit = jest.fn();
    render(
      <>
        <Editable defaultValue="Value" activationMode="click" onValueCommit={onValueCommit} />
        <button type="button">outside</button>
      </>
    );

    await userEvent.click(screen.getByText('Value'));
    await userEvent.type(screen.getByRole('textbox'), 'X');
    await userEvent.tab();

    expect(onValueCommit).toHaveBeenCalledWith('ValueX');
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'outside' }));
  });

  it('does not pull focus back after a blur exit', async () => {
    const onValueCommit = jest.fn();
    render(
      <>
        <Editable defaultValue="Value" activationMode="click" onValueCommit={onValueCommit} />
        <button type="button">outside</button>
      </>
    );

    await userEvent.click(screen.getByText('Value'));
    await userEvent.type(screen.getByRole('textbox'), 'X');
    await userEvent.click(screen.getByRole('button', { name: 'outside' }));

    expect(onValueCommit).toHaveBeenCalledWith('ValueX');
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'outside' }));
  });

  it('does not close an enclosing Modal on Escape', () => {
    const onClose = jest.fn();
    render(
      <Modal opened onClose={onClose} title="Modal">
        <Editable defaultValue="Value" activationMode="click" />
      </Modal>
    );

    fireEvent.click(screen.getByText('Value'));
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('data-mantine-stop-propagation', 'true');
    fireEvent.keyDown(input, { key: 'Escape' });

    expect(onClose).not.toHaveBeenCalled();
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('ignores Enter with keyCode 229 (IME composition confirm)', () => {
    const onValueCommit = jest.fn();
    render(<Editable defaultValue="Value" activationMode="click" onValueCommit={onValueCommit} />);

    fireEvent.click(screen.getByText('Value'));
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter', keyCode: 229 });

    expect(onValueCommit).not.toHaveBeenCalled();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('moves focus to the edit trigger on Escape when the preview is not focusable', async () => {
    render(
      <Editable defaultValue="Value" activationMode="none">
        <Editable.Preview />
        <Editable.Input />
        <Editable.EditTrigger>edit</Editable.EditTrigger>
      </Editable>
    );

    await userEvent.click(screen.getByRole('button', { name: 'edit' }));
    expect(document.activeElement).toBe(screen.getByRole('textbox'));

    await userEvent.keyboard('{Escape}');
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'edit' }));
  });

  it('moves focus to the edit trigger after a submit trigger click', async () => {
    const onValueCommit = jest.fn();
    render(
      <Editable defaultValue="Value" activationMode="none" onValueCommit={onValueCommit}>
        <Editable.Preview />
        <Editable.Input />
        <Editable.EditTrigger>edit</Editable.EditTrigger>
        <Editable.SubmitTrigger>submit</Editable.SubmitTrigger>
      </Editable>
    );

    await userEvent.click(screen.getByRole('button', { name: 'edit' }));
    await userEvent.click(screen.getByRole('button', { name: 'submit' }));

    expect(onValueCommit).toHaveBeenCalledTimes(1);
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'edit' }));
  });

  it('returns focus to the preview after Enter and after Escape', () => {
    render(<Editable defaultValue="Value" activationMode="click" />);

    fireEvent.click(screen.getByText('Value'));
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });
    expect(document.activeElement).toBe(screen.getByText('Value'));

    fireEvent.click(screen.getByText('Value'));
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Escape' });
    expect(document.activeElement).toBe(screen.getByText('Value'));
  });

  it('does not re-enter edit mode when focus returns to the preview in focus mode', async () => {
    render(<Editable defaultValue="Value" />);

    await userEvent.tab();
    expect(document.activeElement).toBe(screen.getByRole('textbox'));

    await userEvent.keyboard('{Enter}');
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(document.activeElement).toBe(screen.getByText('Value'));

    await userEvent.tab({ shift: true });
    await userEvent.tab();
    expect(document.activeElement).toBe(screen.getByRole('textbox'));
  });

  it('moves focus to finalFocusRef after a keyboard exit', () => {
    const finalFocusRef = createRef<HTMLButtonElement>();
    render(
      <>
        <Editable defaultValue="Value" activationMode="click" finalFocusRef={finalFocusRef} />
        <button type="button" ref={finalFocusRef}>
          final
        </button>
      </>
    );

    fireEvent.click(screen.getByText('Value'));
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });
    expect(document.activeElement).toBe(finalFocusRef.current);
  });

  it('selects the input contents on edit start unless selectOnFocus is false', () => {
    const { unmount } = render(<Editable defaultValue="Value" activationMode="click" />);
    fireEvent.click(screen.getByText('Value'));
    let input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.selectionStart).toBe(0);
    expect(input.selectionEnd).toBe(5);
    unmount();

    render(<Editable defaultValue="Value" activationMode="click" selectOnFocus={false} />);
    fireEvent.click(screen.getByText('Value'));
    input = screen.getByRole('textbox') as HTMLInputElement;
    expect(document.activeElement).toBe(input);
    expect(input.selectionEnd! - input.selectionStart!).toBe(0);
  });

  it('forwards aria-label, aria-labelledby and aria-describedby to the preview and the input', () => {
    const { container } = render(
      <Editable
        aria-label="Title"
        aria-labelledby="label-id"
        aria-describedby="description-id"
        activationMode="click"
      />
    );

    const root = container.querySelector('.mantine-Editable-root')!;
    expect(root).not.toHaveAttribute('aria-label');
    expect(root).not.toHaveAttribute('aria-labelledby');
    expect(root).not.toHaveAttribute('aria-describedby');

    const preview = screen.getByRole('button');
    expect(preview).toHaveAttribute('aria-label', 'Title');
    expect(preview).toHaveAttribute('aria-labelledby', 'label-id');
    expect(preview).toHaveAttribute('aria-describedby', 'description-id');

    fireEvent.click(preview);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-label', 'Title');
    expect(input).toHaveAttribute('aria-labelledby', 'label-id');
    expect(input).toHaveAttribute('aria-describedby', 'description-id');
  });

  it('makes the preview non-interactive and disables the edit trigger when readOnly', () => {
    render(
      <Editable defaultValue="Value" readOnly>
        <Editable.Preview />
        <Editable.Input />
        <Editable.EditTrigger>edit</Editable.EditTrigger>
      </Editable>
    );

    const preview = screen.getByText('Value');
    expect(preview).not.toHaveAttribute('role');
    expect(preview).not.toHaveAttribute('tabindex');
    expect(preview).toHaveAttribute('data-read-only');
    expect(screen.getByRole('button', { name: 'edit' })).toBeDisabled();
  });

  it('commits the value set with setValue in the same handler as submit', async () => {
    const onValueCommit = jest.fn();

    function Wrapper() {
      const editable = useEditable({ defaultValue: 'Value', onValueCommit, submitMode: 'none' });
      return (
        <>
          <Editable controller={editable} />
          <button
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => editable.edit()}
          >
            start
          </button>
          <button
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              editable.setValue('Next');
              editable.submit();
            }}
          >
            save
          </button>
        </>
      );
    }

    render(<Wrapper />);
    await userEvent.click(screen.getByRole('button', { name: 'start' }));
    await userEvent.click(screen.getByRole('button', { name: 'save' }));

    expect(onValueCommit).toHaveBeenCalledWith('Next');
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('enters edit mode on click and Enter on an already focused preview in focus mode', () => {
    render(<Editable defaultValue="Value" />);

    act(() => screen.getByRole('button').focus());
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });

    fireEvent.click(screen.getByText('Value'));
    expect(screen.getByRole('textbox')).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Escape' });
    expect(document.activeElement).toBe(screen.getByText('Value'));

    fireEvent.keyDown(screen.getByText('Value'), { key: 'Enter' });
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
