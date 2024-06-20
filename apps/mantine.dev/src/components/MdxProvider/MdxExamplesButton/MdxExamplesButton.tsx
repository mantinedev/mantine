import { IconExternalLink } from '@tabler/icons-react';
import { Button, rem } from '@mantine/core';

interface MdxExamplesButtonProps {
  label: string;
  link: string;
}

export function MdxExamplesButton({ label, link }: MdxExamplesButtonProps) {
  return (
    <Button
      component="a"
      href={link}
      target="_blank"
      rightSection={<IconExternalLink style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      fullWidth
      justify="space-between"
      h={50}
      px={20}
      radius="md"
    >
      {label}
    </Button>
  );
}
