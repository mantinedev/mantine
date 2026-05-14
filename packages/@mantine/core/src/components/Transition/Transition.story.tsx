import { useState } from 'react';
import { Button, NumberInput } from '../..';
import { Transition } from './Transition';

export default { title: 'Transition' };

export function Usage() {
  const [mounted, setMounted] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <Transition mounted={mounted} transition="pop">
        {(styles) => (
          <div style={{ ...styles, background: 'pink', padding: 40 }}>Transition me</div>
        )}
      </Transition>

      <button type="button" onClick={() => setMounted((m) => !m)}>
        toggle
      </button>
    </div>
  );
}

export function ExitDuration() {
  const [mounted, setMounted] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <Transition mounted={mounted} transition="pop" duration={100} exitDuration={1000}>
        {(styles) => (
          <div
            style={{
              ...styles,
              background: 'pink',
              padding: 40,
              position: 'absolute',
              bottom: 100,
            }}
          >
            Transition me
          </div>
        )}
      </Transition>

      <button type="button" onClick={() => setMounted((m) => !m)}>
        toggle
      </button>
    </div>
  );
}

export function WithDelay() {
  const [mounted, setMounted] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Transition mounted={mounted} transition="pop" enterDelay={500} exitDelay={100}>
        {(styles) => (
          <div style={{ ...styles, background: 'pink', padding: 40 }}>Transition me</div>
        )}
      </Transition>

      <button type="button" onClick={() => setMounted((m) => !m)}>
        toggle
      </button>
    </div>
  );
}

export function WithActivityStatePreservation() {
  const [mounted, setMounted] = useState(true);
  const [value, setValue] = useState(42);

  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
        <strong>keepMounted + Activity</strong>: state inside the transition is preserved when
        hidden. Toggle the panel and notice the NumberInput value stays intact.
      </p>

      <Transition mounted={mounted} transition="fade" keepMounted>
        {(styles) => (
          <div style={{ ...styles, background: '#f0f4ff', borderRadius: 8, padding: 20 }}>
            <p style={{ margin: '0 0 12px', fontWeight: 600 }}>Hidden but state-preserved panel</p>
            <NumberInput
              label="Value (survives hide/show)"
              value={value}
              onChange={(v) => setValue(typeof v === 'number' ? v : 0)}
            />
          </div>
        )}
      </Transition>

      <Button onClick={() => setMounted((m) => !m)}>{mounted ? 'Hide panel' : 'Show panel'}</Button>

      <p style={{ margin: 0, fontSize: 13, color: '#888' }}>
        Current value reported outside the panel: <strong>{value}</strong>
      </p>
    </div>
  );
}
