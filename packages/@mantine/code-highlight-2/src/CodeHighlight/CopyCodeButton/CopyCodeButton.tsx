import { ActionIcon, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { useCodeHighlightContext } from '../CodeHighlight.context';
import { CopyIcon } from './CopyIcon';

interface CopyCodeButtonProps {
  code: string;
  copiedLabel?: string;
  copyLabel?: string;
}

export function CopyCodeButton({
  code,
  copyLabel = 'Copy',
  copiedLabel = 'Copied',
}: CopyCodeButtonProps) {
  const ctx = useCodeHighlightContext();
  const clipboard = useClipboard();

  return (
    <Tooltip label={clipboard.copied ? copiedLabel : copyLabel} fz="sm" position="bottom-end">
      <ActionIcon
        onClick={() => clipboard.copy(code.trim())}
        variant="none"
        {...ctx.getStyles('control')}
      >
        <CopyIcon copied={clipboard.copied} />
      </ActionIcon>
    </Tooltip>
  );
}
