import React from 'react';
import cx from 'clsx';
import Editor, { Quill } from 'react-quill';
import { useMantineTheme, DefaultProps } from '@mantine/core';
import { Toolbar } from '../Toolbar/Toolbar';
import { ALL_CONTROLS } from './default-control';
import useStyles from './RichTextEditor.styles';
import { replaceIcons } from './replace-icons';
import { DEFAULT_LABELS, RichTextEditorLabels } from './default-labels';
// import './lib.css';

export type { RichTextEditorLabels };

const icons = Quill.import('ui/icons');

replaceIcons(icons);

export interface RichTextEditorProps extends DefaultProps {
  value: string;
  onChange(value: string): void;
  labels?: RichTextEditorLabels;
}

export function RichTextEditor({
  value,
  onChange,
  labels = DEFAULT_LABELS,
  themeOverride,
  className,
  ...others
}: RichTextEditorProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, null, 'rte');

  return (
    <div className={cx(classes.root, className)} {...others}>
      <Toolbar controls={ALL_CONTROLS} themeOverride={themeOverride} labels={labels} />
      <Editor
        theme="snow"
        modules={{ toolbar: { container: '#toolbar' } }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
