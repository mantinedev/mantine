import { useState } from 'react';
import { useMask } from './use-mask';

export default { title: 'useMask' };

export function PhoneMask() {
  const { ref, value, rawValue, isComplete, reset } = useMask({
    mask: '(999) 999-9999',
  });

  return (
    <div style={{ padding: 40 }}>
      <input ref={ref} placeholder="(___) ___-____" />
      <div style={{ marginTop: 10 }}>Masked: {value}</div>
      <div>Raw: {rawValue}</div>
      <div>Complete: {isComplete ? 'yes' : 'no'}</div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export function DateMask() {
  const { ref, value, isComplete } = useMask({
    mask: '99/99/9999',
    slotChar: 'DD/MM/YYYY',
    alwaysShowMask: true,
  });

  return (
    <div style={{ padding: 40 }}>
      <input ref={ref} />
      <div style={{ marginTop: 10 }}>Value: {value}</div>
      <div>Complete: {isComplete ? 'yes' : 'no'}</div>
    </div>
  );
}

export function AutoClear() {
  const [raw, setRaw] = useState('');
  const { ref } = useMask({
    mask: '99:99',
    autoClear: true,
    onChangeRaw: (rawValue) => setRaw(rawValue),
  });

  return (
    <div style={{ padding: 40 }}>
      <input ref={ref} placeholder="HH:MM" />
      <div style={{ marginTop: 10 }}>Raw: {raw}</div>
      <div>Type partial value and blur to see autoClear</div>
    </div>
  );
}

export function UppercaseTransform() {
  const { ref, value } = useMask({
    mask: 'AAAA-9999',
    transform: (char) => char.toUpperCase(),
  });

  return (
    <div style={{ padding: 40 }}>
      <input ref={ref} placeholder="AAAA-0000" />
      <div style={{ marginTop: 10 }}>Value: {value}</div>
    </div>
  );
}
