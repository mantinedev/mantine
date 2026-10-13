import { ArrowSquareOutIcon } from '@phosphor-icons/react';
import { Button, ButtonVariant } from '@mantine/core';

interface MdxExamplesButtonProps {
  label: string;
  link: string;
  variant?: ButtonVariant;
}

export function MdxExamplesButton({ label, link, variant }: MdxExamplesButtonProps) {
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
      variant={variant}
    >
      {label}
    </Button>
  );
}
