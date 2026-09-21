import { useMemo } from 'react';
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
});
