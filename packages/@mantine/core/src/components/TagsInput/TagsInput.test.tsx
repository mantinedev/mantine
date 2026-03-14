import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { inputDefaultProps, inputStylesApiSelectors, render, tests } from '@mantine-tests/core';
import { TagsInput, TagsInputProps, TagsInputStylesNames } from './TagsInput';

const defaultProps: TagsInputProps = {
  ...inputDefaultProps,
  data: ['test-1', 'test-2'],
};

describe('@mantine/core/TagsInput', () => {
  tests.axe([
    <TagsInput aria-label="test-label" data={['test-1', 'test-2']} key="1" />,
    <TagsInput label="test-label" data={['test-1', 'test-2']} key="2" />,
    <TagsInput label="test-label" error data={['test-1', 'test-2']} key="3" />,
    <TagsInput
      label="test-label"
      error="test-error"
      id="test"
      data={['test-1', 'test-2']}
      key="4"
    />,
    <TagsInput
      label="test-label"
      description="test-description"
      data={['test-1', 'test-2']}
      key="5"
    />,
  ]);

  tests.itSupportsSystemProps<TagsInputProps, TagsInputStylesNames>({
    component: TagsInput,
    props: defaultProps,
    displayName: '@mantine/core/TagsInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TagsInputProps>({
    component: TagsInput,
    props: defaultProps,
    selector: 'input',
  });

  it('correctly handles custom isDuplicate', async () => {
    const user = userEvent.setup();
    render(
      <TagsInput
        role="combobox"
        data={['test-1']}
        isDuplicate={(value) => value.startsWith('test')}
      />
    );

    const input = screen.getByRole('combobox');

    await user.type(input, 'test-2');
    await user.keyboard('{Enter}');

    expect(screen.queryByText('test-2')).not.toBeInTheDocument();
  });

  it('calls onMaxTags when maxTags limit is reached', async () => {
    const onMaxTags = jest.fn();
    render(<TagsInput maxTags={2} onMaxTags={onMaxTags} />);
    const user = userEvent.setup();
    const input = screen.getByRole('textbox');

    await user.type(input, 'test-1{Enter}');
    await user.type(input, 'test-2{Enter}');
    expect(onMaxTags).not.toHaveBeenCalled();

    await user.type(input, 'test-3{Enter}');
    expect(onMaxTags).toHaveBeenCalledWith('test-3');
  });

  it('supports renderPill prop', () => {
    const { container } = render(
      <TagsInput
        defaultValue={['React', 'Angular']}
        renderPill={({ value }) => <span className="test-pill">{value}</span>}
      />
    );

    expect(container.querySelectorAll('.test-pill')).toHaveLength(2);
    expect(container.querySelectorAll('.test-pill')[0]).toHaveTextContent('React');
    expect(container.querySelectorAll('.test-pill')[1]).toHaveTextContent('Angular');
  });

  it('handles default split chars (comma)', async () => {
    render(<TagsInput />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'React,');
    expect(screen.getByText('React')).toBeInTheDocument();

    await userEvent.type(input, 'Angular,');
    expect(screen.getByText('Angular')).toBeInTheDocument();

    await userEvent.type(input, 'Vue{Enter}');
    expect(screen.getByText('Vue')).toBeInTheDocument();
  });

  it('handles custom split chars', async () => {
    render(<TagsInput splitChars={[';', '|']} />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'React;');
    expect(screen.getByText('React')).toBeInTheDocument();

    await userEvent.type(input, 'Angular|');
    expect(screen.getByText('Angular')).toBeInTheDocument();

    await userEvent.type(input, 'Vue{Enter}');
    expect(screen.getByText('Vue')).toBeInTheDocument();
  });

  it('handles paste with split chars', async () => {
    render(<TagsInput />);
    const input = screen.getByRole('textbox');

    await userEvent.click(input);
    await userEvent.paste('React,Angular,Vue');

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Angular')).toBeInTheDocument();
    expect(screen.getByText('Vue')).toBeInTheDocument();
  });

  it('removes last tag with Backspace', async () => {
    render(<TagsInput defaultValue={['React', 'Angular', 'Vue']} />);
    const input = screen.getByRole('textbox');

    await userEvent.click(input);
    await userEvent.keyboard('{Backspace}');

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Angular')).toBeInTheDocument();
    expect(screen.queryByText('Vue')).not.toBeInTheDocument();
  });

  it('accepts value on blur when acceptValueOnBlur is true', async () => {
    render(<TagsInput acceptValueOnBlur />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'React');
    await userEvent.tab();

    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('does not accept value on blur when acceptValueOnBlur is false', async () => {
    render(<TagsInput acceptValueOnBlur={false} />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'React');
    await userEvent.tab();

    expect(screen.queryByText('React')).not.toBeInTheDocument();
  });

  it('allows duplicate tags when allowDuplicates is true', async () => {
    render(<TagsInput allowDuplicates />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'React{Enter}');
    await userEvent.type(input, 'React{Enter}');

    expect(screen.getAllByText('React')).toHaveLength(2);
  });

  it('prevents duplicate tags by default', async () => {
    render(<TagsInput />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'React{Enter}');
    await userEvent.type(input, 'React{Enter}');

    expect(screen.getAllByText('React')).toHaveLength(1);
  });

  it('calls onRemove when tag is removed', async () => {
    const onRemove = jest.fn();
    const { container } = render(
      <TagsInput defaultValue={['React', 'Angular']} onRemove={onRemove} />
    );

    const removeButtons = container.querySelectorAll('.mantine-Pill-remove');
    await userEvent.click(removeButtons[0] as HTMLElement);

    expect(onRemove).toHaveBeenCalledWith('React');
  });

  it('calls onClear when clear button is clicked', async () => {
    const onClear = jest.fn();
    const { container } = render(
      <TagsInput defaultValue={['React', 'Angular']} clearable onClear={onClear} />
    );

    const clearButton = container.querySelector('.mantine-InputClearButton-root') as HTMLElement;
    await userEvent.click(clearButton);

    expect(onClear).toHaveBeenCalled();
  });

  it('adds tag on Enter key', async () => {
    render(<TagsInput />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'React{Enter}');

    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('prevents changes when readOnly is true', async () => {
    render(<TagsInput defaultValue={['React']} readOnly />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'Angular{Enter}');

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.queryByText('Angular')).not.toBeInTheDocument();
  });

  it('prevents tag removal when readOnly is true', () => {
    const { container } = render(<TagsInput defaultValue={['React', 'Angular']} readOnly />);

    expect(container.querySelectorAll('.mantine-Pill-remove')).toHaveLength(0);
  });
  it('prevents duplicate tags with case-insensitive check using default splitChars', async () => {
    const user = userEvent.setup();
    const onDuplicate = jest.fn();
    render(<TagsInput role="combobox" data={[]} onDuplicate={onDuplicate} />);

    const input = screen.getByRole('combobox');

    await user.type(input, 'One,');
    await user.type(input, 'one,');
    await user.type(input, 'ONE,');

    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.queryAllByText('one')).toHaveLength(0);
    expect(screen.queryAllByText('ONE')).toHaveLength(0);
    expect(onDuplicate).toHaveBeenCalledTimes(2);
    expect(onDuplicate).toHaveBeenCalledWith('one');
    expect(onDuplicate).toHaveBeenCalledWith('ONE');
  });

  it('prevents duplicate tags with case-insensitive check using custom splitChars', async () => {
    const user = userEvent.setup();
    const onDuplicate = jest.fn();
    render(<TagsInput role="combobox" data={[]} splitChars={['|']} onDuplicate={onDuplicate} />);

    const input = screen.getByRole('combobox');

    await user.type(input, 'One|');
    await user.type(input, 'one|');
    await user.type(input, 'ONE|');

    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.queryAllByText('one')).toHaveLength(0);
    expect(screen.queryAllByText('ONE')).toHaveLength(0);
    expect(onDuplicate).toHaveBeenCalledTimes(2);
    expect(onDuplicate).toHaveBeenCalledWith('one');
    expect(onDuplicate).toHaveBeenCalledWith('ONE');
  });

  it('prevents duplicate tags when using Enter with custom splitChars', async () => {
    const user = userEvent.setup();
    const onDuplicate = jest.fn();
    render(<TagsInput role="combobox" data={[]} splitChars={['|']} onDuplicate={onDuplicate} />);

    const input = screen.getByRole('combobox');

    await user.type(input, 'One');
    await user.keyboard('{Enter}');
    expect(screen.getByText('One')).toBeInTheDocument();

    await user.type(input, 'one');
    await user.keyboard('{Enter}');
    expect(screen.queryAllByText('one')).toHaveLength(0);

    await user.type(input, 'TWO');
    await user.keyboard('{Enter}');
    expect(screen.getByText('TWO')).toBeInTheDocument();

    expect(onDuplicate).toHaveBeenCalledTimes(1);
    expect(onDuplicate).toHaveBeenCalledWith('one');
  });

  it('correctly handles custom isDuplicate with splitChars', async () => {
    const user = userEvent.setup();
    const onDuplicate = jest.fn();
    render(
      <TagsInput
        role="combobox"
        data={[]}
        splitChars={['|']}
        isDuplicate={(value) => value.startsWith('test')}
        onDuplicate={onDuplicate}
      />
    );

    const input = screen.getByRole('combobox');

    await user.type(input, 'test-1|');
    await user.type(input, 'test-2|');
    await user.type(input, 'hello|');

    expect(screen.queryByText('test-1')).not.toBeInTheDocument();
    expect(screen.queryByText('test-2')).not.toBeInTheDocument();
    expect(screen.getByText('hello')).toBeInTheDocument();
    expect(onDuplicate).toHaveBeenCalledTimes(2);
    expect(onDuplicate).toHaveBeenCalledWith('test-1');
    expect(onDuplicate).toHaveBeenCalledWith('test-2');
  });

  it('allows duplicate tags when allowDuplicates is true with splitChars', async () => {
    const user = userEvent.setup();
    render(<TagsInput role="combobox" data={[]} splitChars={['|']} allowDuplicates />);

    const input = screen.getByRole('combobox');

    await user.type(input, 'One|');
    await user.type(input, 'one|');
    await user.type(input, 'ONE|');

    const tags = screen.queryAllByText(/^(One|one|ONE)$/);
    expect(tags).toHaveLength(3);
  });
});
