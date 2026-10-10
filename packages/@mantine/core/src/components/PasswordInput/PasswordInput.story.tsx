import { PasswordInput } from './PasswordInput';

export default { title: 'PasswordInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 440 }}>
      <PasswordInput size="md" placeholder="Your password" label="Your password" />
    </div>
  );
}

export function Sizes() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
  return (
    <div style={{ padding: 40, maxWidth: 440, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {sizes.map((size) => (
        <PasswordInput key={size} size={size} label={size} defaultValue="secret" />
      ))}
    </div>
  );
}
