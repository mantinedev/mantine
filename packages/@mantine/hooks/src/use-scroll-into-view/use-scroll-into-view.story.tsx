import { useScrollIntoView } from './use-scroll-into-view';

export default { title: 'useScrollIntoView' };

const spacer = Array.from({ length: 40 }, (_, i) => (
  <p key={i} style={{ margin: '16px 0', lineHeight: 1.6 }}>
    Paragraph {i + 1}
  </p>
));

export function Usage() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ duration: 500 });

  return (
    <div style={{ padding: 40 }}>
      <button onClick={() => scrollIntoView()} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Scroll to target
      </button>
      {spacer}
      <div
        ref={targetRef}
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
        Target element
      </div>
      {spacer}
    </div>
  );
}

export function WithParentContainer() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >({ duration: 500 });

  return (
    <div style={{ padding: 40 }}>
      <button
        onClick={() => scrollIntoView()}
        style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: 16 }}
      >
        Scroll to target inside container
      </button>
      <div
        ref={scrollableRef}
        style={{
          height: 300,
          overflow: 'auto',
          border: '2px solid #dee2e6',
          borderRadius: 8,
          padding: 16,
        }}
      >
        {spacer}
        <div
          ref={targetRef}
          style={{
            width: '100%',
            height: 80,
            background: '#be4bdb',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}
        >
          Target element
        </div>
        {spacer}
      </div>
    </div>
  );
}
