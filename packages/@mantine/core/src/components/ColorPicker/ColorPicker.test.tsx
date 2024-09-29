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
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
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
});
