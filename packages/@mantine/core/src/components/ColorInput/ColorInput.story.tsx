import { ColorInput } from './ColorInput';

export default { title: 'ColorInput' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <ColorInput
        wrapperProps={{ 'data-test': 'hello' }}
        size="xl"
        popoverProps={{ opened: true }}
      />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <ColorInput unstyled label="Unstyled" />
    </div>
  );
}
