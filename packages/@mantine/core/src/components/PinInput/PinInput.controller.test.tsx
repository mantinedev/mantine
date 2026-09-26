import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@mantine-tests/core';
import { PinInput } from './PinInput';
import { usePinInput, PinInputController } from './use-pin-input/use-pin-input';

const getInputs = (container: HTMLElement) =>
  container.querySelectorAll<HTMLInputElement>('.mantine-PinInput-input');

const getInputValues = (container: HTMLElement) =>
  Array.from(getInputs(container)).map((input) => input.value);

describe('@mantine/core/PinInput/controller', () => {
  it('takes the value from the controller and ignores value, defaultValue and onChange', () => {
    const onChange = jest.fn();
    let controller: PinInputController = null as any;

    function Test() {
      controller = usePinInput({ defaultValue: '12' });
      return (
        <PinInput
          controller={controller}
          value="99"
          defaultValue="88"
          onChange={onChange}
          length={6}
        />
      );
    }

    const { container } = render(<Test />);
    expect(getInputValues(container)).toEqual(['1', '2', '', '']);

    act(() => controller.setValue('1234'));
    expect(getInputValues(container)).toEqual(['1', '2', '3', '4']);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('takes the number of inputs from the controller', () => {
    function Test() {
      const controller = usePinInput({ length: 6 });
      return <PinInput controller={controller} length={2} />;
    }

    const { container } = render(<Test />);
    expect(getInputs(container)).toHaveLength(6);
  });

  it('calls the controller onComplete when the user fills all inputs', async () => {
    const onComplete = jest.fn();

    function Test() {
      const controller = usePinInput({ onComplete });
      return <PinInput controller={controller} />;
    }

    const { container } = render(<Test />);
    const inputs = getInputs(container);

    await userEvent.type(inputs[0], '1');
    await userEvent.type(inputs[1], '2');
    await userEvent.type(inputs[2], '3');
    await userEvent.type(inputs[3], '4');

    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(onComplete).toHaveBeenLastCalledWith('1234');
  });

  it('reflects user input on the controller state', async () => {
    let controller: PinInputController = null as any;

    function Test() {
      controller = usePinInput();
      return <PinInput controller={controller} />;
    }

    const { container } = render(<Test />);
    await userEvent.type(getInputs(container)[0], '1');

    expect(controller.value).toBe('1');
    expect(controller.isComplete()).toBe(false);
  });

  it('focuses inputs registered by the component', () => {
    let controller: PinInputController = null as any;

    function Test() {
      controller = usePinInput();
      return <PinInput controller={controller} />;
    }

    const { container } = render(<Test />);
    const inputs = getInputs(container);

    act(() => controller.focus(2));
    expect(inputs[2]).toHaveFocus();
    expect(controller.getInputNode(2)).toBe(inputs[2]);

    act(() => controller.focusPrevious());
    expect(inputs[1]).toHaveFocus();

    act(() => controller.focusNext());
    expect(inputs[2]).toHaveFocus();
  });

  it('chains focus actions within one event', () => {
    let controller: PinInputController = null as any;

    function Test() {
      controller = usePinInput();
      return <PinInput controller={controller} />;
    }

    const { container } = render(<Test />);
    const inputs = getInputs(container);

    act(() => {
      controller.focus(1);
      controller.focusNext();
    });

    expect(inputs[2]).toHaveFocus();
  });

  it('steps focus from the last focused input when called from an outside button', async () => {
    let controller: PinInputController = null as any;

    function Test() {
      controller = usePinInput({ length: 6 });
      return (
        <>
          <PinInput controller={controller} />
          <button type="button" onClick={() => controller.focusNext()}>
            next
          </button>
          <button type="button" onClick={() => controller.focusPrevious()}>
            previous
          </button>
        </>
      );
    }

    const { container, getByText } = render(<Test />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[2]);
    await userEvent.click(getByText('next'));
    expect(inputs[3]).toHaveFocus();
    expect(controller.getFocusedIndex()).toBe(3);

    await userEvent.click(getByText('previous'));
    expect(inputs[2]).toHaveFocus();

    await userEvent.click(getByText('previous'));
    expect(inputs[1]).toHaveFocus();
  });

  it('tracks focusedIndex through the controller', async () => {
    let controller: PinInputController = null as any;

    function Test() {
      controller = usePinInput();
      return <PinInput controller={controller} />;
    }

    const { container } = render(<Test />);
    const inputs = getInputs(container);

    expect(controller.focusedIndex).toBe(-1);
    await userEvent.click(inputs[2]);
    expect(controller.focusedIndex).toBe(2);

    await userEvent.tab();
    expect(controller.focusedIndex).toBe(3);
  });

  it('clears all inputs with controller.clear', () => {
    let controller: PinInputController = null as any;

    function Test() {
      controller = usePinInput({ defaultValue: '1234' });
      return <PinInput controller={controller} />;
    }

    const { container } = render(<Test />);
    expect(getInputValues(container)).toEqual(['1', '2', '3', '4']);

    act(() => controller.clear());
    expect(getInputValues(container)).toEqual(['', '', '', '']);
  });

  it('unregisters inputs when the component unmounts', () => {
    let controller: PinInputController = null as any;

    function Test({ mounted }: { mounted: boolean }) {
      controller = usePinInput();
      return mounted ? <PinInput controller={controller} /> : null;
    }

    const { rerender } = render(<Test mounted />);
    expect(controller.getInputNode(0)).not.toBe(null);

    rerender(<Test mounted={false} />);

    expect(controller.getInputNode(0)).toBe(null);
  });
});
