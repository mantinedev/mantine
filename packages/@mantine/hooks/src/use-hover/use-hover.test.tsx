import { fireEvent, render, screen } from '@testing-library/react';
import { useHover } from './use-hover';
import { useState } from 'react';

const Target: React.FunctionComponent<any> = () => {
  const { ref, hovered } = useHover();

  console.log({hovered});

  return (
    <div data-testid="target" ref={ref}>
      {hovered ? 'true' : 'false'}
    </div>
  );
};

const AppearingTarget: React.FunctionComponent<any> = ({showTarget}: {showTarget: boolean}) => {
  const { ref, hovered } = useHover();

  return showTarget && (
      <div data-testid="target" ref={ref}>
        {hovered ? 'true' : 'false'}
      </div>
    );
};

describe('@mantine/hooks/use-hover', () => {
  it('changes `hovered` on mouseenter/mouseleave correctly', () => {
    render(<Target />);
    const target = screen.getByTestId('target');

    expect(target).toHaveTextContent('false');

    fireEvent.mouseEnter(target);
    expect(target).toHaveTextContent('true');

    fireEvent.mouseLeave(target);
    expect(target).toHaveTextContent('false');
  });

  it('changes `hovered` when element was unmounted at first', async () => {
    const {rerender} = render(<AppearingTarget showTarget={false} />);
    rerender(<AppearingTarget showTarget />);

    const target = screen.getByTestId('target');
    expect(target).toHaveTextContent('false');

    fireEvent.mouseEnter(target);
    expect(target).toHaveTextContent('true');

    fireEvent.mouseLeave(target);
    expect(target).toHaveTextContent('false');
  });
});
