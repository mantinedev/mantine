import { Progress } from './Progress';

export default { title: 'Progress' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Progress value={20} />
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ padding: 40 }}>
      <Progress value={20} orientation="vertical" h={400} animated />
    </div>
  );
}

export function Striped() {
  return (
    <div style={{ padding: 40 }}>
      <Progress value={56} size="xl" animated />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Progress value={56} size="xl" unstyled h="400" />
    </div>
  );
}

export function Compound() {
  return (
    <div style={{ padding: 40 }}>
      <Progress.Root size="xl" autoContrast orientation="vertical" h={200}>
        <Progress.Section value={40} color="lime.4">
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
        <Progress.Section value={20} color="yellow.4">
          <Progress.Label>Apps</Progress.Label>
        </Progress.Section>
        <Progress.Section value={20} color="cyan.7">
          <Progress.Label>Other</Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </div>
  );
}
