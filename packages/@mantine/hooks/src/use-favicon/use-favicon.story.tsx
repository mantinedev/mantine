import { useState } from 'react';
import { useFavicon } from './use-favicon';

export default { title: 'useFavicon' };

const favicons = [
  'https://mantine.dev/favicon.svg',
  'https://www.google.com/favicon.ico',
  'https://github.com/favicon.ico',
];

export function Usage() {
  const [index, setIndex] = useState(0);
  useFavicon(favicons[index]);

  return (
    <div style={{ padding: 40 }}>
      <div style={{ marginBottom: 16 }}>
        Current favicon: <strong>{favicons[index]}</strong>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {favicons.map((url, i) => (
          <button key={url} type="button" onClick={() => setIndex(i)} disabled={i === index}>
            Favicon {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
