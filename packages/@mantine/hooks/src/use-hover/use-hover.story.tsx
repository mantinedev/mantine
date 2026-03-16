import { useHover } from './use-hover';

export default { title: 'useHover' };

export function Usage() {
  const { ref, hovered } = useHover();
  return (
    <div style={{ padding: 40 }}>
      <div
        ref={ref}
        style={{
          width: 300,
          height: 200,
          background: hovered ? '#40c057' : '#228be6',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          borderRadius: 8,
          transition: 'background 150ms ease',
        }}
      >
        {hovered ? 'Hovered!' : 'Hover over me'}
      </div>
    </div>
  );
}
