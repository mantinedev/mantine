import { useWindowScroll } from './use-window-scroll';

export default { title: 'useWindowScroll' };

export function Usage() {
  const [position, scrollTo] = useWindowScroll();

  return (
    <div style={{ padding: 40 }}>
      <div
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          background: '#f0f0f0',
          padding: 16,
          borderRadius: 8,
          fontFamily: 'monospace',
          zIndex: 10,
        }}
      >
        <div>x: {Math.round(position.x)}</div>
        <div>y: {Math.round(position.y)}</div>
        <button type="button" onClick={() => scrollTo({ y: 0 })} style={{ marginTop: 8 }}>
          Scroll to top
        </button>
      </div>
      <div
        style={{ height: 3000, background: 'linear-gradient(to bottom, lightblue, lightgreen)' }}
      >
        Scroll down to see position change
      </div>
    </div>
  );
}
