import { createRef, useRef } from 'react';
import { render } from '@testing-library/react';
import { useMergedRef } from './use-merged-ref';

function TestComponent({ refs }: { refs: React.ForwardedRef<HTMLButtonElement>[] }) {
  const ref = useRef<HTMLButtonElement>(null);
  return <button ref={useMergedRef(...refs, ref)} type="button" />;
}

describe('@mantine/hook/use-merged-ref', () => {
  it('assigns refs to all given arguments', () => {
    const objectRef = createRef<HTMLButtonElement | null>();
    let fnRefValue: HTMLButtonElement | null = null;
    const fnRef = (node: HTMLButtonElement | null) => {
      fnRefValue = node;
    };

    render(<TestComponent refs={[objectRef, fnRef]} />);
    expect(fnRefValue! instanceof HTMLButtonElement).toBe(true);
    expect(objectRef.current instanceof HTMLButtonElement).toBe(true);
  });

  it('when ref callback does not return a function, ref callback is called with null on unmount', () => {
    const refCalled: unknown[] = [];

    const fnRef = (node: HTMLButtonElement | null) => {
      refCalled.push(node);
    };

    const { unmount } = render(<TestComponent refs={[fnRef]} />);
    expect(refCalled).toEqual([expect.any(HTMLButtonElement)]);

    unmount();
    expect(refCalled).toEqual([expect.any(HTMLButtonElement), null]);
  });
});
