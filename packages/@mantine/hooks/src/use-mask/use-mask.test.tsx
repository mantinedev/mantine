import { useMemo, useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useMask, UseMaskOptions } from './use-mask';

function InlineOptionsInput() {
  const { ref } = useMask({ mask: '99.08.2026' });
  return <input aria-label="date" ref={ref} />;
}

function MemoizedOptionsInput() {
  const options = useMemo<UseMaskOptions>(() => ({ mask: '99.08.2026' }), []);
  const { ref } = useMask(options);
  return <input aria-label="date" ref={ref} />;
}

function OnCompleteInput({ onComplete }: { onComplete: UseMaskOptions['onComplete'] }) {
  const { ref } = useMask({ mask: '999', onComplete });
  return <input aria-label="code" ref={ref} />;
}

function RefIdentityInput({ onRef }: { onRef: (ref: unknown) => void }) {
  const [, setCount] = useState(0);
  const { ref } = useMask({ mask: '999' });
  onRef(ref);
  return (
    <>
      <input aria-label="code" ref={ref} />
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        rerender
      </button>
    </>
  );
}

describe('@mantine/hooks/use-mask', () => {
  it('does not parse slot placeholders back into the value when the ref is reattached', async () => {
    render(<InlineOptionsInput />);
    const input = screen.getByLabelText('date');

    await userEvent.click(input);
    expect(input).toHaveValue('__.08.2026');

    await userEvent.keyboard('01');
    expect(input).toHaveValue('01.08.2026');
  });

  it('does not parse slot placeholders back into the value with memoized options', async () => {
    render(<MemoizedOptionsInput />);
    const input = screen.getByLabelText('date');

    await userEvent.click(input);
    expect(input).toHaveValue('__.08.2026');

    await userEvent.keyboard('0');
    expect(input).toHaveValue('0_.08.2026');

    await userEvent.keyboard('1');
    expect(input).toHaveValue('01.08.2026');
  });

  it('calls onComplete once and again after the value is cleared and refilled', async () => {
    const onComplete = jest.fn();
    render(<OnCompleteInput onComplete={onComplete} />);
    const input = screen.getByLabelText('code');

    await userEvent.click(input);
    await userEvent.keyboard('123');
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(onComplete).toHaveBeenLastCalledWith('123', '123');

    await userEvent.keyboard('4');
    expect(onComplete).toHaveBeenCalledTimes(1);

    await userEvent.keyboard('{Backspace}');
    expect(onComplete).toHaveBeenCalledTimes(1);

    await userEvent.keyboard('9');
    expect(onComplete).toHaveBeenCalledTimes(2);
    expect(onComplete).toHaveBeenLastCalledWith('129', '129');
  });

  it('keeps ref callback identity between renders and typing', async () => {
    const refs: unknown[] = [];
    render(<RefIdentityInput onRef={(ref) => refs.push(ref)} />);

    await userEvent.click(screen.getByLabelText('code'));
    await userEvent.keyboard('12');
    await userEvent.click(screen.getByRole('button', { name: 'rerender' }));

    expect(refs.length).toBeGreaterThan(1);
    expect(new Set(refs).size).toBe(1);
  });
});
