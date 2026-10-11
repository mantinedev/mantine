import { fireEvent, render } from '@testing-library/react';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render as renderWithProvider,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { MantineProvider } from '../../core';
import { __InputStylesNames } from '../Input';
import { ColorInput, ColorInputProps } from './ColorInput';

const defaultProps: ColorInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/ColorInput', () => {
  tests.axe([
    <ColorInput aria-label="test-label" key="1" />,
    <ColorInput label="test-label" key="2" />,
    <ColorInput label="test-label" error key="3" />,
    <ColorInput label="test-label" error="test-error" id="test" key="4" />,
    <ColorInput label="test-label" description="test-description" key="5" />,
  ]);

  tests.itSupportsSystemProps<ColorInputProps, __InputStylesNames>({
    component: ColorInput,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/ColorInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<ColorInputProps>({
    component: ColorInput,
    props: defaultProps,
    selector: 'input',
  });

  tests.itSupportsSharedInputDefaults<ColorInputProps>({
    component: ColorInput,
    props: defaultProps,
    componentName: 'ColorInput',
  });

  it('passes fullWidth prop to ColorPicker', () => {
    const { container } = render(
      <MantineProvider>
        <ColorInput popoverProps={{ opened: true, withinPortal: false }} fullWidth />
      </MantineProvider>
    );
    expect(
      container.querySelector('.mantine-ColorInput-dropdown [data-full-width]')
    ).toBeInTheDocument();
  });

  it('does not pass radius prop to ColorPicker', () => {
    const { container } = render(
      <MantineProvider>
        <ColorInput popoverProps={{ opened: true, withinPortal: false }} radius="xl" />
      </MantineProvider>
    );
    const picker = container.querySelector(
      '.mantine-ColorInput-dropdown .mantine-ColorInput-wrapper'
    ) as HTMLElement;
    expect(picker.style.getPropertyValue('--cp-radius')).toBe('var(--mantine-radius-default)');
  });

  it('opens dropdown on focus and closes it on blur', () => {
    const { container } = renderWithProvider(
      <ColorInput
        label="Color"
        popoverProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    const getDropdown = () => container.querySelector('.mantine-ColorInput-dropdown');
    expect(getDropdown()).not.toBeInTheDocument();

    fireEvent.focus(screen.getByLabelText('Color'));
    expect(getDropdown()).toBeInTheDocument();

    fireEvent.blur(screen.getByLabelText('Color'));
    expect(getDropdown()).not.toBeInTheDocument();
  });

  it('reverts invalid input to the last valid value on blur when fixOnBlur is set', async () => {
    renderWithProvider(<ColorInput label="Color" defaultValue="#ff0000" />);
    const input = screen.getByLabelText('Color');

    await userEvent.type(input, 'zz');
    expect(input).toHaveValue('#ff0000zz');

    fireEvent.blur(input);
    expect(input).toHaveValue('#ff0000');
  });

  it('keeps invalid input on blur when fixOnBlur is false', async () => {
    renderWithProvider(<ColorInput label="Color" defaultValue="#ff0000" fixOnBlur={false} />);
    const input = screen.getByLabelText('Color');

    await userEvent.type(input, 'zz');
    fireEvent.blur(input);
    expect(input).toHaveValue('#ff0000zz');
  });

  it('makes input read-only when disallowInput is set', () => {
    renderWithProvider(<ColorInput label="Color" disallowInput />);
    expect(screen.getByLabelText('Color')).toHaveAttribute('readonly');
  });

  it('calls onChangeEnd with value converted to format when a valid color is entered', async () => {
    const spy = jest.fn();
    renderWithProvider(<ColorInput label="Color" format="rgb" onChangeEnd={spy} />);
    await userEvent.type(screen.getByLabelText('Color'), '#ff0000');
    expect(spy).toHaveBeenLastCalledWith('rgb(255, 0, 0)');
  });
});
