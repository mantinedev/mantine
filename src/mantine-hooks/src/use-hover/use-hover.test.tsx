import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useHover } from './use-hover';

const Target: React.FunctionComponent<any> = () => {
  const { ref, hovered } = useHover();

  return (
    <div data-testid="target" ref={ref}>
      {hovered ? 'true' : 'false'}
    </div>
  );
};

describe('@mantine/hooks/use-hover', () => {
  render(<Target />);
  const target = screen.getByTestId('target');
  it('changes "hovered" on mouseenter/mouseleave correctly', () => {
    expect(target).toHaveTextContent(/false/i);

    fireEvent.mouseEnter(target);
    expect(target).toHaveTextContent(/true/i);

    fireEvent.mouseLeave(target);
    expect(target).toHaveTextContent(/false/i);
  });
});
