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
