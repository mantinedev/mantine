import { render } from '@mantine-tests/core';
import { HueSlider, HueSliderProps } from './HueSlider';

const defaultProps: HueSliderProps = {
  value: 180,
  onChange: () => {},
};

describe('@mantine/core/HueSlider', () => {
  it('forwards HTML attributes from `...others` to the underlying slider', () => {
    const { container } = render(
      <HueSlider {...defaultProps} data-testid="hue" aria-label="hue-slider" />
    );

    const slider = container.querySelector<HTMLElement>('[data-hue]');
    expect(slider).not.toBeNull();
    expect(slider).toHaveAttribute('data-testid', 'hue');
    expect(slider).toHaveAttribute('aria-label', 'hue-slider');
  });

  it('forwards the `color` HTML attribute (was previously dropped before falling into `...others`)', () => {
    const { container } = render(<HueSlider {...defaultProps} color="red" />);

    const slider = container.querySelector<HTMLElement>('[data-hue]');
    expect(slider).not.toBeNull();
    expect(slider).toHaveAttribute('color', 'red');
  });

  it('still uses `value` to derive the thumb hue (the existing contract is unchanged)', () => {
    const { container } = render(<HueSlider {...defaultProps} value={120} />);

    const slider = container.querySelector<HTMLElement>('[data-hue]');
    expect(slider).not.toBeNull();
    expect(slider!.getAttribute('aria-valuenow')).toBe('120');
  });
});
