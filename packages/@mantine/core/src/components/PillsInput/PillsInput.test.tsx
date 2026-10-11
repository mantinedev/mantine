import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { PillsInput, PillsInputProps } from './PillsInput';

const defaultProps: PillsInputProps = {
  ...inputDefaultProps,
  children: <PillsInput.Field />,
};

describe('@mantine/core/PillsInput', () => {
  tests.axe([
    <PillsInput label="test-label" key="1">
      <PillsInput.Field />
    </PillsInput>,

    <PillsInput label="test-label" description="test-description" key="2">
      <PillsInput.Field />
    </PillsInput>,

    <PillsInput label="test-label" error="test-error" key="3">
      <PillsInput.Field />
    </PillsInput>,

    <PillsInput key="4">
      <PillsInput.Field aria-label="test-label" />
    </PillsInput>,
  ]);

  tests.itSupportsSystemProps<PillsInputProps, __InputStylesNames>({
    component: PillsInput,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/PillsInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputWrapperProps<PillsInputProps>({
    component: PillsInput,
    props: defaultProps,
  });

  tests.itSupportsInputSections<PillsInputProps>({
    component: PillsInput,
    props: defaultProps,
  });

  tests.itSupportsSharedInputDefaults<PillsInputProps>({
    component: PillsInput,
    props: defaultProps,
    componentName: 'PillsInput',
  });

  it('focuses the field when the wrapper is clicked', async () => {
    const { container } = render(
      <PillsInput label="test-label">
        <PillsInput.Field />
      </PillsInput>
    );
    await userEvent.click(container.querySelector('.mantine-PillsInput-input')!);
    expect(screen.getByRole('textbox')).toHaveFocus();
  });

  it('does not focus the field when the wrapper is clicked inside disabled fieldset', async () => {
    const { container } = render(
      <fieldset disabled>
        <PillsInput label="test-label">
          <PillsInput.Field />
        </PillsInput>
      </fieldset>
    );
    await userEvent.click(container.querySelector('.mantine-PillsInput-input')!);
    expect(screen.getByRole('textbox')).not.toHaveFocus();
  });

  it('marks the field as required when required is set', () => {
    const { rerender } = render(
      <PillsInput label="test-label" required>
        <PillsInput.Field />
      </PillsInput>
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-required', 'true');

    rerender(
      <PillsInput label="test-label">
        <PillsInput.Field />
      </PillsInput>
    );
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-required');
  });

  it('calls onMouseDown passed to the field', async () => {
    const spy = jest.fn();
    render(
      <PillsInput label="test-label">
        <PillsInput.Field onMouseDown={spy} />
      </PillsInput>
    );
    await userEvent.click(screen.getByRole('textbox'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
