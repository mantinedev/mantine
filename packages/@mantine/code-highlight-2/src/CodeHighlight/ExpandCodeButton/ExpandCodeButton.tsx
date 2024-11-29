import { ActionIcon, Tooltip } from '@mantine/core';
import { useCodeHighlightContext } from '../CodeHighlight.context';
import { ExpandIcon } from './ExpandIcon';

interface ExpandCodeButtonProps {
  expanded: boolean;
  onExpand: (value: boolean) => void;
  collapseLabel?: string;
  expandLabel?: string;
}

export function ExpandCodeButton({
  expanded,
  onExpand,
  expandLabel = 'Expand code',
  collapseLabel = 'Collapse code',
}: ExpandCodeButtonProps) {
  const ctx = useCodeHighlightContext();

  return (
    <Tooltip label={expanded ? collapseLabel : expandLabel} fz="sm" position="left">
      <ActionIcon variant="none" onClick={() => onExpand(!expanded)} {...ctx.getStyles('control')}>
        <ExpandIcon expanded={expanded} />
      </ActionIcon>
    </Tooltip>
  );
}

ExpandCodeButton.displayName = '@mantine/code-highlight/ExpandCodeButton';
