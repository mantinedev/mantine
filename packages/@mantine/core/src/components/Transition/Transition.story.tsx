import { useState } from 'react';
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
