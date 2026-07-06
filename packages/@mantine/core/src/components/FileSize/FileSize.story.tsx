import { FileSize } from './FileSize';

export default { title: 'FileSize' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <div>
        <FileSize value={1450} />
      </div>
      <div>
        <FileSize value={1450} unitSystem="binary" />
      </div>
      <div>
        <FileSize value={8_000_000} unit="bit" />
      </div>
      <div>
        <FileSize value={1450} unitDisplay="long" />
      </div>
      <div>
        <FileSize value={1450} locale="de-DE" />
      </div>
      <div>
        <FileSize value={0} />
      </div>
      <div>
        <FileSize value={-2_400_000} />
      </div>
    </div>
  );
}
