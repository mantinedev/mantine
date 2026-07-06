import { fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { ColorWheel, ColorWheelProps, ColorWheelStylesNames } from './ColorWheel';

const defaultProps: ColorWheelProps = {
  'aria-label': 'Test wheel',
};

describe('@mantine/core/ColorWheel', () => {
  tests.axe([<ColorWheel {...defaultProps} />]);

  tests.itSupportsSystemProps<ColorWheelProps, ColorWheelStylesNames>({
    component: ColorWheel,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/ColorWheel',
    stylesApiSelectors: ['root', 'thumb'],
  });

  it('sets slider aria attributes based on the value', () => {
    render(<ColorWheel {...defaultProps} value={120} />);
    const thumb = screen.getByRole('slider');
    expect(thumb).toHaveAttribute('aria-valuenow', '120');
    expect(thumb).toHaveAttribute('aria-valuemin', '0');
    expect(thumb).toHaveAttribute('aria-valuemax', '360');
    expect(thumb).toHaveAttribute('aria-valuetext', '120°');
  });

  it('renders hidden input with correct name and value', () => {
    const { container } = render(<ColorWheel {...defaultProps} value={120} name="test-name" />);
    const input = container.querySelector('input[type="hidden"]');
    expect(input).toHaveAttribute('name', 'test-name');
    expect(input).toHaveAttribute('value', '120');
  });

  it('sets thumb tabIndex to -1 when disabled', () => {
    render(<ColorWheel {...defaultProps} disabled />);
    expect(screen.getByRole('slider')).toHaveAttribute('tabindex', '-1');
  });

  it('changes value with the keyboard', () => {
    const onChange = jest.fn();
    const onChangeEnd = jest.fn();
    render(
      <ColorWheel {...defaultProps} value={100} onChange={onChange} onChangeEnd={onChangeEnd} />
    );

    fireEvent.keyDown(screen.getByRole('slider'), { key: 'ArrowRight' });
    expect(onChange).toHaveBeenLastCalledWith(101);
    expect(onChangeEnd).toHaveBeenLastCalledWith(101);
  });

  it('respects step when wrapping around with the keyboard', () => {
    const onChange = jest.fn();
    render(<ColorWheel {...defaultProps} value={0} step={30} onChange={onChange} />);
    const slider = screen.getByRole('slider');

    fireEvent.keyDown(slider, { key: 'ArrowLeft' });
    expect(onChange).toHaveBeenLastCalledWith(330);

    fireEvent.keyDown(slider, { key: 'End' });
    expect(onChange).toHaveBeenLastCalledWith(330);
  });

  it('wraps to 0 when increasing past the maximum value', () => {
    const onChange = jest.fn();
    render(<ColorWheel {...defaultProps} value={330} step={30} onChange={onChange} />);
    fireEvent.keyDown(screen.getByRole('slider'), { key: 'ArrowRight' });
    expect(onChange).toHaveBeenLastCalledWith(0);
  });

  it('keeps value within the 0-360 range for steps that do not divide 360', () => {
    const onChange = jest.fn();
    render(<ColorWheel {...defaultProps} value={351} step={7} onChange={onChange} />);
    fireEvent.keyDown(screen.getByRole('slider'), { key: 'ArrowRight' });
    const value = onChange.mock.calls.at(-1)![0];
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThan(360);
  });

  it('does not fire change callbacks for unsupported keys', () => {
    const onChange = jest.fn();
    const onChangeEnd = jest.fn();
    render(
      <ColorWheel {...defaultProps} value={100} onChange={onChange} onChangeEnd={onChangeEnd} />
    );

    fireEvent.keyDown(screen.getByRole('slider'), { key: 'Tab' });
    fireEvent.keyDown(screen.getByRole('slider'), { key: 'a' });
    expect(onChange).not.toHaveBeenCalled();
    expect(onChangeEnd).not.toHaveBeenCalled();
  });
});
