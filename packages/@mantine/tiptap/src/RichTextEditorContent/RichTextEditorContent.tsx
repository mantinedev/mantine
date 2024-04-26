import { EditorContent } from '@tiptap/react';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  TypographyStylesProvider,
  useProps,
} from '@mantine/core';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import classes from '../RichTextEditor.module.css';

export type RichTextEditorContentStylesNames = 'root';
export interface RichTextEditorContentProps
  extends BoxProps,
    CompoundStylesApiProps<RichTextEditorContentFactory>,
    ElementProps<'div'> {}

export type RichTextEditorContentFactory = Factory<{
  props: RichTextEditorContentProps;
  ref: HTMLDivElement;
  stylesNames: RichTextEditorContentStylesNames;
  compound: true;
}>;

const defaultProps: Partial<RichTextEditorContentProps> = {};

export const RichTextEditorContent = factory<RichTextEditorContentFactory>((_props, ref) => {
  const props = useProps('RichTextEditorContent', defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useRichTextEditorContext();

  if (ctx.withTypographyStyles) {
    return (
      <TypographyStylesProvider
        {...ctx.getStyles('typographyStylesProvider', { className, style, styles, classNames })}
        unstyled={ctx.unstyled}
        ref={ref}
      >
        <Box
          component={EditorContent}
          editor={ctx.editor}
          {...ctx.getStyles('content', { classNames, styles })}
          {...others}
        />
      </TypographyStylesProvider>
    );
  }

  return (
    <Box
      component={EditorContent}
      editor={ctx.editor}
      {...ctx.getStyles('content', { classNames, styles, className, style })}
      {...others}
    />
  );
});

RichTextEditorContent.classes = classes;
RichTextEditorContent.displayName = '@mantine/tiptap/RichTextEditorContent';
