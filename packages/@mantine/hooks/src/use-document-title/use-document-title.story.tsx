import { useState } from 'react';
import { useDocumentTitle } from './use-document-title';

export default { title: 'useDocumentTitle' };

export function Usage() {
  const [title, setTitle] = useState('Mantine Hooks');
  useDocumentTitle(title);

  return (
    <div style={{ padding: 40 }}>
      <div style={{ marginBottom: 16 }}>
        Current document title: <strong>{title}</strong>
      </div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        style={{ width: 300, padding: 8, fontSize: 16 }}
        placeholder="Enter document title"
      />
    </div>
  );
}
