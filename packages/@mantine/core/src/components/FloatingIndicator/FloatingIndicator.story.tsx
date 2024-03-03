import React from 'react';
import { useForceUpdate } from '@mantine/hooks';
import { FloatingIndicator } from './FloatingIndicator';

export default { title: 'FloatingIndicator' };

export function Usage() {
  const [active, setActive] = React.useState(0);
  const refs = React.useRef<HTMLElement[]>([]);
  const parentRef = React.useRef<HTMLDivElement>(null);
  const forceUpdate = useForceUpdate();

  const setElementRef = (element: HTMLElement, index: number) => {
    refs.current[index] = element;
  };

  React.useEffect(() => {
    forceUpdate();
  }, []);

  return (
    <div style={{ padding: 40, position: 'relative' }} ref={parentRef}>
      <div
        className="elements"
        ref={parentRef}
        style={{ display: 'flex', gap: 15, alignItems: 'center' }}
      >
        <button
          className="target-element"
          type="button"
          onClick={() => setActive(0)}
          ref={(node) => setElementRef(node!, 0)}
          style={{ height: 120 }}
        >
          Element 1
        </button>
        <button
          className="target-element"
          type="button"
          onClick={() => setActive(1)}
          ref={(node) => setElementRef(node!, 1)}
        >
          Second Element
        </button>
        <button
          className="target-element"
          type="button"
          onClick={() => setActive(2)}
          ref={(node) => setElementRef(node!, 2)}
        >
          El 3
        </button>
      </div>
      <FloatingIndicator target={refs.current[active]} parent={parentRef.current} />
    </div>
  );
}
