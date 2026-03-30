import { FingerprintIcon } from '@phosphor-icons/react';
import { ActionIcon } from './index';

export default { title: 'ActionIcon' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <ActionIcon size="lg">
        <FingerprintIcon size={20} />
      </ActionIcon>
    </div>
  );
}
