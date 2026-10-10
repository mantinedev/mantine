import { Stack } from '@mantine/core';
import { ProfileForm } from './ProfileForm';

export function RenderCount() {
  return (
    <Stack>
      <ProfileForm mode="controlled" />
      <ProfileForm mode="uncontrolled" />
    </Stack>
  );
}
