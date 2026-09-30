import { Box } from '../../core';
import { Tilt } from './Tilt';

export default { title: 'Tilt' };

function Card({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      style={{
        width: 320,
        height: 220,
        borderRadius: 16,
        color: 'white',
        backgroundImage: 'linear-gradient(135deg, #4263eb, #ae3ec9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 80 }}>
      <Tilt withGlare radius={16}>
        <Card>Hover to tilt</Card>
      </Tilt>
    </div>
  );
}

export function TrackWindow() {
  return (
    <div style={{ padding: 80 }}>
      <Tilt trackWindow withGlare radius={16}>
        <Card>Move cursor anywhere</Card>
      </Tilt>
    </div>
  );
}

export function Layers() {
  return (
    <div style={{ padding: 80 }}>
      <Tilt maxRotate={14} withGlare radius={16}>
        <Box
          style={{
            position: 'relative',
            width: 320,
            height: 220,
            borderRadius: 16,
            overflow: 'hidden',
            background: '#1b1f3b',
          }}
        >
          <Tilt.Layer
            depth={0.3}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 120%, #f76707, transparent 60%)',
            }}
          />
          <Tilt.Layer
            depth={1.4}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            PARALLAX
          </Tilt.Layer>
        </Box>
      </Tilt>
    </div>
  );
}

export function WithRadius() {
  return (
    <div style={{ padding: 80, background: '#222' }}>
      <Tilt withGlare radius={16}>
        <Card>Rounded glare</Card>
      </Tilt>
    </div>
  );
}

export function CustomTransitions() {
  return (
    <div style={{ padding: 80 }}>
      <Tilt withGlare radius={16} transitionDuration={400} resetTransitionDuration={1200}>
        <Card>Slow transitions</Card>
      </Tilt>
    </div>
  );
}

export function NoResetOnLeave() {
  return (
    <div style={{ padding: 80 }}>
      <Tilt withGlare radius={16} resetOnLeave={false}>
        <Card>Keeps the last tilt</Card>
      </Tilt>
    </div>
  );
}
