import { ArrowSquareOutIcon } from '@phosphor-icons/react';
import { Button } from '@mantine/core';

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
      rightSection={<ArrowSquareOutIcon size={18} />}
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
