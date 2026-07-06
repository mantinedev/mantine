import { clamp } from '../utils';
import { useTilt } from './use-tilt';

export default { title: 'useTilt' };

export function Usage() {
  const { ref, roll, tilt, source } = useTilt<HTMLDivElement>();

  return (
    <div style={{ padding: 80, perspective: 800 }}>
      <div
        ref={ref}
        style={{
          width: 320,
          height: 220,
          borderRadius: 16,
          background: 'linear-gradient(135deg, #4c6ef5, #9775fa)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          transform: `rotateX(${roll * 20}deg) rotateY(${tilt * 20}deg)`,
          transition: 'transform 100ms ease-out',
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 600 }}>Move your cursor</div>
        <div>source: {source}</div>
        <div>
          roll: {roll.toFixed(2)}, tilt: {tilt.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export function Window() {
  const { ref, roll, tilt } = useTilt<HTMLDivElement>({ trackWindow: true });

  return (
    <div
      style={{
        padding: 80,
        perspective: 800,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        ref={ref}
        style={{
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #4dabf7, #1971c2)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          transform: `rotateX(${clamp(roll, -0.5, 0.5) * 30}deg) rotateY(${clamp(tilt, -0.5, 0.5) * 30}deg)`,
          transition: 'transform 120ms ease-out',
        }}
      >
        Move your cursor anywhere
      </div>
    </div>
  );
}

export function Adjusted() {
  const { ref, roll, tilt } = useTilt<HTMLDivElement>({
    mouseRollAdjust: (value) => value * 2,
    mouseTiltAdjust: (value) => value * 2,
  });

  return (
    <div style={{ padding: 80, perspective: 800 }}>
      <div
        ref={ref}
        style={{
          width: 320,
          height: 220,
          borderRadius: 16,
          background: 'linear-gradient(135deg, #f76707, #f03e3e)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          fontWeight: 600,
          transform: `rotateX(${roll * 20}deg) rotateY(${tilt * 20}deg)`,
          transition: 'transform 100ms ease-out',
        }}
      >
        Amplified tilt
      </div>
    </div>
  );
}
