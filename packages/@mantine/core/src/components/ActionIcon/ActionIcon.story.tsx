import { IconFingerprint } from '@tabler/icons-react';
import { ActionIcon } from './index';

export default { title: 'ActionIcon' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <ActionIcon size="lg">
        <IconFingerprint size={20} stroke={1.5} />
      </ActionIcon>
    </div>
  );
}
