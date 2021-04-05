import React, { useRef, createRef } from 'react';
import { mount } from 'enzyme';
import { useMergedRef } from './use-merged-ref';

function TestComponent({ refs }: { refs: React.ForwardedRef<HTMLButtonElement>[] }) {
  const ref = useRef<HTMLButtonElement>();
  return <button ref={useMergedRef(...refs, ref)} type="button" />;
}

describe('@mantine/hook/use-merged-ref', () => {
  it('assigns refs to all given arguments', () => {
    const objectRef = createRef<HTMLButtonElement>();
    let fnRefValue: HTMLButtonElement = null;
    const fnRef = (node: HTMLButtonElement) => {
      fnRefValue = node;
    };

    mount(<TestComponent refs={[objectRef, fnRef]} />);

    expect(fnRefValue instanceof HTMLButtonElement).toBe(true);
    expect(objectRef.current instanceof HTMLButtonElement).toBe(true);
  });
});
