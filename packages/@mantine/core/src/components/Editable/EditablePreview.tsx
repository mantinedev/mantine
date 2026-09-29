import { useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { useEditableContext } from './Editable.context';
import classes from './Editable.module.css';

export type EditablePreviewStylesNames = 'preview';

export interface EditablePreviewProps
  extends BoxProps, CompoundStylesApiProps<EditablePreviewFactory>, ElementProps<'div'> {}

export type EditablePreviewFactory = Factory<{
  props: EditablePreviewProps;
  ref: HTMLDivElement;
  stylesNames: EditablePreviewStylesNames;
  compound: true;
}>;

const defaultProps: Partial<EditablePreviewProps> = {};

export const EditablePreview = factory<EditablePreviewFactory>((_props) => {
  const props = useProps('EditablePreview', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    children,
    onClick,
    onDoubleClick,
    onFocus,
    onKeyDown,
    ref,
    ...others
  } = props;

  const ctx = useEditableContext();
  const mergedRef = useMergedRef(ctx.focus.previewRef, ref);

  if (ctx.controller.editing) {
    return null;
  }

  const { activationMode, disabled, readOnly } = ctx.controller;
  const isEmpty = ctx.controller.value.length === 0;
  const interactive = activationMode !== 'none' && !disabled && !readOnly;

  return (
    <Box
      {...ctx.ariaProps}
      data-empty={isEmpty || undefined}
      data-disabled={disabled || undefined}
      data-read-only={readOnly || undefined}
      data-multiline={ctx.multiline || undefined}
      {...others}
      ref={mergedRef}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      {...ctx.getStyles('preview', { className, style, classNames, styles })}
      onClick={(event) => {
        if (activationMode === 'click' || activationMode === 'focus') {
          ctx.controller.edit();
        }
        onClick?.(event);
      }}
      onDoubleClick={(event) => {
        if (activationMode === 'dblclick') {
          ctx.controller.edit();
        }
        onDoubleClick?.(event);
      }}
      onFocus={(event) => {
        const returning = ctx.focus.consumeReturningFocus();
        if (!returning && activationMode === 'focus') {
          ctx.controller.edit();
        }
        onFocus?.(event);
      }}
      onKeyDown={(event) => {
        if (interactive && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          ctx.controller.edit();
        }
        onKeyDown?.(event);
      }}
    >
      {children ?? (isEmpty ? ctx.placeholder.preview : ctx.controller.value)}
    </Box>
  );
});

EditablePreview.classes = classes;
EditablePreview.displayName = '@mantine/core/EditablePreview';
