import { useState } from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render, renderWithAct } from './render';

function Counter({ label }: { label: string }) {
  const [count, setCount] = useState(0);
  return (
    <button type="button" onClick={() => setCount((c) => c + 1)}>
      {label}: {count}
    </button>
  );
}

describe('@mantine-tests/core/render', () => {
  it('keeps component state when rerender is called without a fragment', () => {
    const { rerender } = render(<Counter label="a" />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveTextContent('a: 1');

    rerender(<Counter label="b" />);
    expect(screen.getByRole('button')).toHaveTextContent('b: 1');
  });

  it('keeps component state when rerender is called after renderWithAct', async () => {
    const { rerender } = await renderWithAct(<Counter label="a" />);
    fireEvent.click(screen.getByRole('button'));
    rerender(<Counter label="b" />);
    expect(screen.getByRole('button')).toHaveTextContent('b: 1');
  });
});
