import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  rem,
  useDirection,
  useProps,
} from '@mantine/core';
import { useMergedRef } from '@mantine/hooks';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import { useToolbarNavigation } from './use-toolbar-navigation';
import classes from '../RichTextEditor.module.css';

export type RichTextEditorToolbarStylesNames = 'toolbar';

export interface RichTextEditorToolbarProps
  extends BoxProps, CompoundStylesApiProps<RichTextEditorToolbarFactory>, ElementProps<'div'> {
  /** Determines whether `position: sticky` styles should be added to the toolbar @default false */
  sticky?: boolean;

  /** Sets top style to offset elements with fixed position @default 0 */
  stickyOffset?: React.CSSProperties['top'];
}

export type RichTextEditorToolbarFactory = Factory<{
  props: RichTextEditorToolbarProps;
  ref: HTMLDivElement;
  stylesNames: RichTextEditorToolbarStylesNames;
  compound: true;
}>;

export const RichTextEditorToolbar = factory<RichTextEditorToolbarFactory>((_props) => {
  const props = useProps('RichTextEditorToolbar', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    sticky,
    stickyOffset,
    mod,
    variant,
    ref,
    onKeyDown,
    onFocus,
    ...others
  } = props;
  const ctx = useRichTextEditorContext();
  const { dir } = useDirection();
  const { toolbarRef, handleKeyDown, handleFocus } = useToolbarNavigation(dir);
  const mergedRef = useMergedRef(ref, toolbarRef);

  return (
    <Box
      ref={mergedRef}
      role="toolbar"
      aria-orientation="horizontal"
      mod={[{ sticky }, mod]}
      variant={variant || ctx.variant}
      {...ctx.getStyles('toolbar', { className, style, styles, classNames })}
      {...others}
      onKeyDown={(event) => {
        handleKeyDown(event);
        onKeyDown?.(event);
      }}
      onFocus={(event) => {
        handleFocus(event);
        onFocus?.(event);
      }}
      __vars={{ '--rte-sticky-offset': rem(stickyOffset) }}
    />
  );
});

RichTextEditorToolbar.classes = classes;
RichTextEditorToolbar.displayName = '@mantine/tiptap/RichTextEditorToolbar';
