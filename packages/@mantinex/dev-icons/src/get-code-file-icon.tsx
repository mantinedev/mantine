import { CssIcon } from './CssIcon';
import { TypeScriptIcon } from './TypeScriptIcon';

export function getCodeFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={14} />;
  }

  if (fileName.endsWith('.css') || fileName.endsWith('.scss')) {
    return <CssIcon size={14} />;
  }

  return null;
}
