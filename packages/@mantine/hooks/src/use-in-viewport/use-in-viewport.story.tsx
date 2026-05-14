import { useInViewport } from './use-in-viewport';

export default { title: 'useInViewport' };

const spacer = Array.from({ length: 30 }, (_, i) => (
  <p key={i} style={{ margin: '16px 0', lineHeight: 1.6 }}>
    Scroll down to see the tracked element. Paragraph {i + 1}.
  </p>
));

export function Usage() {
  const { ref, inViewport } = useInViewport();
  return (
    <div style={{ padding: 40 }}>
      <p
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          background: inViewport ? '#40c057' : '#fa5252',
          color: 'white',
          padding: '8px 16px',
          borderRadius: 8,
          zIndex: 10,
        }}
      >
        {inViewport ? 'Element is in viewport' : 'Element is NOT in viewport'}
      </p>
      {spacer}
      <div
        ref={ref}
        style={{
          width: 300,
          height: 100,
          background: '#228be6',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
        }}
      >
        Tracked element
      </div>
      {spacer}
    </div>
  );
}
