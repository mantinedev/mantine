import { useScrollSpy } from './use-scroll-spy';

export default { title: 'useScrollSpy' };

export function Usage() {
  const spy = useScrollSpy({ selector: '[data-heading]', offset: 100 });

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
          zIndex: 10,
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>Table of Contents</div>
        {spy.data.map((heading, index) => (
          <button
            type="button"
            key={heading.id}
            style={{
              display: 'block',
              paddingLeft: (heading.depth - 1) * 16,
              color: spy.active === index ? 'blue' : 'black',
              fontWeight: spy.active === index ? 'bold' : 'normal',
              cursor: 'pointer',
              marginBottom: 4,
              background: 'none',
              border: 'none',
              textAlign: 'left',
              fontSize: 'inherit',
            }}
            onClick={() => heading.getNode().scrollIntoView({ behavior: 'smooth' })}
          >
            {heading.value}
          </button>
        ))}
      </div>

      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} style={{ marginBottom: 40 }}>
          <h2 data-heading id={`section-${i}`}>
            Section {i + 1}
          </h2>
          <p style={{ height: 400 }}>
            Content for section {i + 1}. Scroll down to see the active heading change.
          </p>
        </div>
      ))}
    </div>
  );
}
