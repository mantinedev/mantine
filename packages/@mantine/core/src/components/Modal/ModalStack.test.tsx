import { act, fireEvent, screen } from '@testing-library/react';
import { render } from '@mantine-tests/core';
import { Drawer } from '../Drawer';
import { Modal } from './Modal';
import { useModalsStack } from './use-modals-stack';

function TestStack({ type }: { type: 'Modal' | 'Drawer' }) {
  const Component = type === 'Modal' ? Modal : Drawer;
  const stack = useModalsStack(['a', 'b']);

  return (
    <>
      <Component.Stack>
        {(['a', 'b'] as const).map((id) => (
          <Component
            key={id}
            {...stack.register(id)}
            onClose={() => act(() => stack.close(id))}
            title={id}
          />
        ))}
      </Component.Stack>
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

describe.each(['Modal', 'Drawer'] as const)('@mantine/core/%s.Stack', (type) => {
  it.each([
    ['a', 'b'],
    ['b', 'a'],
  ] as const)(
    'closes one layer per Escape when opening %s then %s and flushing close effects between listeners',
    (first, second) => {
      render(<TestStack type={type} />);
      fireEvent.click(screen.getByText(`Open ${first}`));
      fireEvent.click(screen.getByText(`Open ${second}`));
      expect(screen.getByTestId('state')).toHaveTextContent('{"a":true,"b":true}');

      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      expect(screen.getByTestId('state')).toHaveTextContent(
        JSON.stringify({ a: first === 'a', b: first === 'b' })
      );

      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      expect(screen.getByTestId('state')).toHaveTextContent('{"a":false,"b":false}');
    }
  );

  it('handles Escape independently in separate stacks', () => {
    render(
      <>
        <TestStack type={type} />
        <TestStack type={type} />
      </>
    );
    screen.getAllByText('Open b').forEach((button) => fireEvent.click(button));
    screen.getAllByText('Open a').forEach((button) => fireEvent.click(button));

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    screen.getAllByTestId('state').forEach((state) => {
      expect(state).toHaveTextContent('{"a":false,"b":true}');
    });
  });

  it('allows the handled Escape event to reach other listeners', () => {
    render(<TestStack type={type} />);
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
        <TestStack type={type} />
        <input data-testid="input" data-mantine-stop-propagation="true" />
      </>
    );
    fireEvent.click(screen.getByText('Open b'));
    fireEvent.click(screen.getByText('Open a'));

    fireEvent.keyDown(document.body, { key: 'Escape', isComposing: true });
    expect(screen.getByTestId('state')).toHaveTextContent('{"a":true,"b":true}');

    fireEvent.keyDown(screen.getByTestId('input'), { key: 'Escape' });
    expect(screen.getByTestId('state')).toHaveTextContent('{"a":true,"b":true}');

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(screen.getByTestId('state')).toHaveTextContent('{"a":false,"b":true}');
  });
});
