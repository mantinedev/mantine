import { forwardRef, ReactNode } from 'react';
import { IconTable } from '@tabler/icons-react';
import { BoxProps, ElementProps, useProps } from '@mantine/core';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import { RichTextEditorControl } from './RichTextEditorControl';

export interface RichTextEditorInsertTableControlProps extends BoxProps, ElementProps<'button'> {
  /** Number of rows */
  rows?: number;
  /** Number of columns */
  cols?: number;
  /** Include header row */
  withHeaderRow?: boolean;
  /** Custom label for the control */
  label?: string;
  /** Custom icon for the control */
  icon?: ReactNode;
}

export const RichTextEditorInsertTableControl = forwardRef<
  HTMLButtonElement,
  RichTextEditorInsertTableControlProps
>((props, ref) => {
  const {
    rows,
    cols,
    withHeaderRow,
    disabled: providedDisabled,
    label: providedLabel,
    icon,
    ...others
  } = useProps('RichTextEditorInsertTableControl', null, props);
  const { editor, labels, variant } = useRichTextEditorContext();

  const label = providedLabel ?? labels.insertTableLabel;
  const disabled =
    providedDisabled ?? !(editor?.can() as any)?.insertTable({ rows, cols, withHeaderRow });

  return (
    <RichTextEditorControl
      {...others}
      variant={variant}
      aria-label={label}
      title={label}
      onClick={() =>
        (editor?.chain() as any).focus().insertTable({ rows, cols, withHeaderRow }).run()
      }
      disabled={disabled}
      ref={ref}
    >
      {icon ?? <IconTable strokeWidth={1.5} size={16} />}
    </RichTextEditorControl>
  );
});

RichTextEditorInsertTableControl.displayName = '@mantine/tiptap/RichTextEditorInsertTableControl';
