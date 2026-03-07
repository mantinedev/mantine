import { useState } from 'react';
import { useHeadroom, useScrollDirection } from './use-headroom';

export default { title: 'useHeadroom' };

const content = Array.from({ length: 50 }, (_, i) => (
  <p key={i} style={{ margin: '16px 0', lineHeight: 1.6 }}>
    Paragraph {i + 1} — scroll up and down to see the header behavior.
  </p>
));

export function Usage() {
  const { pinned } = useHeadroom({ fixedAt: 120 });

  return (
    <div style={{ padding: '80px 20px 20px' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          background: '#228be6',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          transform: pinned ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 200ms ease',
        }}
      >
        Header — pinned: {String(pinned)}
      </div>
      {content}
    </div>
  );
}

export function WithCallbacks() {
  const [log, setLog] = useState<string[]>([]);

  const addLog = (msg: string) =>
    setLog((prev) => [`${new Date().toLocaleTimeString()} — ${msg}`, ...prev].slice(0, 10));

  const { pinned } = useHeadroom({
    fixedAt: 80,
    onPin: () => addLog('onPin'),
    onRelease: () => addLog('onRelease'),
    onFix: () => addLog('onFix'),
  });

  return (
    <div style={{ padding: '140px 20px 20px' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          background: pinned ? '#40c057' : '#fa5252',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          transform: pinned ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 200ms ease, background 200ms ease',
        }}
      >
        {pinned ? 'Pinned' : 'Released'}
      </div>
      <div
        style={{
          position: 'fixed',
          top: 68,
          right: 20,
          background: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: 8,
          padding: 12,
          width: 260,
          fontFamily: 'monospace',
          fontSize: 12,
        }}
      >
        <strong>Callback log:</strong>
        {log.length === 0 && (
          <p style={{ color: '#aaa', margin: '8px 0 0' }}>Scroll to see callbacks</p>
        )}
        {log.map((entry, i) => (
          <p key={i} style={{ margin: '4px 0 0' }}>
            {entry}
          </p>
        ))}
      </div>
      {content}
    </div>
  );
}

export function ScrollLinked() {
  const { scrollProgress } = useHeadroom({ fixedAt: 120, scrollDistance: 60 });

  return (
    <div style={{ padding: '80px 20px 20px' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          background: '#7950f2',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          transform: `translateY(${(scrollProgress - 1) * 100}%)`,
        }}
      >
        Scroll-linked — {Math.round(scrollProgress * 100)}% visible
      </div>
      {content}
    </div>
  );
}

export function ScrollDirection() {
  const isScrollingUp = useScrollDirection();

  return (
    <div style={{ padding: '80px 20px 20px' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          background: isScrollingUp ? '#40c057' : '#fa5252',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          transition: 'background 150ms ease',
        }}
      >
        Scrolling {isScrollingUp ? '↑ UP' : '↓ DOWN'}
      </div>
      {content}
    </div>
  );
}
