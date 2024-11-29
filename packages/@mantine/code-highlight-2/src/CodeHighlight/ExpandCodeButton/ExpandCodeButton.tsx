import { CodeHighlightControl } from '../CodeHighlightControl/CodeHighlightControl';
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
  return (
    <CodeHighlightControl
      onClick={() => onExpand(!expanded)}
      tooltipLabel={expanded ? collapseLabel : expandLabel}
    >
      <ExpandIcon expanded={expanded} />
    </CodeHighlightControl>
  );
}

ExpandCodeButton.displayName = '@mantine/code-highlight/ExpandCodeButton';
