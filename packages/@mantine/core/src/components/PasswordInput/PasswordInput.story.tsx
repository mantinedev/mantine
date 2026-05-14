import { PasswordInput } from './PasswordInput';

export default { title: 'PasswordInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 440 }}>
      <PasswordInput size="md" placeholder="Your password" label="Your password" />
    </div>
  );
}
