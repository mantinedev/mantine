import { act, fireEvent, screen } from '@testing-library/react';
import { render } from '@mantine-tests/core';
import { useDrawersStack } from '../Modal/use-modals-stack';
import { Drawer } from './Drawer';

function TestContainer() {
  const stack = useDrawersStack(['a', 'b']);

  return (
    <>
      <Drawer.Stack>
        {(['a', 'b'] as const).map((id) => (
          <Drawer
            key={id}
            {...stack.register(id)}
            onClose={() => act(() => stack.close(id))}
            title={id}
          />
        ))}
      </Drawer.Stack>
      <button type="button" onClick={() => stack.open('a')}>
        Open a
      </button>
      <button type="button" onClick={() => stack.open('b')}>
        Open b
      </button>
      <output data-testid="state">{JSON.stringify(stack.state)}</output>
    </>
  );
}

function pressEscape() {
  document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
}

describe('@mantine/core/Drawer.Stack', () => {
  it.each([
    ['a', 'b'],
    ['b', 'a'],
  ] as const)(
    'closes one layer per Escape when opening %s then %s and flushing close effects between listeners',
    (first, second) => {
      render(<TestContainer />);
      fireEvent.click(screen.getByText(`Open ${first}`));
      fireEvent.click(screen.getByText(`Open ${second}`));
      expect(screen.getByTestId('state')).toHaveTextContent('{"a":true,"b":true}');

      pressEscape();
      expect(screen.getByTestId('state')).toHaveTextContent(
        JSON.stringify({ a: first === 'a', b: first === 'b' })
      );

      pressEscape();
      expect(screen.getByTestId('state')).toHaveTextContent('{"a":false,"b":false}');
    }
  );

  it('handles Escape independently in separate stacks', () => {
    render(
      <>
        <TestContainer />
        <TestContainer />
      </>
    );
    screen.getAllByText('Open b').forEach((button) => fireEvent.click(button));
    screen.getAllByText('Open a').forEach((button) => fireEvent.click(button));

    pressEscape();
    screen.getAllByTestId('state').forEach((state) => {
      expect(state).toHaveTextContent('{"a":false,"b":true}');
    });
  });

  it('allows the handled Escape event to reach other listeners', () => {
    render(<TestContainer />);
    fireEvent.click(screen.getByText('Open b'));
    fireEvent.click(screen.getByText('Open a'));

    const listener = jest.fn();
    document.body.addEventListener('keydown', listener, { once: true });
    const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
    document.body.dispatchEvent(event);

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(event);
    expect(event.defaultPrevented).toBe(false);
    expect(screen.getByTestId('state')).toHaveTextContent('{"a":false,"b":true}');
  });

  it('ignores composing Escape events and targets that stop propagation', () => {
    render(
      <>
        <TestContainer />
        <input data-testid="input" data-mantine-stop-propagation="true" />
      </>
    );
    fireEvent.click(screen.getByText('Open b'));
    fireEvent.click(screen.getByText('Open a'));

    fireEvent.keyDown(document.body, { key: 'Escape', isComposing: true });
    expect(screen.getByTestId('state')).toHaveTextContent('{"a":true,"b":true}');

    fireEvent.keyDown(screen.getByTestId('input'), { key: 'Escape' });
    expect(screen.getByTestId('state')).toHaveTextContent('{"a":true,"b":true}');

    pressEscape();
    expect(screen.getByTestId('state')).toHaveTextContent('{"a":false,"b":true}');
  });
});
