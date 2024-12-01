import { CodeHighlightTabs, CodeHighlightTabsCode } from '@mantine/code-highlight';
import { getCodeFileIcon } from '@mantinex/dev-icons';
import classes from './DemoCode.module.css';

export interface DemoCodeProps {
  code?: string | CodeHighlightTabsCode[];
  defaultExpanded?: boolean;
  maxCollapsedHeight?: number;
}

export function DemoCode({ code, maxCollapsedHeight, defaultExpanded = true }: DemoCodeProps) {
  const _code: CodeHighlightTabsCode | CodeHighlightTabsCode[] | undefined =
    typeof code === 'string' ? [{ code, fileName: 'Demo.tsx', language: 'tsx' }] : code;
  return _code ? (
    <CodeHighlightTabs
      code={_code}
      className={classes.code}
      getFileIcon={getCodeFileIcon}
      withExpandButton
      maxCollapsedHeight={maxCollapsedHeight}
      defaultExpanded={defaultExpanded}
    />
  ) : null;
}
