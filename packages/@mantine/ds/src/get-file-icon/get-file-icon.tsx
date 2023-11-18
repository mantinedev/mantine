import React from 'react';
import { TypeScriptIcon, CssIcon } from '../Icons';

export function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={18} />;
  }
  if (fileName.endsWith('.css')) {
    return <CssIcon size={18} />;
  }
  return null;
}
