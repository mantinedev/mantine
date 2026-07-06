import { fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { Editable, EditableProps, EditableStylesNames } from './Editable';
import { useEditable } from './use-editable';

const defaultProps: EditableProps = { defaultValue: 'Value' };

describe('@mantine/core/Editable', () => {
  tests.axe([<Editable defaultValue="Value" />]);

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
    fireEvent.blur(input);

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
      const editable = useEditable({ defaultValue: 'Controller', activationMode: 'click' });
      return (
        <div>
          <span data-testid="editing">{String(editable.editing)}</span>
          <Editable controller={editable} />
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
});
