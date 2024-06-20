import { useState } from 'react';
import { FileInput } from './FileInput';

export default { title: 'FileInput' };

export function Usage() {
  const [value, setValue] = useState<File | null>(null);
  return (
    <div style={{ padding: 40 }}>
      <FileInput placeholder="Pick file" value={value} onChange={setValue} />
    </div>
  );
}

export function Unstyled() {
  const [value, setValue] = useState<File | null>(null);
  return (
    <div style={{ padding: 40 }}>
      <FileInput placeholder="Pick file" value={value} onChange={setValue} unstyled />
    </div>
  );
}

export function Multiple() {
  const [value, setValue] = useState<File[]>([]);
  return (
    <div style={{ padding: 40 }}>
      <FileInput placeholder="Multiple" multiple value={value} onChange={setValue} clearable />
    </div>
  );
}
