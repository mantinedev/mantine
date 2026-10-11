import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { ColorPicker, ColorPickerProps, ColorPickerStylesNames } from './ColorPicker';

const defaultProps: ColorPickerProps = {
  format: 'rgba',
  swatches: ['#fff'],
};

describe('@mantine/core/ColorPicker', () => {
  tests.axe([
    <ColorPicker
      {...defaultProps}
      format="rgba"
      saturationLabel="Saturation"
      alphaLabel="Alpha"
      hueLabel="Hue"
      key="1"
    />,
  ]);

  tests.itSupportsSystemProps<ColorPickerProps, ColorPickerStylesNames>({
    component: ColorPicker,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/ColorPicker',
    stylesApiSelectors: [
      'wrapper',
      'preview',
      'body',
      'sliders',
      'swatches',
      'swatch',
      'saturation',
      'saturationOverlay',
      'slider',
      'thumb',
    ],
  });

  it('renders swatches based on swatches prop', () => {
    const { rerender, container } = render(<ColorPicker swatches={['#fff']} />);
    expect(container.querySelector('.mantine-ColorPicker-swatches')).toBeInTheDocument();

    rerender(<ColorPicker />);
    expect(container.querySelector('.mantine-ColorPicker-swatches')).not.toBeInTheDocument();
  });

  it('renders AlphaSlider based on format prop', () => {
    const { rerender, container } = render(<ColorPicker format="rgba" />);
    expect(container.querySelector('[data-alpha]')).toBeInTheDocument();

    rerender(<ColorPicker format="hex" />);
    expect(container.querySelector('[data-alpha]')).not.toBeInTheDocument();
  });

  it('renders picker based on withPicker prop', () => {
    const { rerender, container } = render(<ColorPicker withPicker />);
    expect(container.querySelector('.mantine-ColorPicker-saturation')).toBeInTheDocument();

    rerender(<ColorPicker withPicker={false} />);
    expect(container.querySelector('.mantine-ColorPicker-saturation')).not.toBeInTheDocument();
  });

  it('calls onChangeEnd when swatch is clicked', async () => {
    const spy = jest.fn();
    const { container } = render(
      <ColorPicker onChangeEnd={spy} format="hex" swatches={['#ffffff', '#000000']} />
    );
    await userEvent.click(container.querySelectorAll('.mantine-ColorSwatch-root')[0]);
    expect(spy).toHaveBeenCalledWith('#ffffff');
  });

  it('calls onColorSwatchClick when swatch is clicked', async () => {
    const spy = jest.fn();
    const { container } = render(
      <ColorPicker onColorSwatchClick={spy} format="hex" swatches={['#ffffff', '#000000']} />
    );
    await userEvent.click(container.querySelectorAll('.mantine-ColorSwatch-root')[0]);
    expect(spy).toHaveBeenCalledWith('#ffffff');
  });

  it('sets radius css variable', () => {
    const { container, rerender } = render(<ColorPicker />);
    const getWrapper = () => container.querySelector('.mantine-ColorPicker-wrapper') as HTMLElement;
    expect(getWrapper().style.getPropertyValue('--cp-radius')).toBe(
      'var(--mantine-radius-default)'
    );

    rerender(<ColorPicker radius="xl" />);
    expect(getWrapper().style.getPropertyValue('--cp-radius')).toBe('var(--mantine-radius-xl)');

    rerender(<ColorPicker radius={4} />);
    expect(getWrapper().style.getPropertyValue('--cp-radius')).toBe(
      'calc(0.25rem * var(--mantine-scale))'
    );
  });

  it('displays 10 swatches per row by default', () => {
    const { container } = render(<ColorPicker swatches={['#ffffff']} />);
    const wrapper = container.querySelector('.mantine-ColorPicker-wrapper') as HTMLElement;
    expect(wrapper.style.getPropertyValue('--cp-swatch-size')).toBe('10%');
  });

  it('renders hidden input with given name and value', () => {
    const { container } = render(
      <ColorPicker name="color" value="#ff0000" format="hex" withPicker={false} />
    );
    const input = container.querySelector('input[name="color"]') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('#ff0000');
  });

  const labels = { saturationLabel: 'Saturation', hueLabel: 'Hue', alphaLabel: 'Alpha' };

  it('changes hue with arrow, Home and End keys', async () => {
    const onChange = jest.fn();
    const onChangeEnd = jest.fn();
    render(
      <ColorPicker
        {...labels}
        format="hsla"
        defaultValue="hsla(0, 100%, 50%, 1)"
        onChange={onChange}
        onChangeEnd={onChangeEnd}
      />
    );

    const hue = screen.getByRole('slider', { name: 'Hue' });
    hue.focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(onChange).toHaveBeenLastCalledWith('hsla(18, 100%, 50%, 1)');
    expect(onChangeEnd).toHaveBeenLastCalledWith('hsla(18, 100%, 50%, 1)');

    await userEvent.keyboard('{End}');
    expect(onChangeEnd).toHaveBeenLastCalledWith('hsla(360, 100%, 50%, 1)');

    await userEvent.keyboard('{Home}');
    expect(onChangeEnd).toHaveBeenLastCalledWith('hsla(0, 100%, 50%, 1)');
  });

  it('changes alpha with arrow, Home and End keys', async () => {
    const onChangeEnd = jest.fn();
    render(
      <ColorPicker
        {...labels}
        format="hsla"
        defaultValue="hsla(0, 100%, 50%, 0.5)"
        onChangeEnd={onChangeEnd}
      />
    );

    const alpha = screen.getByRole('slider', { name: 'Alpha' });
    alpha.focus();
    await userEvent.keyboard('{ArrowLeft}');
    expect(onChangeEnd).toHaveBeenLastCalledWith('hsla(0, 100%, 50%, 0.45)');

    await userEvent.keyboard('{Home}');
    expect(onChangeEnd).toHaveBeenLastCalledWith('hsla(0, 100%, 50%, 0)');

    await userEvent.keyboard('{End}');
    expect(onChangeEnd).toHaveBeenLastCalledWith('hsla(0, 100%, 50%, 1)');
  });

  it('changes saturation and brightness with arrow, Home and End keys', async () => {
    const onChangeEnd = jest.fn();
    render(
      <ColorPicker {...labels} format="hex" defaultValue="#808080" onChangeEnd={onChangeEnd} />
    );

    const saturation = screen.getByRole('slider', { name: 'Saturation' });
    saturation.focus();
    await userEvent.keyboard('{ArrowUp}');
    expect(onChangeEnd).toHaveBeenCalledTimes(1);
    const afterUp = onChangeEnd.mock.calls[0][0];
    expect(afterUp).not.toBe('#808080');

    await userEvent.keyboard('{End}');
    expect(saturation).toHaveAttribute('aria-valuenow', '100');

    await userEvent.keyboard('{Home}');
    expect(saturation).toHaveAttribute('aria-valuenow', '0');
  });

  it('exposes readable slider values to assistive technology', () => {
    render(<ColorPicker {...labels} format="rgba" defaultValue="rgba(0, 150, 255, 0.426)" />);

    const saturation = screen.getByRole('slider', { name: 'Saturation' });
    expect(saturation).toHaveAttribute('aria-valuenow', '100');
    expect(saturation).toHaveAttribute('aria-valuemin', '0');
    expect(saturation).toHaveAttribute('aria-valuemax', '100');

    const hueText = screen.getByRole('slider', { name: 'Hue' }).getAttribute('aria-valuetext');
    expect(hueText).toMatch(/^\d+°$/);
    expect(screen.getByRole('slider', { name: 'Alpha' })).toHaveAttribute('aria-valuetext', '43%');
  });
});
