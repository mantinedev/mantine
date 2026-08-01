import { useBroadcastChannel } from './use-broadcast-channel';

export default { title: 'useBroadcastChannel' };

function Panel({ label }: { label: string }) {
  const { supported, data, post } = useBroadcastChannel<string>('mantine-story-channel');

  return (
    <div style={{ padding: 20, border: '1px solid #ccc', borderRadius: 8, width: 240 }}>
      <div style={{ fontFamily: 'monospace', marginBottom: 10 }}>{label}</div>
      <div style={{ marginBottom: 10 }}>supported: {String(supported)}</div>
      <div style={{ marginBottom: 10 }}>received: {data ?? '—'}</div>
      <button type="button" onClick={() => post(`${label} says hi @ ${new Date().toISOString()}`)}>
        Broadcast
      </button>
    </div>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20 }}>
      <Panel label="Panel A" />
      <Panel label="Panel B" />
    </div>
  );
}
