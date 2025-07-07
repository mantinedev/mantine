import { IconHeartFilled } from '@tabler/icons-react';
import { Button } from '@mantine/core';

export function MdxSponsorButton() {
  return (
    <Button
      rightSection={<IconHeartFilled size={22} color="var(--mantine-color-red-7)" />}
      size="lg"
      miw={300}
      justify="space-between"
      variant="default"
      radius="md"
      component="a"
      href="https://opencollective.com/mantinedev"
    >
      Sponsor Mantine
    </Button>
  );
}
