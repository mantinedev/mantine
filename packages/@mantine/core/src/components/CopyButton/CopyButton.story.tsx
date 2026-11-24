import { CopyButton } from './CopyButton';

export default { title: 'CopyButton' };

export function Usage() {
  return (
    <CopyButton value="mantine.dev" timeout={1000}>
      {({ copied, copy }) => (
        <button type="button" style={{ color: copied ? 'teal' : 'blue' }} onClick={copy}>
          {copied ? 'Copied to clipboard' : 'Copy to clipboard'}
        </button>
      )}
    </CopyButton>
  );
}

export function RichContent() {
  return (
    <div style={{ padding: 40 }}>
      <div id="copy-button-rich-content">
        <p>
          <strong>Bold</strong>, <em>italic</em> and <a href="https://mantine.dev">link</a>
        </p>
        <table style={{ borderCollapse: 'collapse' }} border={1}>
          <thead>
            <tr>
              <th>Package</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>@mantine/core</td>
              <td>Core components</td>
            </tr>
            <tr>
              <td>@mantine/hooks</td>
              <td>React hooks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <CopyButton
        value={() => {
          const element = document.getElementById('copy-button-rich-content')!;
          return { html: element.innerHTML, text: element.innerText };
        }}
      >
        {({ copied, copy }) => (
          <button type="button" style={{ marginTop: 20 }} onClick={copy}>
            {copied ? 'Copied rich content' : 'Copy rich content'}
          </button>
        )}
      </CopyButton>
    </div>
  );
}
