import { useTextSelection } from './use-text-selection';

export default { title: 'useTextSelection' };

export function Usage() {
  const selection = useTextSelection();

  return (
    <div style={{ padding: 40 }}>
      <p>Select some text in this paragraph to see the selection details below.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <div
        style={{
          marginTop: 20,
          padding: 16,
          background: '#f0f0f0',
          borderRadius: 8,
          fontFamily: 'monospace',
        }}
      >
        <div>Selected text: &quot;{selection?.toString() || ''}&quot;</div>
        <div>Range count: {selection?.rangeCount ?? 0}</div>
      </div>
    </div>
  );
}
