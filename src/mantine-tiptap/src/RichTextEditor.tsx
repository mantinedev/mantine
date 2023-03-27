/* eslint-disable react/no-unused-prop-types */
import React, { useMemo, forwardRef } from 'react';
import { Box, useComponentDefaultProps, DefaultProps, Selectors } from '@mantine/core';
import { Editor } from '@tiptap/react';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
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
  variant?: string;

  /** Tiptap editor instance */
  editor: Editor | null;

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

type RichTextEditorComponent = ForwardRefWithStaticComponents<
  RichTextEditorProps,
  {
    Content: typeof Content;
    Control: typeof Control;
    ControlsGroup: typeof ControlsGroup;
    Toolbar: typeof Toolbar;
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
    Link: typeof controls.LinkControl;
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
    ColorPicker: typeof controls.ColorPickerControl;
    Color: typeof controls.ColorControl;
    Highlight: typeof controls.HighlightControl;
    Hr: typeof controls.HrControl;
    UnsetColor: typeof controls.UnsetColorControl;
  }
>;

export const RichTextEditor: RichTextEditorComponent = forwardRef<
  HTMLDivElement,
  RichTextEditorProps
>((props, ref) => {
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
    variant,
    ...others
  } = useComponentDefaultProps('RichTextEditor', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    name: 'RichTextEditor',
    classNames,
    styles,
    unstyled,
    variant,
  });

  const mergedLabels = useMemo(() => ({ ...DEFAULT_LABELS, ...labels }), [labels]);

  return (
    <RichTextEditorProvider
      value={{
        editor,
        labels: mergedLabels,
        withCodeHighlightStyles,
        withTypographyStyles,
        classNames,
        styles,
        unstyled,
        variant,
      }}
    >
      <Box className={cx(classes.root, className)} {...others} ref={ref}>
        {children}
      </Box>
    </RichTextEditorProvider>
  );
}) as any;

// Generic components
RichTextEditor.Content = Content;
RichTextEditor.Control = Control;
RichTextEditor.ControlsGroup = ControlsGroup;
RichTextEditor.Toolbar = Toolbar;

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
