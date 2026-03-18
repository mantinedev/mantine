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
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
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
