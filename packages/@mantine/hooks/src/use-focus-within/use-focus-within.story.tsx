import { useState } from 'react';
import { useFocusWithin } from './use-focus-within';

export default { title: 'use-focus-within' };

export function Usage() {
  const [visible, setVisible] = useState(false);
  const { ref, focused } = useFocusWithin();

  return (
    <div style={{ padding: 40 }}>
      {visible && (
        <div ref={ref} style={{ padding: 40, background: focused ? 'orange' : 'cyan' }}>
          <input />
        </div>
      )}

      <button onClick={() => setVisible((v) => !v)}>Toggle visible</button>
    </div>
  );
}

export function StaleClosureFix() {
  const [focusCount, setFocusCount] = useState(0);
  const [blurCount, setBlurCount] = useState(0);

  const { focused, ref } = useFocusWithin({
    onFocus: () => {
      console.log('focused!');
      setFocusCount(focusCount + 1);
    },
    onBlur: () => {
      console.log('blurred!');
      setBlurCount(blurCount + 1);
    },
  });

  return (
    <div style={{ padding: 40 }}>
      <p>focusCount = {focusCount}</p>
      <p>blurCount = {blurCount}</p>
      <p>focused = {focused ? 'true' : 'false'}</p>
      <form ref={ref} style={{ padding: 20, border: '2px solid gray' }}>
        <input type="text" placeholder="Click here (inside form)" />
      </form>
      <button style={{ marginTop: 20 }}>Click here (outside form)</button>
      <p style={{ marginTop: 20, color: 'gray' }}>
        Move focus between the input and the button. Both counts should increment each time.
      </p>
    </div>
  );
}
