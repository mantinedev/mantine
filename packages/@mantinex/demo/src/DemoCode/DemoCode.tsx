import { getCodeFileIcon } from '@mantinex/dev-icons';
import { CodeHighlightTabs, CodeHighlightTabsCode } from '@mantinex/shiki';
import classes from './DemoCode.module.css';

export interface DemoCodeProps {
  code?: string | CodeHighlightTabsCode | CodeHighlightTabsCode[];
  defaultExpanded?: boolean;
}

export function DemoCode({ code, defaultExpanded = true }: DemoCodeProps) {
  const _code: CodeHighlightTabsCode | CodeHighlightTabsCode[] | undefined =
    typeof code === 'string' ? { code, fileName: 'Demo.tsx', language: 'tsx' } : code;
  return _code ? (
    <CodeHighlightTabs
      code={_code}
      className={classes.code}
      getFileIcon={getCodeFileIcon}
      withExpandButton
      defaultExpanded={defaultExpanded}
    />
  ) : null;
}
