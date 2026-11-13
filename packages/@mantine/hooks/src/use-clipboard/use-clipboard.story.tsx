import { useClipboard } from './use-clipboard';

export default { title: 'useClipboard' };

export function Usage() {
  const clipboard = useClipboard();

  return (
    <div style={{ padding: 40 }}>
      <button type="button" onClick={() => clipboard.copy('Hello, world!')}>
        {clipboard.copied ? 'Copied' : 'Copy text'}
      </button>
      {clipboard.error && <p style={{ color: 'red' }}>{clipboard.error.message}</p>}
    </div>
  );
}

export function RichContent() {
  const clipboard = useClipboard();

  return (
    <div style={{ padding: 40 }}>
      <button
        type="button"
        onClick={() =>
          clipboard.copy({
            html: '<p><strong>Bold</strong> and <em>italic</em> text</p><ul><li>First item</li><li>Second item</li></ul>',
            text: 'Bold and italic text\n- First item\n- Second item',
          })
        }
      >
        {clipboard.copied ? 'Copied' : 'Copy rich content'}
      </button>
      {clipboard.error && <p style={{ color: 'red' }}>{clipboard.error.message}</p>}
    </div>
  );
}

export function FunctionValue() {
  const clipboard = useClipboard();

  return (
    <div style={{ padding: 40 }}>
      <p id="use-clipboard-function-value">
        Copied at <strong>click time</strong>
      </p>
      <button
        type="button"
        onClick={() =>
          clipboard.copy(() => {
            const element = document.getElementById('use-clipboard-function-value')!;
            return {
              html: element.innerHTML,
              text: `${element.innerText} (${new Date().toISOString()})`,
            };
          })
        }
      >
        {clipboard.copied ? 'Copied' : 'Copy from DOM'}
      </button>
      {clipboard.error && <p style={{ color: 'red' }}>{clipboard.error.message}</p>}
    </div>
  );
}
