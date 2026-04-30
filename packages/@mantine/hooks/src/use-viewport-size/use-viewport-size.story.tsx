import { useViewportSize } from './use-viewport-size';

export default { title: 'useViewportSize' };

export function Usage() {
  const { width, height } = useViewportSize();

  return (
    <div style={{ padding: 40 }}>
      <div style={{ fontFamily: 'monospace', fontSize: 24 }}>
        <div>Width: {width}px</div>
        <div>Height: {height}px</div>
      </div>
      <p style={{ marginTop: 16 }}>Resize the browser window to see values update.</p>
    </div>
  );
}
