import { useFileDialog } from './use-file-dialog';

export default { title: 'use-file-dialog' };

export function Usage() {
  const { open, files } = useFileDialog({ onChange: (files) => console.log({ files }) });
  console.log(files);

  return (
    <div style={{ padding: 40 }}>
      <button type="button" onClick={open}>
        Open
      </button>
    </div>
  );
}
