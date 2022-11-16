/* eslint-disable react/no-unused-prop-types */
import React, { useMemo } from 'react';
import {
  Box,
  useComponentDefaultProps,
  DefaultProps,
  Selectors,
  StylesApiProvider,
} from '@mantine/core';
import { Editor } from '@tiptap/react';
import { RichTextEditorProvider } from './RichTextEditor.context';
import * as controls from './controls';
import { Content, ContentStylesNames } from './Content/Content';
import { Control, ControlStylesNames } from './controls/Control/Control';
import { ControlsGroup, ControlsGroupStylesNames } from './controls/ControlsGroup/ControlsGroup';
import { Toolbar, ToolbarStylesNames } from './Toolbar/Toolbar';
import { LinkControlStylesNames } from './controls/LinkControl/LinkControl';
import { DEFAULT_LABELS, RichTextEditorLabels } from './labels';
import useStyles from './RichTextEditor.styles';

export type RichTextEditorStylesNames =
  | Selectors<typeof useStyles>
  | ContentStylesNames
  | ControlStylesNames
  | ControlsGroupStylesNames
  | ToolbarStylesNames
  | LinkControlStylesNames;

export interface RichTextEditorProps
  extends DefaultProps<RichTextEditorStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Tiptap editor instance */
  editor: Editor;

  /** Determines whether code highlight styles should be added, true by default */
  withCodeHighlightStyles?: boolean;

  /** Determines whether typography styles should be added, true by default */
  withTypographyStyles?: boolean;

  /** Labels that are used in controls */
  labels?: Partial<RichTextEditorLabels>;

  /** Child editor components */
  children: React.ReactNode;
}

const defaultProps: Partial<RichTextEditorProps> = {
  withCodeHighlightStyles: true,
  withTypographyStyles: true,
};

export function RichTextEditor(props: RichTextEditorProps) {
  const {
    editor,
    children,
    className,
    labels,
    withCodeHighlightStyles,
    withTypographyStyles,
    classNames,
    styles,
    unstyled,
    ...others
  } = useComponentDefaultProps('RichTextEditor', defaultProps, props);
  const { classes, cx } = useStyles(null, { name: 'RichTextEditor', classNames, styles, unstyled });
  const mergedLabels = useMemo(() => ({ ...DEFAULT_LABELS, ...labels }), [labels]);

  return (
    <StylesApiProvider classNames={classNames} styles={styles} unstyled={unstyled}>
      <RichTextEditorProvider
        value={{ editor, labels: mergedLabels, withCodeHighlightStyles, withTypographyStyles }}
      >
        <Box className={cx(classes.root, className)} {...others}>
          {children}
        </Box>
      </RichTextEditorProvider>
    </StylesApiProvider>
  );
}

// Generic components
RichTextEditor.Content = Content;
RichTextEditor.Control = Control;
RichTextEditor.ControlsGroup = ControlsGroup;
RichTextEditor.Toolbar = Toolbar;

// Controls components
RichTextEditor.Bold = controls.BoldControl;
RichTextEditor.Italic = controls.ItalicControl;
RichTextEditor.Strikethrough = controls.StrikeThoughControl;
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
RichTextEditor.Link = controls.LinkControl;
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
RichTextEditor.ColorPicker = controls.ColorPickerControl;
RichTextEditor.Color = controls.ColorControl;
RichTextEditor.Highlight = controls.HighlightControl;
RichTextEditor.Hr = controls.HrControl;
RichTextEditor.UnsetColor = controls.UnsetColorControl;

RichTextEditor.displayName = '@mantine/tiptap/RichTextEditor';
