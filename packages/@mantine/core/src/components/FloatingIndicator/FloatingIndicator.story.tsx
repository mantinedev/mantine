import { useEffect, useState } from 'react';
import { useDisclosure, useInterval } from '@mantine/hooks';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { FloatingIndicator } from './FloatingIndicator';

export default { title: 'FloatingIndicator' };

export function WithinModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        transitionProps={{ transition: 'pop' }}
      >
        <Usage />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}

export function Usage() {
  const [active, setActive] = useState(1);
  const [refs, setRefs] = useState<HTMLElement[]>([]);
  const [parentRef, setParentRef] = useState<HTMLDivElement | null>(null);

  const setElementRef = (element: HTMLElement, index: number) => {
    refs[index] = element;
    setRefs(refs);
  };

  return (
    <div style={{ padding: 40 }}>
      <div
        className="elements"
        ref={(node) => setParentRef(node!)}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 15,
          alignItems: 'center',
          position: 'relative',
          maxWidth: 800,
        }}
      >
        <button
          className="target-element"
          type="button"
          onClick={() => setActive(0)}
          ref={(node) => setElementRef(node!, 0)}
          style={{ height: 120, width: 200 }}
        >
          Element 1
        </button>
        <button
          className="target-element"
          type="button"
          onClick={() => setActive(1)}
          ref={(node) => setElementRef(node!, 1)}
          style={{ width: 500 }}
        >
          Second Element
        </button>
        <button
          className="target-element"
          type="button"
          onClick={() => setActive(2)}
          ref={(node) => setElementRef(node!, 2)}
          style={{ height: 200, width: 300 }}
        >
          El 3
        </button>
        <FloatingIndicator target={refs[active]} parent={parentRef} c="red" bg="gray">
          Indicator
        </FloatingIndicator>
      </div>
    </div>
  );
}

export function ResizableTarget() {
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);
  const [parentRef, setParentRef] = useState<HTMLDivElement | null>(null);

  return (
    <div style={{ padding: 40 }}>
      <div ref={(node) => setParentRef(node!)} style={{ position: 'relative' }}>
        <div ref={(node) => setTargetRef(node!)} style={{ padding: 20, background: 'pink' }}>
          Resizable target
        </div>
        <FloatingIndicator target={targetRef} parent={parentRef} c="red" bg="gray">
          Indicator
        </FloatingIndicator>
      </div>
    </div>
  );
}

export function ScaledElement() {
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);
  const [parentRef, setParentRef] = useState<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  const interval = useInterval(() => setScale(Math.random()), 500);

  useEffect(() => {
    interval.start();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <div ref={(node) => setParentRef(node!)} style={{ position: 'relative' }}>
        <div
          ref={(node) => setTargetRef(node!)}
          style={{
            padding: 20,
            background: 'pink',
            width: 200,
            height: 200,
            transition: 'transform 100ms',
            transform: `scale(${scale})`,
          }}
        >
          Resizable target
        </div>
        <FloatingIndicator
          target={targetRef}
          parent={parentRef}
          style={{ background: 'rgba(0, 0, 0, 0.2)' }}
        />
      </div>
    </div>
  );
}
