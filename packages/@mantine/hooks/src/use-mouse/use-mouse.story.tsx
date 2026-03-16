import { useMouse } from './use-mouse';

export default { title: 'useMouse' };

export function Usage() {
  const { ref, x, y } = useMouse();
  return (
    <div style={{ padding: 40 }}>
      <div
        ref={ref}
        style={{
          width: 300,
          height: 200,
          background: '#228be6',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          borderRadius: 8,
        }}
      >
        x: {x}, y: {y}
      </div>
    </div>
  );
}

export function ResetOnExit() {
  const { ref, x, y } = useMouse({ resetOnExit: true });
  return (
    <div style={{ padding: 40 }}>
      <div
        ref={ref}
        style={{
          width: 300,
          height: 200,
          background: '#be4bdb',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          borderRadius: 8,
        }}
      >
        x: {x}, y: {y} (resets on exit)
      </div>
    </div>
  );
}
