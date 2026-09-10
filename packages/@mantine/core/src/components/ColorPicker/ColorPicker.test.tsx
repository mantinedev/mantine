import { render, tests, userEvent } from '@mantine-tests/core';
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

    rerender(
      <>
        <ColorPicker radius="xl" />
      </>
    );
    expect(getWrapper().style.getPropertyValue('--cp-radius')).toBe('var(--mantine-radius-xl)');

    rerender(
      <>
        <ColorPicker radius={4} />
      </>
    );
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
});
