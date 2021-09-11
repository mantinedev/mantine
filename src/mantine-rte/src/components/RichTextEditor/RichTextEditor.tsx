import React from 'react';
import Editor from 'react-quill';
import { Toolbar } from '../Toolbar/Toolbar';
import './lib.css';

export function RichTextEditor() {
  return (
    <div className="text-editor">
      <Toolbar />
      <Editor theme={null} modules={{ toolbar: { container: '#toolbar' } }} />
    </div>
  );
}
