import React, { forwardRef } from 'react';
import {
  Box,
  DefaultProps,
  TypographyStylesProvider,
  Selectors,
  useContextStylesApi,
  useComponentDefaultProps,
} from '@mantine/core';
import { EditorContent } from '@tiptap/react';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import useStyles from './Content.styles';

export type ContentStylesNames = Selectors<typeof useStyles>;

export interface RichTextEditorContentProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'div'> {}

const defaultProps: Partial<RichTextEditorContentProps> = {};

export const Content = forwardRef<HTMLDivElement, RichTextEditorContentProps>((props, ref) => {
  const { className, ...others } = useComponentDefaultProps(
    'RichTextEditor.Content',
    defaultProps,
    props
  );

  const { classNames, styles, unstyled } = useContextStylesApi();
  const { editor, withCodeHighlightStyles, withTypographyStyles } = useRichTextEditorContext();
  const { classes, cx } = useStyles(
    { withCodeHighlightStyles, withTypographyStyles },
    { name: 'RichTextEditor', classNames, styles, unstyled }
  );

  return (
    <TypographyStylesProvider
      className={cx(classes.typographyStylesProvider, className)}
      unstyled={!withTypographyStyles || unstyled}
      ref={ref}
    >
      <Box component={EditorContent} editor={editor} className={classes.content} {...others} />
    </TypographyStylesProvider>
  );
});

Content.displayName = '@mantine/tiptap/Content';
