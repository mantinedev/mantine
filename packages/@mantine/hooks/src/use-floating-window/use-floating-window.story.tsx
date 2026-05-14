import { useFloatingWindow } from './use-floating-window';

export default { title: 'useFloatingWindow' };

export function Usage() {
  const { ref, isDragging } = useFloatingWindow<HTMLDivElement>({
    constrainToViewport: true,
    constrainOffset: 10,
    initialPosition: { top: 100, left: 100 },
  });

  return (
    <div style={{ padding: 40 }}>
      <div
        ref={ref}
        style={{
          position: 'fixed',
          width: 200,
          height: 150,
          background: isDragging ? 'orange' : 'cyan',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
        }}
      >
        {isDragging ? 'Dragging...' : 'Drag me'}
      </div>
    </div>
  );
}

export function WithSetPosition() {
  const { ref, setPosition, isDragging } = useFloatingWindow<HTMLDivElement>({
    constrainToViewport: true,
    initialPosition: { top: 100, left: 100 },
  });

  return (
    <div style={{ padding: 40 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        <button type="button" onClick={() => setPosition({ top: 10, left: 10 })}>
          Top Left
        </button>
        <button type="button" onClick={() => setPosition({ top: 10, right: 10 })}>
          Top Right
        </button>
        <button type="button" onClick={() => setPosition({ bottom: 10, left: 10 })}>
          Bottom Left
        </button>
      </div>
      <div
        ref={ref}
        style={{
          position: 'fixed',
          width: 150,
          height: 100,
          background: isDragging ? 'orange' : 'cyan',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          cursor: 'grab',
        }}
      >
        Drag me
      </div>
    </div>
  );
}

export function AxisConstrained() {
  const horizontal = useFloatingWindow<HTMLDivElement>({
    axis: 'x',
    initialPosition: { top: 100, left: 50 },
  });

  const vertical = useFloatingWindow<HTMLDivElement>({
    axis: 'y',
    initialPosition: { top: 100, left: 300 },
  });

  return (
    <div style={{ padding: 40 }}>
      <div
        ref={horizontal.ref}
        style={{
          position: 'fixed',
          width: 150,
          height: 60,
          background: 'lightblue',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          cursor: 'grab',
        }}
      >
        Horizontal only
      </div>
      <div
        ref={vertical.ref}
        style={{
          position: 'fixed',
          width: 150,
          height: 60,
          background: 'lightgreen',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          cursor: 'grab',
        }}
      >
        Vertical only
      </div>
    </div>
  );
}
