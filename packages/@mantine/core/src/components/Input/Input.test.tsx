import { render, screen, tests } from '@mantine-tests/core';
import { Input, InputProps, InputStylesNames } from './Input';
import { InputClearButton } from './InputClearButton/InputClearButton';
import { InputDescription } from './InputDescription/InputDescription';
import { InputError } from './InputError/InputError';
import { InputLabel } from './InputLabel/InputLabel';
import { InputPlaceholder } from './InputPlaceholder/InputPlaceholder';
import { InputWrapper } from './InputWrapper/InputWrapper';

const defaultProps: InputProps = {
  rightSection: 'right',
  leftSection: 'left',
};

const getInputWrapper = (element: HTMLElement) => element.querySelector('.mantine-Input-wrapper')!;

describe('@mantine/core/Input', () => {
  tests.axe([
    <Input aria-label="test-input" key="1" />,
    <Input placeholder="test-input" key="2" />,
    <Input placeholder="test-input" error key="3" />,
    <Input.Wrapper
      id="test-id"
      label="test-label"
      description="test-description"
      error="test-error"
      key="4"
    >
      <Input id="test-id" />
    </Input.Wrapper>,
  ]);

  tests.itSupportsSystemProps<InputProps, InputStylesNames>({
    component: Input,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    polymorphicSelector: '.mantine-Input-input',
    displayName: '@mantine/core/Input',
    stylesApiSelectors: ['input', 'section', 'wrapper'],
  });

  tests.itSupportsFocusEvents<InputProps>({
    component: Input,
    props: defaultProps,
    selector: '.mantine-Input-input',
  });

  tests.itSupportsInputSections<InputProps>({
    component: Input,
    props: defaultProps,
  });

  it('sets data-error attribute based on error prop', () => {
    const { rerender, container } = render(<Input error />);
    expect(screen.getByRole('textbox')).toHaveAttribute('data-error');
    expect(getInputWrapper(container)).toHaveAttribute('data-error');

    rerender(<Input error={false} />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('data-error');
    expect(getInputWrapper(container)).not.toHaveAttribute('data-error');
  });

  it('sets data-multiline attribute based on multiline prop', () => {
    const { rerender, container } = render(<Input multiline />);
    expect(getInputWrapper(container)).toHaveAttribute('data-multiline');

    rerender(<Input multiline={false} />);
    expect(getInputWrapper(container)).not.toHaveAttribute('data-multiline');
  });

  it('sets data-with-left-section attribute based on leftSection prop', () => {
    const { rerender, container } = render(<Input leftSection="test" />);
    expect(getInputWrapper(container)).toHaveAttribute('data-with-left-section');

    rerender(<Input leftSection={null} />);
    expect(getInputWrapper(container)).not.toHaveAttribute('data-with-left-section');
  });

  it('sets data-with-right-section attribute based on rightSection prop', () => {
    const { rerender, container } = render(<Input rightSection="test" />);
    expect(getInputWrapper(container)).toHaveAttribute('data-with-right-section');

    rerender(<Input rightSection={null} />);
    expect(getInputWrapper(container)).not.toHaveAttribute('data-with-right-section');
  });

  it('sets data-pointer attribute based on pointer prop', () => {
    const { rerender, container } = render(<Input pointer />);
    expect(getInputWrapper(container)).toHaveAttribute('data-pointer');

    rerender(<Input pointer={false} />);
    expect(getInputWrapper(container)).not.toHaveAttribute('data-pointer');
  });

  it('sets data-disabled attribute based on disabled prop', () => {
    const { rerender } = render(<Input disabled />);
    expect(screen.getByRole('textbox')).toHaveAttribute('data-disabled');

    rerender(<Input disabled={false} />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('data-disabled');
  });

  it('sets aria-invalid attribute based on error prop', () => {
    const { rerender } = render(<Input error />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');

    rerender(<Input error={false} />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false');
  });

  it('sets data-variant attribute based on variant prop', () => {
    const { rerender, container } = render(<Input variant="filled" />);
    expect(getInputWrapper(container)).toHaveAttribute('data-variant', 'filled');
    expect(screen.getByRole('textbox')).toHaveAttribute('data-variant', 'filled');

    rerender(<Input variant="unstyled" />);
    expect(getInputWrapper(container)).toHaveAttribute('data-variant', 'unstyled');
    expect(screen.getByRole('textbox')).toHaveAttribute('data-variant', 'unstyled');
  });

  it('has aria-describedby attribute with id of description element', () => {
    render(
      <Input.Wrapper label="test" description="test-description" id="test-id">
        <Input id="test-id" />
      </Input.Wrapper>
    );

    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      screen.getByText('test-description').id
    );
  });

  it('has aria-describedby attribute with id of error element', () => {
    render(
      <Input.Wrapper label="test" error="test-error" id="test-id">
        <Input id="test-id" />
      </Input.Wrapper>
    );

    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      screen.getByText('test-error').id
    );
  });

  it('sets disabled attribute based on disabled prop', () => {
    const { rerender } = render(<Input disabled />);
    expect(screen.getByRole('textbox')).toHaveAttribute('disabled');

    rerender(<Input disabled={false} />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('disabled');
  });

  it('allows setting size attribute on the input element', () => {
    render(<Input inputSize="5" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('size', '5');
  });

  it('displays given __clearSection in right section if __clearable is true', () => {
    const { rerender } = render(<Input __clearable __clearSection="clear" />);
    expect(screen.getByText('clear')).toBeInTheDocument();

    rerender(<Input __clearable={false} __clearSection="clear" />);
    expect(screen.queryByText('clear')).not.toBeInTheDocument();
  });

  it('does not display __clearSection if rightSection is set', () => {
    render(<Input __clearable __clearSection="clear" rightSection="right" />);
    expect(screen.queryByText('clear')).not.toBeInTheDocument();
    expect(screen.getByText('right')).toBeInTheDocument();
  });

  it('displays __defaultRightSection if __clearable is false and __clearSection is set', () => {
    const { rerender } = render(
      <Input
        __clearable={false}
        __clearSection="clear"
        __defaultRightSection="default-right-section"
      />
    );
    expect(screen.getByText('default-right-section')).toBeInTheDocument();
    expect(screen.queryByText('clear')).not.toBeInTheDocument();

    rerender(
      <Input __clearable __clearSection="clear" __defaultRightSection="default-right-section" />
    );
    expect(screen.queryByText('default-right-section')).not.toBeInTheDocument();
    expect(screen.getByText('clear')).toBeInTheDocument();

    rerender(
      <Input
        rightSection="right-section"
        __clearable
        __clearSection="clear"
        __defaultRightSection="default-right-section"
      />
    );
    expect(screen.queryByText('default-right-section')).not.toBeInTheDocument();
    expect(screen.queryByText('clear')).not.toBeInTheDocument();
    expect(screen.getByText('right-section')).toBeInTheDocument();
  });

  it('exposes compound components', () => {
    expect(Input.Wrapper).toBe(InputWrapper);
    expect(Input.Label).toBe(InputLabel);
    expect(Input.Description).toBe(InputDescription);
    expect(Input.Error).toBe(InputError);
    expect(Input.Placeholder).toBe(InputPlaceholder);
    expect(Input.ClearButton).toBe(InputClearButton);
  });
});
