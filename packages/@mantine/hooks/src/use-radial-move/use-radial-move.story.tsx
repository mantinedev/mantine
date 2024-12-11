import { useState } from 'react';
import { useRadialMove } from './use-radial-move';

export default { title: 'Hooks/useRadialMove' };

export function Usage() {
  const [value, setValue] = useState(0);
  const { ref } = useRadialMove(setValue);

  return (
    <div style={{ padding: 40 }}>
      <div
        ref={ref}
        style={{
          width: 200,
          height: 200,
          borderRadius: 200,
          background: 'pink',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 20,
            height: 200,
            borderRadius: 20,
            background: 'silver',
            top: 0,
            right: 0,
            bottom: 0,
            left: 'calc(50% - 10px)',
            transform: `rotate(${value}deg)`,
          }}
        />
      </div>
    </div>
  );
}
