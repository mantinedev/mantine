import {
  BracketsCurlyIcon,
  FileSvgIcon,
  FileTextIcon,
  FolderOpenIcon,
  FolderSimpleIcon,
} from '@phosphor-icons/react';
import { CssIcon, TypeScriptIcon } from '@mantinex/dev-icons';

export function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={14} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={14} />;
  }

  if (fileName.endsWith('.json')) {
    return <BracketsCurlyIcon size={14} />;
  }

  if (fileName.endsWith('.svg')) {
    return <FileSvgIcon size={14} />;
  }

  return <FileTextIcon size={14} />;
}

export function getFolderIcon(_folderPath: string, expanded: boolean) {
  return expanded ? <FolderOpenIcon size={14} /> : <FolderSimpleIcon size={14} />;
}
