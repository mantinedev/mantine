import { useScrollDirection } from './use-scroll-direction';

export default { title: 'useScrollDirection' };

const content = Array.from({ length: 50 }, (_, i) => (
  <p key={i} style={{ margin: '16px 0', lineHeight: 1.6 }}>
    Paragraph {i + 1} — scroll up and down to see the scroll direction.
  </p>
));

const BACKGROUND: Record<string, string> = {
  up: '#40c057',
  down: '#fa5252',
  unknown: '#868e96',
};

export function Usage() {
  const direction = useScrollDirection();

  return (
    <div style={{ padding: '80px 20px 20px' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          background: BACKGROUND[direction],
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          transition: 'background 150ms ease',
        }}
      >
        {direction === 'up' && '↑ UP'}
        {direction === 'down' && '↓ DOWN'}
        {direction === 'unknown' && 'Scroll to detect direction'}
      </div>
      {content}
    </div>
  );
}
