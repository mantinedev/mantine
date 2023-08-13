import React, { useState } from 'react';
import { FileInput } from './FileInput';

export default { title: 'FileInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 200 }}>
      <FileInput label="Pick file" required placeholder="File input" clearable />
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <FileInput label="Pick file" required placeholder="File input" clearable readOnly />
    </div>
  );
}

export function Controlled() {
  const [singleValue, setSingleValue] = useState<File | null>(null);
  const [multipleValue, setMultipleValue] = useState<File[]>([]);
  return (
    <div style={{ padding: 40 }}>
      <FileInput
        value={singleValue}
        onChange={setSingleValue}
        placeholder="Controlled single"
        clearable
      />
      <FileInput
        mt="xl"
        multiple
        value={multipleValue}
        onChange={setMultipleValue}
        placeholder="Controlled multiple"
        clearable
      />
    </div>
  );
}
