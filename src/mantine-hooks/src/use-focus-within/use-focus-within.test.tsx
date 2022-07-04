import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useFocusWithin, UseFocusWithinOptions } from './use-focus-within';

function Wrapper(props: UseFocusWithinOptions) {
  const { ref, focused } = useFocusWithin(props);
  return (
    <div ref={ref}>
      <input />
      <button type="button">Button</button>
      {focused && <div>test-focused</div>}
    </div>
  );
}

describe('@mantine/hooks/use-focus-within', () => {
  it('detects focus on child elements as expected', () => {
    const onBlur = jest.fn();
    const onFocus = jest.fn();

    render(<Wrapper onFocus={onFocus} onBlur={onBlur} />);
    expect(screen.queryAllByText('test-focused')).toHaveLength(0);
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(screen.getByRole('textbox')).toHaveFocus();
    expect(screen.getByText('test-focused')).toBeInTheDocument();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(0);

    userEvent.tab();
    expect(screen.getByRole('button')).toHaveFocus();
    expect(screen.getByText('test-focused')).toBeInTheDocument();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(0);

    userEvent.tab();
    expect(screen.queryAllByText('test-focused')).toHaveLength(0);
    expect(document.body).toHaveFocus();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
