import React from 'react';
import Editor from 'react-quill';
import { Toolbar } from '../Toolbar/Toolbar';
import { ALL_CONTROLS } from './default-control';
import './lib.css';

interface RichTextEditorProps {
  value: string;
  onChange(value: string): void;
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  return (
    <div className="text-editor">
      <Toolbar controls={ALL_CONTROLS} />
      <Editor
        theme={null}
        modules={{ toolbar: { container: '#toolbar' } }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
