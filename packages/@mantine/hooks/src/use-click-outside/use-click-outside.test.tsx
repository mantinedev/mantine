import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useClickOutside } from './use-click-outside';

interface UseClickOutsideProps {
  handler: () => void;
  events?: string[] | null;
  nodes?: (HTMLElement | null)[];
  enabled?: boolean;
}

const Target: React.FunctionComponent<UseClickOutsideProps> = ({
  handler,
  events,
  nodes,
  enabled,
}) => {
  const ref = useClickOutside(handler, events, nodes, enabled);
  return <div data-testid="target" ref={ref} />;
};

describe('@mantine/hooks/use-click-outside', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('calls `handler` function when clicked outside target (no `events` given)', async () => {
    const handler = jest.fn();

    render(
      <>
        <Target handler={handler} />
        <div data-testid="outside-target" />
      </>
    );

    const target = screen.getByTestId('target');
    const outsideTarget = screen.getByTestId('outside-target');

    expect(handler).toHaveBeenCalledTimes(0);

    await userEvent.click(target);
    expect(handler).toHaveBeenCalledTimes(0);

    await userEvent.click(outsideTarget);
    expect(handler).toHaveBeenCalledTimes(1);

    await userEvent.click(outsideTarget);
    expect(handler).toHaveBeenCalledTimes(2);

    await userEvent.click(target);
    expect(handler).toHaveBeenCalledTimes(2);
  });

  it('calls `handler` only on given `events`', async () => {
    const handler = jest.fn();
    const events = ['keydown'];

    render(
      <>
        <Target handler={handler} events={events} />
        <div data-testid="outside-target" />
      </>
    );

    const target = screen.getByTestId('target');
    const outsideTarget = screen.getByTestId('outside-target');

    await userEvent.click(target);
    await userEvent.click(outsideTarget);
    expect(handler).toHaveBeenCalledTimes(0);

    await userEvent.type(target, '{enter}');
    await userEvent.type(outsideTarget, '{enter}');
    expect(handler).toHaveBeenCalledTimes(2);
  });

  it('ignores clicks outside the given `nodes`', async () => {
    const handler = jest.fn();

    const Wrapper: React.FunctionComponent = () => {
      const [ignore, setIgnore] = useState<HTMLDivElement | null>(null);
      return (
        <>
          <Target handler={handler} nodes={[ignore]} />
          <div data-testid="ignore-clicks" ref={setIgnore} />
        </>
      );
    };

    render(
      <div>
        <Wrapper />
      </div>
    );

    const ignoreClicks = screen.getByTestId('ignore-clicks');

    await userEvent.click(ignoreClicks);
    expect(handler).toHaveBeenCalledTimes(0);

    const target = screen.getByTestId('target');
    await userEvent.click(target);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('calls the latest handler after rerender (no stale closure)', async () => {
    const first = jest.fn();
    const second = jest.fn();

    const { rerender } = render(
      <>
        <Target handler={first} />
        <div data-testid="outside-target" />
      </>
    );

    rerender(
      <>
        <Target handler={second} />
        <div data-testid="outside-target" />
      </>
    );

    await userEvent.click(screen.getByTestId('outside-target'));

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('does not re-register listeners when handler identity changes', async () => {
    const addSpy = jest.spyOn(document, 'addEventListener');
    const removeSpy = jest.spyOn(document, 'removeEventListener');

    const { rerender } = render(
      <>
        <Target handler={jest.fn()} />
        <div data-testid="outside-target" />
      </>
    );

    const initialAdds = addSpy.mock.calls.filter(([t]) => t === 'mousedown').length;
    const initialRemoves = removeSpy.mock.calls.filter(([t]) => t === 'mousedown').length;

    rerender(
      <>
        <Target handler={jest.fn()} />
        <div data-testid="outside-target" />
      </>
    );

    expect(addSpy.mock.calls.filter(([t]) => t === 'mousedown').length).toBe(initialAdds);
    expect(removeSpy.mock.calls.filter(([t]) => t === 'mousedown').length).toBe(initialRemoves);

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  it('does not call handler when enabled is false', async () => {
    const handler = jest.fn();

    render(
      <>
        <Target handler={handler} enabled={false} />
        <div data-testid="outside-target" />
      </>
    );

    await userEvent.click(screen.getByTestId('outside-target'));
    expect(handler).not.toHaveBeenCalled();
  });

  it('starts calling handler when enabled changes from false to true', async () => {
    const handler = jest.fn();

    const { rerender } = render(
      <>
        <Target handler={handler} enabled={false} />
        <div data-testid="outside-target" />
      </>
    );

    await userEvent.click(screen.getByTestId('outside-target'));
    expect(handler).not.toHaveBeenCalled();

    rerender(
      <>
        <Target handler={handler} enabled />
        <div data-testid="outside-target" />
      </>
    );

    await userEvent.click(screen.getByTestId('outside-target'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('stops calling handler when enabled changes from true to false', async () => {
    const handler = jest.fn();

    const { rerender } = render(
      <>
        <Target handler={handler} enabled />
        <div data-testid="outside-target" />
      </>
    );

    await userEvent.click(screen.getByTestId('outside-target'));
    expect(handler).toHaveBeenCalledTimes(1);

    rerender(
      <>
        <Target handler={handler} enabled={false} />
        <div data-testid="outside-target" />
      </>
    );

    await userEvent.click(screen.getByTestId('outside-target'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('propagates event to handler', async () => {
    const handler = jest.fn();

    render(
      <>
        <Target handler={handler} />
        <div data-testid="outside-target" />
      </>
    );

    const outsideTarget = screen.getByTestId('outside-target');

    await userEvent.click(outsideTarget);

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(expect.any(MouseEvent));

    const event = handler.mock.calls[0][0];
    expect(event).toHaveProperty('type', 'mousedown');
    expect(event).toHaveProperty('target', outsideTarget);
  });
});
