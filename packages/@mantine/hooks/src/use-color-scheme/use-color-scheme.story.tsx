import { useColorScheme } from './use-color-scheme';

export default { title: 'useColorScheme' };

export function Usage() {
  const colorScheme = useColorScheme();

  return (
    <div
      style={{
        padding: 40,
        background: colorScheme === 'dark' ? '#1a1a1a' : '#ffffff',
        color: colorScheme === 'dark' ? '#ffffff' : '#000000',
        minHeight: '100vh',
      }}
    >
      <div style={{ fontFamily: 'monospace', fontSize: 24 }}>Color scheme: {colorScheme}</div>
      <p style={{ marginTop: 16 }}>
        Change your system color scheme preference to see this value update.
      </p>
    </div>
  );
}
