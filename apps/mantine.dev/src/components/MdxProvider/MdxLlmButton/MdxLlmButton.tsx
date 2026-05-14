import { RobotIcon } from '@phosphor-icons/react';
import { Button } from '@mantine/core';

export function MdxLlmButton({ href }: { href: string }) {
  return (
    <Button
      rightSection={<RobotIcon color="var(--mantine-color-red-8)" size={22} />}
      size="lg"
      miw={300}
      justify="space-between"
      variant="default"
      radius="md"
      component="a"
      href={href}
      target="_blank"
    >
      Migrate with LLM
    </Button>
  );
}
