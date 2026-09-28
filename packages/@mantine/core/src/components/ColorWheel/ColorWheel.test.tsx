import { fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { ColorWheel, ColorWheelProps, ColorWheelStylesNames } from './ColorWheel';

const defaultProps: ColorWheelProps = {
  'aria-label': 'Test wheel',
};

function mockRect(element: HTMLElement) {
  element.getBoundingClientRect = () =>
    ({ left: 0, top: 0, width: 200, height: 200, right: 200, bottom: 200, x: 0, y: 0 }) as DOMRect;
}

function pointAt(degree: number) {
  const radians = (degree * Math.PI) / 180;
  return { clientX: 100 + 90 * Math.sin(radians), clientY: 100 - 90 * Math.cos(radians) };
}

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

  it('rounds pointer value to the nearest step', () => {
    const onChange = jest.fn();
    const { container } = render(<ColorWheel {...defaultProps} step={30} onChange={onChange} />);
    const root = container.querySelector<HTMLElement>('.mantine-ColorWheel-root')!;
    mockRect(root);

    fireEvent.mouseDown(root, pointAt(46));
    fireEvent.mouseUp(document, pointAt(46));
    expect(onChange).toHaveBeenLastCalledWith(60);
  });

  it('removes document listeners when unmounted during a drag', () => {
    const onChange = jest.fn();
    const onChangeEnd = jest.fn();
    const onScrubEnd = jest.fn();
    const { container, unmount } = render(
      <ColorWheel
        {...defaultProps}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onScrubEnd={onScrubEnd}
      />
    );
    const root = container.querySelector<HTMLElement>('.mantine-ColorWheel-root')!;
    mockRect(root);

    fireEvent.mouseDown(root, pointAt(40));
    fireEvent.mouseMove(document, pointAt(50));
    unmount();
    onChange.mockClear();
    fireEvent.mouseMove(document, pointAt(55));
    fireEvent.mouseUp(document, pointAt(60));

    expect(onChange).not.toHaveBeenCalled();
    expect(onChangeEnd).not.toHaveBeenCalled();
    expect(onScrubEnd).not.toHaveBeenCalled();
  });

  it('uses the latest props during a drag', () => {
    const onChange = jest.fn();
    const onChangeEnd = jest.fn();
    const { container, rerender } = render(
      <ColorWheel {...defaultProps} onChange={onChange} onChangeEnd={onChangeEnd} />
    );
    const root = container.querySelector<HTMLElement>('.mantine-ColorWheel-root')!;
    mockRect(root);

    fireEvent.mouseDown(root, pointAt(40));
    expect(onChange).toHaveBeenLastCalledWith(40);

    rerender(
      <>
        <ColorWheel {...defaultProps} onChange={onChange} onChangeEnd={onChangeEnd} disabled />
      </>
    );
    onChange.mockClear();
    fireEvent.mouseMove(document, pointAt(90));
    fireEvent.mouseUp(document, pointAt(90));

    expect(onChange).not.toHaveBeenCalled();
    expect(onChangeEnd).not.toHaveBeenCalled();
  });

  it('forwards aria-labelledby and aria-describedby to the slider element', () => {
    const { container } = render(
      <ColorWheel aria-labelledby="wheel-label" aria-describedby="wheel-description" />
    );
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-labelledby', 'wheel-label');
    expect(slider).toHaveAttribute('aria-describedby', 'wheel-description');
    expect(container.querySelector('.mantine-ColorWheel-root')).not.toHaveAttribute(
      'aria-labelledby'
    );
  });

  it('wraps keyboard values for steps that do not divide 360', () => {
    const onChange = jest.fn();
    const { rerender } = render(
      <ColorWheel {...defaultProps} value={0} step={7} onChange={onChange} />
    );
    const slider = screen.getByRole('slider');

    fireEvent.keyDown(slider, { key: 'ArrowLeft' });
    expect(onChange).toHaveBeenLastCalledWith(357);

    fireEvent.keyDown(slider, { key: 'End' });
    expect(onChange).toHaveBeenLastCalledWith(357);

    rerender(
      <>
        <ColorWheel {...defaultProps} value={357} step={7} onChange={onChange} />
      </>
    );
    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    expect(onChange).toHaveBeenLastCalledWith(0);

    fireEvent.keyDown(slider, { key: 'ArrowLeft' });
    expect(onChange).toHaveBeenLastCalledWith(350);
  });

  it('focuses the slider element on mousedown without scrolling', () => {
    const onMouseDownCapture = jest.fn();
    const focus = jest.spyOn(HTMLElement.prototype, 'focus');
    const { container } = render(
      <ColorWheel {...defaultProps} onMouseDownCapture={onMouseDownCapture} />
    );
    const root = container.querySelector<HTMLElement>('.mantine-ColorWheel-root')!;
    mockRect(root);
    fireEvent.mouseDown(root, pointAt(90));
    fireEvent.mouseUp(document, pointAt(90));
    expect(screen.getByRole('slider')).toHaveFocus();
    expect(onMouseDownCapture).toHaveBeenCalledTimes(1);
    expect(focus).toHaveBeenCalledWith(expect.objectContaining({ preventScroll: true }));
    focus.mockRestore();
  });

  it('does not focus the slider element on mousedown when disabled', () => {
    const { container } = render(<ColorWheel {...defaultProps} disabled />);
    const root = container.querySelector<HTMLElement>('.mantine-ColorWheel-root')!;
    mockRect(root);
    fireEvent.mouseDown(root, pointAt(90));
    fireEvent.mouseUp(document, pointAt(90));
    expect(screen.getByRole('slider')).not.toHaveFocus();
  });
});
