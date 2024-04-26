import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useEventListener } from './use-event-listener';

function Test({ spy }: { spy: () => void }) {
  const ref = useEventListener('click', () => spy());
  return (
    <button ref={ref} type="button">
      Test button
    </button>
  );
}

describe('@mantine/hooks/use-event-listener', () => {
  it('calls given function when event is fired', async () => {
    const spy = jest.fn();
    render(<Test spy={spy} />);
    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
