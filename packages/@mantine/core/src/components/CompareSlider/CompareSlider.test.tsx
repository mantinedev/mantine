import { fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { CompareSlider, CompareSliderProps, CompareSliderStylesNames } from './CompareSlider';

const defaultProps: CompareSliderProps = {
  'aria-label': 'Test compare slider',
  before: <div>Before</div>,
  after: <div>After</div>,
};

describe('@mantine/core/CompareSlider', () => {
  tests.axe([<CompareSlider {...defaultProps} />]);

  tests.itSupportsSystemProps<CompareSliderProps, CompareSliderStylesNames>({
    component: CompareSlider,
    props: defaultProps,
    displayName: '@mantine/core/CompareSlider',
    stylesApiSelectors: ['root', 'before', 'after', 'divider', 'handle'],
  });

  it('renders before and after content', () => {
    render(<CompareSlider {...defaultProps} />);
    expect(screen.getByText('Before')).toBeInTheDocument();
    expect(screen.getByText('After')).toBeInTheDocument();
  });

  it('sets slider aria attributes based on the position', () => {
    render(<CompareSlider {...defaultProps} position={40} />);
    const handle = screen.getByRole('slider');
    expect(handle).toHaveAttribute('aria-valuenow', '40');
    expect(handle).toHaveAttribute('aria-valuemin', '0');
    expect(handle).toHaveAttribute('aria-valuemax', '100');
    expect(handle).toHaveAttribute('aria-valuetext', '40%');
    expect(handle).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('sets aria-orientation based on the orientation prop', () => {
    render(<CompareSlider {...defaultProps} orientation="vertical" />);
    expect(screen.getByRole('slider')).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('forwards aria-labelledby to the slider handle', () => {
    render(<CompareSlider before="Before" after="After" aria-labelledby="label-id" />);
    expect(screen.getByRole('slider')).toHaveAttribute('aria-labelledby', 'label-id');
  });

  it('sets handle tabIndex to -1 when disabled', () => {
    render(<CompareSlider {...defaultProps} disabled />);
    expect(screen.getByRole('slider')).toHaveAttribute('tabindex', '-1');
  });

  it('changes position with the keyboard', () => {
    const onPositionChange = jest.fn();
    render(<CompareSlider {...defaultProps} position={50} onPositionChange={onPositionChange} />);
    const handle = screen.getByRole('slider');

    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    expect(onPositionChange).toHaveBeenLastCalledWith(55);

    fireEvent.keyDown(handle, { key: 'ArrowLeft' });
    expect(onPositionChange).toHaveBeenLastCalledWith(45);
  });

  it('respects keyboardStep', () => {
    const onPositionChange = jest.fn();
    render(
      <CompareSlider
        {...defaultProps}
        position={50}
        keyboardStep={20}
        onPositionChange={onPositionChange}
      />
    );

    fireEvent.keyDown(screen.getByRole('slider'), { key: 'ArrowRight' });
    expect(onPositionChange).toHaveBeenLastCalledWith(70);
  });

  it('sets position to 0 with Home and to 100 with End', () => {
    const onPositionChange = jest.fn();
    render(<CompareSlider {...defaultProps} position={40} onPositionChange={onPositionChange} />);
    const handle = screen.getByRole('slider');

    fireEvent.keyDown(handle, { key: 'Home' });
    expect(onPositionChange).toHaveBeenLastCalledWith(0);

    fireEvent.keyDown(handle, { key: 'End' });
    expect(onPositionChange).toHaveBeenLastCalledWith(100);
  });

  it('clamps position within the 0-100 range', () => {
    const onPositionChange = jest.fn();
    const { rerender } = render(
      <CompareSlider {...defaultProps} position={0} onPositionChange={onPositionChange} />
    );

    fireEvent.keyDown(screen.getByRole('slider'), { key: 'ArrowLeft' });
    expect(onPositionChange).toHaveBeenLastCalledWith(0);

    rerender(
      <CompareSlider {...defaultProps} position={100} onPositionChange={onPositionChange} />
    );
    fireEvent.keyDown(screen.getByRole('slider'), { key: 'ArrowRight' });
    expect(onPositionChange).toHaveBeenLastCalledWith(100);
  });

  it('inverts arrow keys direction for vertical orientation', () => {
    const onPositionChange = jest.fn();
    render(
      <CompareSlider
        {...defaultProps}
        orientation="vertical"
        position={50}
        onPositionChange={onPositionChange}
      />
    );
    const handle = screen.getByRole('slider');

    fireEvent.keyDown(handle, { key: 'ArrowDown' });
    expect(onPositionChange).toHaveBeenLastCalledWith(55);

    fireEvent.keyDown(handle, { key: 'ArrowUp' });
    expect(onPositionChange).toHaveBeenLastCalledWith(45);
  });

  it('does not change position for unsupported keys', () => {
    const onPositionChange = jest.fn();
    render(<CompareSlider {...defaultProps} position={50} onPositionChange={onPositionChange} />);
    const handle = screen.getByRole('slider');

    fireEvent.keyDown(handle, { key: 'Tab' });
    fireEvent.keyDown(handle, { key: 'a' });
    expect(onPositionChange).not.toHaveBeenCalled();
  });

  it('does not change position with the keyboard when disabled', () => {
    const onPositionChange = jest.fn();
    render(
      <CompareSlider {...defaultProps} position={50} disabled onPositionChange={onPositionChange} />
    );

    fireEvent.keyDown(screen.getByRole('slider'), { key: 'ArrowRight' });
    expect(onPositionChange).not.toHaveBeenCalled();
  });

  it('forwards onMouseMove passed via props', () => {
    const onMouseMove = jest.fn();
    render(<CompareSlider {...defaultProps} changePositionOnHover onMouseMove={onMouseMove} />);

    const root = screen.getByRole('slider').closest('.mantine-CompareSlider-root')!;
    fireEvent.mouseMove(root);
    expect(onMouseMove).toHaveBeenCalled();
  });

  it('hides the handle when withHandle is false but keeps it focusable', () => {
    render(<CompareSlider {...defaultProps} withHandle={false} />);
    const handle = screen.getByRole('slider');
    expect(handle).toHaveAttribute('data-hidden');
    expect(handle).toHaveAttribute('tabindex', '0');
  });

  it('forwards aria-describedby to the slider handle', () => {
    render(<CompareSlider {...defaultProps} aria-describedby="description-id" />);
    expect(screen.getByRole('slider')).toHaveAttribute('aria-describedby', 'description-id');
  });

  it('focuses the slider handle on mousedown on the root without scrolling', () => {
    const onMouseDownCapture = jest.fn();
    const focus = jest.spyOn(HTMLElement.prototype, 'focus');
    render(<CompareSlider {...defaultProps} onMouseDownCapture={onMouseDownCapture} />);
    fireEvent.mouseDown(screen.getByText('Before'));
    expect(screen.getByRole('slider')).toHaveFocus();
    expect(onMouseDownCapture).toHaveBeenCalledTimes(1);
    expect(focus).toHaveBeenCalledWith(expect.objectContaining({ preventScroll: true }));
    focus.mockRestore();
  });

  it('focuses the slider handle on touchstart on the root', () => {
    const onTouchStartCapture = jest.fn();
    render(<CompareSlider {...defaultProps} onTouchStartCapture={onTouchStartCapture} />);
    fireEvent.touchStart(screen.getByText('After'), {
      changedTouches: [{ clientX: 0, clientY: 0 }],
    });
    expect(screen.getByRole('slider')).toHaveFocus();
    expect(onTouchStartCapture).toHaveBeenCalledTimes(1);
  });

  it('focuses the hidden slider handle on mousedown when withHandle is false', () => {
    render(<CompareSlider {...defaultProps} withHandle={false} />);
    fireEvent.mouseDown(screen.getByText('Before'));
    expect(screen.getByRole('slider')).toHaveFocus();
  });

  it('does not focus the slider handle on mousedown when disabled', () => {
    render(<CompareSlider {...defaultProps} disabled />);
    fireEvent.mouseDown(screen.getByText('Before'));
    expect(screen.getByRole('slider')).not.toHaveFocus();
  });
});
