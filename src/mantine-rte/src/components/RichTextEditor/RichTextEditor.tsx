import React from 'react';
import cx from 'clsx';
import Editor from 'react-quill';
import { useMantineTheme, DefaultProps } from '@mantine/core';
import { Toolbar } from '../Toolbar/Toolbar';
import { ALL_CONTROLS } from './default-control';
import useStyles from './RichTextEditor.styles';

interface RichTextEditorProps extends DefaultProps {
  value: string;
  onChange(value: string): void;
}

export function RichTextEditor({
  value,
  onChange,
  themeOverride,
  className,
  ...others
}: RichTextEditorProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, null, 'rte');

  return (
    <div className={cx(classes.root, className)} {...others}>
      <Toolbar controls={ALL_CONTROLS} themeOverride={themeOverride} />
      <Editor
        theme={null}
        modules={{ toolbar: { container: '#toolbar' } }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
