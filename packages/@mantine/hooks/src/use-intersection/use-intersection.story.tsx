import { useIntersection } from './use-intersection';

export default { title: 'useIntersection' };

const spacer = Array.from({ length: 30 }, (_, i) => (
  <p key={i} style={{ margin: '16px 0', lineHeight: 1.6 }}>
    Scroll down to see the tracked element. Paragraph {i + 1}.
  </p>
));

export function Usage() {
  const { ref, entry } = useIntersection({ threshold: 0.5 });
  const isIntersecting = entry?.isIntersecting ?? false;
  const ratio = entry?.intersectionRatio?.toFixed(2) ?? '0.00';

  return (
    <div style={{ padding: 40 }}>
      <p
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          background: isIntersecting ? '#40c057' : '#fa5252',
          color: 'white',
          padding: '8px 16px',
          borderRadius: 8,
          zIndex: 10,
        }}
      >
        Intersecting: {String(isIntersecting)} (ratio: {ratio})
      </p>
      {spacer}
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
          borderRadius: 8,
        }}
      >
        Tracked element (threshold: 0.5)
      </div>
      {spacer}
    </div>
  );
}
