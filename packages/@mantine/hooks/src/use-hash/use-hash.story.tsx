import { useHash } from './use-hash';

export default { title: 'useHash' };

export function Usage() {
  const [hash, setHash] = useHash();

  return (
    <div style={{ padding: 40 }}>
      <div style={{ marginBottom: 16, fontFamily: 'monospace' }}>
        Current hash: &quot;{hash}&quot;
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button type="button" onClick={() => setHash('section-1')}>
          #section-1
        </button>
        <button type="button" onClick={() => setHash('section-2')}>
          #section-2
        </button>
        <button type="button" onClick={() => setHash('top')}>
          #top
        </button>
        <button type="button" onClick={() => setHash('')}>
          Clear
        </button>
      </div>
    </div>
  );
}
