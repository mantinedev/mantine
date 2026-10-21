import { CssIcon } from './CssIcon';
import { FolderIcon } from './FolderIcon';
import { FolderOpenIcon } from './FolderOpenIcon';
import { MarkdownIcon } from './MarkdownIcon';
import { TypeScriptIcon } from './TypeScriptIcon';

export function getCodeFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={14} />;
  }

  if (fileName.endsWith('.css') || fileName.endsWith('.scss')) {
    return <CssIcon size={14} />;
  }

  if (fileName.endsWith('.md') || fileName.endsWith('.mdx')) {
    return <MarkdownIcon size={14} />;
  }

  return null;
}

export function getCodeFolderIcon(_folderPath: string, expanded: boolean) {
  return expanded ? <FolderOpenIcon size={18} /> : <FolderIcon size={18} />;
}
