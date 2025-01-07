/* eslint-disable no-console */
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

  describe('React 19', () => {
    const originalError = console.error;

    beforeAll(() => {
      console.error = jest.fn();
    });

    afterAll(() => {
      console.error = originalError;
    });

    it('when ref callback returns a function, ref callback is called with null on unmount', () => {
      const refCalled: unknown[] = [];
      const cleanupCalled: unknown[] = [];

      const fnRef = (node: HTMLButtonElement | null) => {
        refCalled.push(node);
        return () => {
          cleanupCalled.push(node);
        };
      };

      const { unmount } = render(<TestComponent refs={[fnRef]} />);
      expect(refCalled).toEqual([expect.any(HTMLButtonElement)]);
      expect(cleanupCalled).toEqual([]);

      unmount();
      expect(refCalled).toEqual([expect.any(HTMLButtonElement), null]);
      expect(cleanupCalled).toEqual([]);
    });

    it('when ref callbacks that return a function and those that do not are mixed, each behaves accordingly', () => {
      const refCalled: unknown[] = [];
      const cleanupCalled: unknown[] = [];

      const fnRef = (node: HTMLButtonElement | null) => {
        refCalled.push(node);
        return () => {
          cleanupCalled.push(node);
        };
      };

      const ref2Called: unknown[] = [];
      const fnRef2 = (node: HTMLButtonElement | null) => {
        ref2Called.push(node);
      };

      const { unmount } = render(<TestComponent refs={[fnRef, fnRef2]} />);

      expect(refCalled).toEqual([expect.any(HTMLButtonElement)]);
      expect(ref2Called).toEqual([expect.any(HTMLButtonElement)]);
      expect(cleanupCalled).toEqual([]);

      unmount();

      expect(refCalled).toEqual([expect.any(HTMLButtonElement), null]);
      expect(ref2Called).toEqual([expect.any(HTMLButtonElement), null]);
      expect(cleanupCalled).toEqual([]);
    });
  });
});
