import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useFocusWithin } from './use-focus-within';

const Target: React.FunctionComponent = () => {
  const { ref, focused } = useFocusWithin();

  return (
    <div data-testid="container" ref={ref}>
      <span data-testid="focused">{focused ? 'true' : 'false'}</span>
      <input data-testid="input" />
    </div>
  );
};

// Test component for stale closure fix (issue #8507)
const StaleClosureTarget: React.FunctionComponent = () => {
  const [focusCount, setFocusCount] = useState(0);
  const [blurCount, setBlurCount] = useState(0);

  const { ref } = useFocusWithin({
    onFocus: () => {
      setFocusCount(focusCount + 1);
    },
    onBlur: () => {
      setBlurCount(blurCount + 1);
    },
  });

  return (
    <div data-testid="container" ref={ref}>
      <span data-testid="focus-count">{focusCount}</span>
      <span data-testid="blur-count">{blurCount}</span>
      <input data-testid="input" />
    </div>
  );
};

describe('@mantine/hooks/use-focus-within', () => {
  it('changes `focused` on focusin/focusout correctly', () => {
    render(<Target />);
    const input = screen.getByTestId('input');
    const focused = screen.getByTestId('focused');

    expect(focused).toHaveTextContent('false');

    fireEvent.focusIn(input);
    expect(focused).toHaveTextContent('true');

    fireEvent.focusOut(input);
    expect(focused).toHaveTextContent('false');
  });

  it('calls onFocus and onBlur callbacks with latest state (issue #8507)', () => {
    render(<StaleClosureTarget />);
    const input = screen.getByTestId('input');
    const focusCount = screen.getByTestId('focus-count');
    const blurCount = screen.getByTestId('blur-count');

    expect(focusCount).toHaveTextContent('0');
    expect(blurCount).toHaveTextContent('0');

    // First focus/blur cycle
    fireEvent.focusIn(input);
    expect(focusCount).toHaveTextContent('1');

    fireEvent.focusOut(input);
    expect(blurCount).toHaveTextContent('1');

    // Second focus/blur cycle - should increment to 2, not stay at 1
    fireEvent.focusIn(input);
    expect(focusCount).toHaveTextContent('2');

    fireEvent.focusOut(input);
    expect(blurCount).toHaveTextContent('2');

    // Third focus/blur cycle
    fireEvent.focusIn(input);
    expect(focusCount).toHaveTextContent('3');

    fireEvent.focusOut(input);
    expect(blurCount).toHaveTextContent('3');
  });
});
