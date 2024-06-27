import { Textarea } from './Textarea';

export default { title: 'Textarea' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Textarea label="Default" placeholder="Default textarea" />
    </div>
  );
}

export function Resize() {
  return (
    <div style={{ padding: 40 }}>
      <Textarea label="Default" placeholder="Default textarea" resize="vertical" />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Textarea label="Default" placeholder="Default textarea" unstyled />
    </div>
  );
}

export function Autosize() {
  return (
    <div style={{ padding: 40 }}>
      <Textarea label="Autosize" placeholder="Autosize" autosize minRows={4} />
    </div>
  );
}
