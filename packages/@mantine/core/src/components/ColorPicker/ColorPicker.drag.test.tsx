import { useState } from 'react';
import { act, fireEvent } from '@testing-library/react';
import { render } from '@mantine-tests/core';
import { ColorPicker, ColorPickerProps } from './ColorPicker';

function ControlledPicker(props: ColorPickerProps) {
  const [value, setValue] = useState('rgba(153, 77, 77, 1)');

  return (
    <ColorPicker
      {...props}
      value={value}
      onChange={(color) => {
        setValue(color);
        props.onChange?.(color);
      }}
    />
  );
}

function movePointer(target: Element, x: number, start = false) {
  if (start) {
    fireEvent.mouseDown(target, { clientX: x, clientY: 40 });
  } else {
    fireEvent.mouseMove(document, { clientX: x, clientY: 40 });
  }

  act(() => jest.advanceTimersByTime(20));
}

describe('@mantine/core/ColorPicker dragging', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it.each(['controlled', 'uncontrolled'])(
    'reports the current color after repeated positions in %s mode',
    (mode) => {
      const onChange = jest.fn();
      const onChangeEnd = jest.fn();
      const props = { format: 'rgba', onChange, onChangeEnd } as const;
      const { container } = render(
        mode === 'controlled' ? (
          <ControlledPicker {...props} />
        ) : (
          <ColorPicker {...props} defaultValue="rgba(153, 77, 77, 1)" />
        )
      );
      const target = container.querySelector('.mantine-ColorPicker-saturation')!;
      jest.spyOn(target, 'getBoundingClientRect').mockReturnValue(new DOMRect(0, 0, 100, 100));

      const positions = [20, 20.1, 20.2, 35, 35.1, 35.2, 95];
      const colors = [
        'rgba(153, 122, 122, 1)',
        'rgba(153, 122, 122, 1)',
        'rgba(153, 122, 122, 1)',
        'rgba(153, 99, 99, 1)',
        'rgba(153, 99, 99, 1)',
        'rgba(153, 99, 99, 1)',
        'rgba(153, 8, 8, 1)',
      ];

      positions.forEach((x, index) => {
        movePointer(target, x, index === 0);
        expect(onChange).toHaveBeenNthCalledWith(index + 1, colors[index]);
        expect(onChangeEnd).not.toHaveBeenCalled();
      });

      fireEvent.mouseUp(document);
      act(() => jest.advanceTimersByTime(20));

      expect(onChange).toHaveBeenCalledTimes(positions.length);
      expect(onChangeEnd).toHaveBeenCalledTimes(1);
      expect(onChangeEnd).toHaveBeenLastCalledWith(colors[colors.length - 1]);
    }
  );

  it('uses a changed controlled value for the next drag', () => {
    const onChange = jest.fn();
    const { container, rerender } = render(
      <ColorPicker value="#ff0000" format="rgba" onChange={onChange} />
    );
    rerender(
      <>
        <ColorPicker value="#0000ff" format="rgba" onChange={onChange} />
      </>
    );

    const target = container.querySelector('.mantine-ColorPicker-saturation')!;
    jest.spyOn(target, 'getBoundingClientRect').mockReturnValue(new DOMRect(0, 0, 100, 100));

    movePointer(target, 50, true);

    expect(onChange).toHaveBeenLastCalledWith('rgba(77, 77, 153, 1)');
    fireEvent.mouseUp(document);
    act(() => jest.advanceTimersByTime(20));
  });

  it('uses an uncontrolled swatch selection for the next drag', () => {
    const onChange = jest.fn();
    const { container } = render(
      <ColorPicker
        defaultValue="#ff0000"
        format="rgba"
        swatches={['#0000ff']}
        onChange={onChange}
      />
    );

    fireEvent.click(container.querySelector('[data-swatch]')!);
    const target = container.querySelector('.mantine-ColorPicker-saturation')!;
    jest.spyOn(target, 'getBoundingClientRect').mockReturnValue(new DOMRect(0, 0, 100, 100));

    movePointer(target, 50, true);

    expect(onChange).toHaveBeenLastCalledWith('rgba(77, 77, 153, 1)');
    fireEvent.mouseUp(document);
    act(() => jest.advanceTimersByTime(20));
  });
});
