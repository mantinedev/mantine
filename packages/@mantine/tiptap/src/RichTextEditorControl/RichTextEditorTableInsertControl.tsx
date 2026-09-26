import { useState } from 'react';
import { useEditorState } from '@tiptap/react';
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  Factory,
  Popover,
  PopoverProps,
  UnstyledButton,
  useProps,
  useResolvedStylesApi,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconTablePlus } from '../icons/Icons';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import { RichTextEditorControlBase, RichTextEditorControlBaseProps } from './RichTextEditorControl';
import classes from '../RichTextEditor.module.css';

export type RichTextEditorTableInsertControlStylesNames =
  | 'control'
  | 'tableInsertDropdown'
  | 'tableInsertGrid'
  | 'tableInsertCell'
  | 'tableInsertLabel';

export interface RichTextEditorTableInsertControlProps
  extends
    BoxProps,
    Omit<RichTextEditorControlBaseProps, 'classNames' | 'styles' | 'vars'>,
    CompoundStylesApiProps<RichTextEditorTableInsertControlFactory> {
  /** Maximum number of columns that can be selected in the grid @default 10 */
  maxColumns?: number;

  /** Maximum number of rows that can be selected in the grid @default 10 */
  maxRows?: number;

  /** Determines whether the inserted table should have a header row @default true */
  withHeaderRow?: boolean;

  /** Props passed down to the `Popover` component. `opened` and `onChange` are controlled
   * by the control itself and cannot be overridden. */
  popoverProps?: Partial<Omit<PopoverProps, 'opened' | 'onChange'>>;
}

export type RichTextEditorTableInsertControlFactory = Factory<{
  props: RichTextEditorTableInsertControlProps;
  ref: HTMLButtonElement;
  stylesNames: RichTextEditorTableInsertControlStylesNames;
  compound: true;
}>;

const defaultProps = {
  maxColumns: 10,
  maxRows: 10,
  withHeaderRow: true,
} satisfies Partial<RichTextEditorTableInsertControlProps>;

const TableIcon: RichTextEditorControlBaseProps['icon'] = (props) => <IconTablePlus {...props} />;

export const RichTextEditorTableInsertControl = factory<RichTextEditorTableInsertControlFactory>(
  (_props) => {
    const props = useProps('RichTextEditorTableInsertControl', defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      vars,
      icon,
      maxColumns,
      maxRows,
      withHeaderRow,
      popoverProps,
      disabled: disabledProp,
      onClick,
      ...others
    } = props;

    const ctx = useRichTextEditorContext();
    const { editor } = ctx;
    const stylesApiProps = { classNames, styles };

    const [opened, { open, close }] = useDisclosure(false);
    const [selected, setSelected] = useState({ columns: 0, rows: 0 });

    const commandDisabled = useEditorState({
      editor: editor ?? null,
      selector: () => {
        const safeEditor = editor && !editor.isDestroyed ? editor : null;
        return safeEditor ? !(safeEditor.can() as any).insertTable?.() : true;
      },
    });

    const disabled = disabledProp || (commandDisabled ?? true);

    const { resolvedClassNames, resolvedStyles } =
      useResolvedStylesApi<RichTextEditorTableInsertControlFactory>({ classNames, styles, props });

    const handleClose = () => {
      close();
      setSelected({ columns: 0, rows: 0 });
    };

    const insertTable = (columns: number, rows: number) => {
      handleClose();
      if (!editor || editor.isDestroyed) {
        return;
      }
      (editor.chain() as any).focus().insertTable({ rows, cols: columns, withHeaderRow }).run();
    };

    const cells = [];
    for (let row = 1; row <= maxRows!; row += 1) {
      for (let column = 1; column <= maxColumns!; column += 1) {
        const active = column <= selected.columns && row <= selected.rows;
        cells.push(
          <UnstyledButton
            key={`${row}-${column}`}
            data-active={active || undefined}
            aria-label={ctx.labels.tableInsertLabel(column, row)}
            onMouseEnter={() => setSelected({ columns: column, rows: row })}
            onFocus={() => setSelected({ columns: column, rows: row })}
            onClick={() => insertTable(column, row)}
            {...ctx.getStyles('tableInsertCell', stylesApiProps)}
          />
        );
      }
    }

    return (
      <Popover
        trapFocus
        shadow="md"
        position="bottom-end"
        {...popoverProps}
        opened={opened}
        onChange={(value) => !value && handleClose()}
      >
        <Popover.Target>
          <RichTextEditorControlBase
            icon={icon || TableIcon}
            {...others}
            aria-label={ctx.labels.tableInsertControlLabel}
            title={ctx.labels.tableInsertControlLabel}
            active={opened}
            disabled={disabled}
            onClick={(event) => {
              onClick?.(event);

              if (event.defaultPrevented) {
                return;
              }

              if (opened) {
                handleClose();
              } else {
                open();
              }
            }}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            className={className}
            style={style}
            variant={ctx.variant}
          />
        </Popover.Target>

        <Popover.Dropdown {...ctx.getStyles('tableInsertDropdown', stylesApiProps)}>
          <div
            {...ctx.getStyles('tableInsertGrid', stylesApiProps)}
            style={
              {
                ...ctx.getStyles('tableInsertGrid', stylesApiProps).style,
                '--rte-table-insert-columns': maxColumns,
              } as React.CSSProperties
            }
            onMouseLeave={() => setSelected({ columns: 0, rows: 0 })}
          >
            {cells}
          </div>
          <div {...ctx.getStyles('tableInsertLabel', stylesApiProps)}>
            {selected.columns > 0
              ? `${selected.columns} × ${selected.rows}`
              : ctx.labels.tableInsertControlLabel}
          </div>
        </Popover.Dropdown>
      </Popover>
    );
  }
);

RichTextEditorTableInsertControl.classes = classes;
RichTextEditorTableInsertControl.displayName = '@mantine/tiptap/RichTextEditorTableInsertControl';
