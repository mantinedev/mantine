import { useFullscreenDocument, useFullscreenElement } from './use-fullscreen';

export default { title: 'useFullscreen' };

export function ElementFullscreen() {
  const { ref, toggle, fullscreen } = useFullscreenElement();
  return (
    <div style={{ padding: 40 }}>
      <div
        ref={ref}
        style={{
          width: 400,
          height: 300,
          background: fullscreen ? '#40c057' : '#228be6',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          borderRadius: 8,
        }}
      >
        <span>{fullscreen ? 'Fullscreen (press Escape to exit)' : 'Not fullscreen'}</span>
        <button onClick={toggle} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Toggle fullscreen
        </button>
      </div>
    </div>
  );
}

export function DocumentFullscreen() {
  const { toggle, fullscreen } = useFullscreenDocument();
  return (
    <div style={{ padding: 40 }}>
      <p>
        Document fullscreen: <strong>{String(fullscreen)}</strong>
      </p>
      <button onClick={toggle} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Toggle document fullscreen
      </button>
    </div>
  );
}
