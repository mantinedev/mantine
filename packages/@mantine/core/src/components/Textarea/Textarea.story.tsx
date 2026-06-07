import { useState } from 'react';
import { Textarea } from './Textarea';

export default { title: 'Textarea' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Textarea label="Default" placeholder="Default textarea" />
    </div>
  );
}

export function Resize() {
  return (
    <div style={{ padding: 40 }}>
      <Textarea label="Default" placeholder="Default textarea" resize="vertical" />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Textarea label="Default" placeholder="Default textarea" unstyled />
    </div>
  );
}

export function Autosize() {
  return (
    <div style={{ padding: 40 }}>
      <Textarea label="Autosize" placeholder="Autosize" autosize minRows={4} />
    </div>
  );
}

export function BottomSectionCharCounter() {
  const maxLength = 1000;
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: 40 }}>
      <Textarea
        label="With character counter"
        placeholder="Type something..."
        rows={4}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        bottomSection={
          <span>
            {value.length}/{maxLength}
          </span>
        }
      />
    </div>
  );
}
