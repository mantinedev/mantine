import { useIdle } from './use-idle';

export default { title: 'useIdle' };

export function Usage() {
  const idle = useIdle(2000);
  return (
    <div style={{ padding: 40 }}>
      <div
        style={{
          width: 300,
          height: 200,
          background: idle ? '#fa5252' : '#40c057',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          borderRadius: 8,
          transition: 'background 300ms ease',
        }}
      >
        {idle ? 'Idle (2s timeout)' : 'Active'}
      </div>
    </div>
  );
}
