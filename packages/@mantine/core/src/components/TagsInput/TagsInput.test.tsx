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

  describe('readOnly behavior', () => {
    it('prevents tag removal via backspace when readOnly is true', async () => {
      const user = userEvent.setup();
      const onRemove = jest.fn();
      render(
        <TagsInput
          role="combobox"
          data={['test-1', 'test-2']}
          defaultValue={['existing-tag']}
          readOnly
          onRemove={onRemove}
        />
      );

      const input = screen.getByRole('combobox');

      // Focus the input and press backspace
      await user.click(input);
      await user.keyboard('{Backspace}');

      // Tag should still be present and onRemove should not be called
      expect(screen.getByText('existing-tag')).toBeInTheDocument();
      expect(onRemove).not.toHaveBeenCalled();
    });

    it('prevents tag addition via Enter key when readOnly is true', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(
        <TagsInput
          role="combobox"
          data={['test-1', 'test-2']}
          defaultValue={['existing-tag']}
          readOnly
          onChange={onChange}
        />
      );

      const input = screen.getByRole('combobox');

      await user.type(input, 'new-tag');
      await user.keyboard('{Enter}');

      // New tag should not be added
      expect(screen.queryByText('new-tag')).not.toBeInTheDocument();
      expect(onChange).not.toHaveBeenCalled();
    });

    it('prevents tag addition via split characters when readOnly is true', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(
        <TagsInput
          role="combobox"
          data={['test-1', 'test-2']}
          defaultValue={['existing-tag']}
          readOnly
          onChange={onChange}
          splitChars={[',']}
        />
      );

      const input = screen.getByRole('combobox');

      await user.type(input, 'new-tag,');

      // New tag should not be added
      expect(screen.queryByText('new-tag')).not.toBeInTheDocument();
      expect(onChange).not.toHaveBeenCalled();
    });

    it('prevents tag addition via paste when readOnly is true', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(
        <TagsInput
          role="combobox"
          data={['test-1', 'test-2']}
          defaultValue={['existing-tag']}
          readOnly
          onChange={onChange}
        />
      );

      const input = screen.getByRole('combobox');

      await user.click(input);
      await user.paste('new-tag,another-tag');

      // New tags should not be added
      expect(screen.queryByText('new-tag')).not.toBeInTheDocument();
      expect(screen.queryByText('another-tag')).not.toBeInTheDocument();
      expect(onChange).not.toHaveBeenCalled();
    });

    it('prevents tag addition via blur with acceptValueOnBlur when readOnly is true', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(
        <TagsInput
          role="combobox"
          data={['test-1', 'test-2']}
          defaultValue={['existing-tag']}
          readOnly
          onChange={onChange}
          acceptValueOnBlur
        />
      );

      const input = screen.getByRole('combobox');

      await user.type(input, 'new-tag');
      await user.click(document.body); // Blur the input

      // New tag should not be added even with acceptValueOnBlur
      expect(screen.queryByText('new-tag')).not.toBeInTheDocument();
      expect(onChange).not.toHaveBeenCalled();
    });

    it('does not show remove buttons on pills when readOnly is true', () => {
      render(
        <TagsInput
          role="combobox"
          data={['test-1', 'test-2']}
          defaultValue={['tag1', 'tag2']}
          readOnly
        />
      );

      // Remove buttons should not be present
      const removeButtons = screen.queryAllByRole('button');
      expect(removeButtons).toHaveLength(0);
    });
  });
});
