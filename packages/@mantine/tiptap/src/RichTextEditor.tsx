import { useMemo } from 'react';
import { Editor } from '@tiptap/react';
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { DEFAULT_LABELS, RichTextEditorLabels } from './labels';
import { RichTextEditorProvider } from './RichTextEditor.context';
import { RichTextEditorContent } from './RichTextEditorContent/RichTextEditorContent';
import * as controls from './RichTextEditorControl';
import { RichTextEditorControl } from './RichTextEditorControl/RichTextEditorControl';
import { RichTextEditorInsertTableControl } from './RichTextEditorControl/RichTextEditorInsertTableControl';
import { RichTextEditorSetCellAttributeControl } from './RichTextEditorControl/RichTextEditorSetCellAttributeControl';
import { RichTextEditorSourceCodeControl } from './RichTextEditorControl/RichTextEditorSourceCodeControl';
import { RichTextEditorControlsGroup } from './RichTextEditorControlsGroup/RichTextEditorControlsGroup';
import { RichTextEditorToolbar } from './RichTextEditorToolbar/RichTextEditorToolbar';
import classes from './RichTextEditor.module.css';

export type RichTextEditorVariant = 'default' | 'subtle';

export type RichTextEditorStylesNames =
  | 'linkEditorSave'
  | 'linkEditorDropdown'
  | 'root'
  | 'content'
  | 'Typography'
  | 'control'
  | 'controlIcon'
  | 'controlsGroup'
  | 'toolbar'
  | 'linkEditor'
  | 'linkEditorInput'
  | 'linkEditorExternalControl';

export interface RichTextEditorProps
  extends BoxProps,
    StylesApiProps<RichTextEditorFactory>,
    ElementProps<'div'> {
  /** Tiptap editor instance */
  editor: Editor | null;

  /** Determines whether code highlight styles should be added @default `true` */
  withCodeHighlightStyles?: boolean;

  /** Determines whether typography styles should be added @default `true` */
  withTypographyStyles?: boolean;

  /** Called if `RichTextEditor.SourceCode` clicked.  */
  onSourceCodeTextSwitch?: (isSourceCodeModeActive: boolean) => void;

  /** Labels that are used in controls */
  labels?: Partial<RichTextEditorLabels>;

  /** Child editor components */
  children: React.ReactNode;
}

export type RichTextEditorFactory = Factory<{
  props: RichTextEditorProps;
  ref: HTMLDivElement;
  stylesNames: RichTextEditorStylesNames;
  variant: RichTextEditorVariant;
  staticComponents: {
    Content: typeof RichTextEditorContent;
    Control: typeof RichTextEditorControl;
    Toolbar: typeof RichTextEditorToolbar;
    ControlsGroup: typeof RichTextEditorControlsGroup;
    Bold: typeof controls.BoldControl;
    Italic: typeof controls.ItalicControl;
    Strikethrough: typeof controls.StrikeThroughControl;
    Underline: typeof controls.UnderlineControl;
    ClearFormatting: typeof controls.ClearFormattingControl;
    H1: typeof controls.H1Control;
    H2: typeof controls.H2Control;
    H3: typeof controls.H3Control;
    H4: typeof controls.H4Control;
    H5: typeof controls.H5Control;
    H6: typeof controls.H6Control;
    BulletList: typeof controls.BulletListControl;
    OrderedList: typeof controls.OrderedListControl;
    Link: typeof controls.RichTextEditorLinkControl;
    Unlink: typeof controls.UnlinkControl;
    Blockquote: typeof controls.BlockquoteControl;
    AlignLeft: typeof controls.AlignLeftControl;
    AlignRight: typeof controls.AlignRightControl;
    AlignCenter: typeof controls.AlignCenterControl;
    AlignJustify: typeof controls.AlignJustifyControl;
    Superscript: typeof controls.SuperscriptControl;
    Subscript: typeof controls.SubscriptControl;
    Code: typeof controls.CodeControl;
    CodeBlock: typeof controls.CodeBlockControl;
    ColorPicker: typeof controls.RichTextEditorColorPickerControl;
    Color: typeof controls.RichTextEditorColorControl;
    Highlight: typeof controls.HighlightControl;
    Hr: typeof controls.HrControl;
    UnsetColor: typeof controls.UnsetColorControl;
    Undo: typeof controls.UndoControl;
    Redo: typeof controls.RedoControl;
    TaskList: typeof controls.TaskListControl;
    TaskListSink: typeof controls.TaskListSinkControl;
    TaskListLift: typeof controls.TaskListLiftControl;
    SourceCode: typeof RichTextEditorSourceCodeControl;
    SetDetails: typeof controls.SetDetailsControl;
    UnsetDetails: typeof controls.UnsetDetailsControl;
    InsertTable: typeof RichTextEditorInsertTableControl;
    AddColumnBefore: typeof controls.AddColumnBeforeControl;
    AddColumnAfter: typeof controls.AddColumnAfterControl;
    DeleteColumn: typeof controls.DeleteColumnControl;
    AddRowBefore: typeof controls.AddRowBeforeControl;
    AddRowAfter: typeof controls.AddRowAfterControl;
    DeleteRow: typeof controls.DeleteRowControl;
    DeleteTable: typeof controls.DeleteTableControl;
    MergeCells: typeof controls.MergeCellsControl;
    SplitCell: typeof controls.SplitCellControl;
    ToggleHeaderColumn: typeof controls.ToggleHeaderColumnControl;
    ToggleHeaderRow: typeof controls.ToggleHeaderRowControl;
    ToggleHeaderCell: typeof controls.ToggleHeaderCellControl;
    MergeOrSplit: typeof controls.MergeOrSplitControl;
    SetCellAttribute: typeof RichTextEditorSetCellAttributeControl;
    FixTables: typeof controls.FixTablesControl;
    GoToNextCell: typeof controls.GoToNextCellControl;
    GoToPreviousCell: typeof controls.GoToPreviousCellControl;
  };
}>;

