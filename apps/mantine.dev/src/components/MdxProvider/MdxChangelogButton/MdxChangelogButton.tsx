import { NewspaperIcon } from '@phosphor-icons/react';
import { Button } from '@mantine/core';

interface MdxChangelogButtonProps {
  href: string;
  label?: string;
}

export function MdxChangelogButton({
  href,
  label = 'View release notes',
}: MdxChangelogButtonProps) {
  return (
    <Button
      rightSection={<NewspaperIcon color="var(--mantine-color-red-6)" size={22} />}
      size="lg"
      miw={300}
      justify="space-between"
      variant="default"
      radius="md"
      component="a"
      href={href}
    >
      {label}
    </Button>
  );
}
