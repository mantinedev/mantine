import { Divider } from './Divider';

export default { title: 'Divider' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <div>First</div>
      <Divider label="Divider label" labelPosition="right" />
      <div>Second</div>
    </div>
  );
}