const defaultProps = {
  withCodeHighlightStyles: true,
  withTypographyStyles: true,
  variant: 'default',
} satisfies Partial<RichTextEditorProps>;

export const RichTextEditor = factory<RichTextEditorFactory>((_props, ref) => {
  const props = useProps('RichTextEditor', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    editor,
    withCodeHighlightStyles,
    withTypographyStyles,
    onSourceCodeTextSwitch,
    labels,
    children,
    variant,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<RichTextEditorFactory>({
    name: 'RichTextEditor',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  const mergedLabels = useMemo(() => ({ ...DEFAULT_LABELS, ...labels }), [labels]);

  return (
    <RichTextEditorProvider
      value={{
        editor,
        getStyles,
        labels: mergedLabels,
        withCodeHighlightStyles,
        withTypographyStyles,
        onSourceCodeTextSwitch,
        unstyled,
        variant,
      }}
    >
      <Box {...getStyles('root')} {...others} ref={ref}>
        {children}
      </Box>
    </RichTextEditorProvider>
  );
});

RichTextEditor.classes = classes;
RichTextEditor.displayName = '@mantine/tiptap/RichTextEditor';

// Generic components
RichTextEditor.Content = RichTextEditorContent;
RichTextEditor.Control = RichTextEditorControl;
RichTextEditor.Toolbar = RichTextEditorToolbar;
RichTextEditor.ControlsGroup = RichTextEditorControlsGroup;

// Controls components
RichTextEditor.Bold = controls.BoldControl;
RichTextEditor.Italic = controls.ItalicControl;
RichTextEditor.Strikethrough = controls.StrikeThroughControl;
RichTextEditor.Underline = controls.UnderlineControl;
RichTextEditor.ClearFormatting = controls.ClearFormattingControl;
RichTextEditor.H1 = controls.H1Control;
RichTextEditor.H2 = controls.H2Control;
RichTextEditor.H3 = controls.H3Control;
RichTextEditor.H4 = controls.H4Control;
RichTextEditor.H5 = controls.H5Control;
RichTextEditor.H6 = controls.H6Control;
RichTextEditor.BulletList = controls.BulletListControl;
RichTextEditor.OrderedList = controls.OrderedListControl;
RichTextEditor.Link = controls.RichTextEditorLinkControl;
RichTextEditor.Unlink = controls.UnlinkControl;
RichTextEditor.Blockquote = controls.BlockquoteControl;
RichTextEditor.AlignLeft = controls.AlignLeftControl;
RichTextEditor.AlignRight = controls.AlignRightControl;
RichTextEditor.AlignCenter = controls.AlignCenterControl;
RichTextEditor.AlignJustify = controls.AlignJustifyControl;
RichTextEditor.Superscript = controls.SuperscriptControl;
RichTextEditor.Subscript = controls.SubscriptControl;
RichTextEditor.Code = controls.CodeControl;
RichTextEditor.CodeBlock = controls.CodeBlockControl;
RichTextEditor.ColorPicker = controls.RichTextEditorColorPickerControl;
RichTextEditor.Color = controls.RichTextEditorColorControl;
RichTextEditor.Highlight = controls.HighlightControl;
RichTextEditor.Hr = controls.HrControl;
RichTextEditor.UnsetColor = controls.UnsetColorControl;
RichTextEditor.Undo = controls.UndoControl;
RichTextEditor.Redo = controls.RedoControl;
RichTextEditor.TaskList = controls.TaskListControl;
RichTextEditor.TaskListSink = controls.TaskListSinkControl;
RichTextEditor.TaskListLift = controls.TaskListLiftControl;
RichTextEditor.SourceCode = RichTextEditorSourceCodeControl;
RichTextEditor.SetDetails = controls.SetDetailsControl;
RichTextEditor.UnsetDetails = controls.UnsetDetailsControl;
RichTextEditor.InsertTable = RichTextEditorInsertTableControl;
RichTextEditor.AddColumnBefore = controls.AddColumnBeforeControl;
RichTextEditor.AddColumnAfter = controls.AddColumnAfterControl;
RichTextEditor.DeleteColumn = controls.DeleteColumnControl;
RichTextEditor.AddRowBefore = controls.AddRowBeforeControl;
RichTextEditor.AddRowAfter = controls.AddRowAfterControl;
RichTextEditor.DeleteRow = controls.DeleteRowControl;
RichTextEditor.DeleteTable = controls.DeleteTableControl;
RichTextEditor.MergeCells = controls.MergeCellsControl;
RichTextEditor.SplitCell = controls.SplitCellControl;
RichTextEditor.ToggleHeaderColumn = controls.ToggleHeaderColumnControl;
RichTextEditor.ToggleHeaderRow = controls.ToggleHeaderRowControl;
RichTextEditor.ToggleHeaderCell = controls.ToggleHeaderCellControl;
RichTextEditor.MergeOrSplit = controls.MergeOrSplitControl;
RichTextEditor.SetCellAttribute = RichTextEditorSetCellAttributeControl;
RichTextEditor.FixTables = controls.FixTablesControl;
RichTextEditor.GoToNextCell = controls.GoToNextCellControl;
RichTextEditor.GoToPreviousCell = controls.GoToPreviousCellControl;
