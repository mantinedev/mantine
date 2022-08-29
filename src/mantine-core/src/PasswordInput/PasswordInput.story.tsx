import React from 'react';
import { PasswordInput } from './PasswordInput';

export default { title: 'PasswordInput' };

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <PasswordInput label="With required asterisk" withAsterisk />
      <PasswordInput label="Just required" required />
      <PasswordInput label="Required asterisk off" required withAsterisk={false} />
      <PasswordInput label="Required false asterisk on" required={false} withAsterisk />
    </div>
  );
}
