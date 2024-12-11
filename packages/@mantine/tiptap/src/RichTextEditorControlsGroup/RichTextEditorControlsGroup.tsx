import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@mantine/core';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import classes from '../RichTextEditor.module.css';

export type RichTextEditorControlsGroupStylesNames = 'controlsGroup';
export interface RichTextEditorControlsGroupProps
  extends BoxProps,
    CompoundStylesApiProps<RichTextEditorControlsGroupFactory>,
    ElementProps<'div'> {}

export type RichTextEditorControlsGroupFactory = Factory<{
  props: RichTextEditorControlsGroupProps;
  ref: HTMLDivElement;
  stylesNames: RichTextEditorControlsGroupStylesNames;
  compound: true;
}>;

const defaultProps: Partial<RichTextEditorControlsGroupProps> = {};

export const RichTextEditorControlsGroup = factory<RichTextEditorControlsGroupFactory>(
  (_props, ref) => {
    const props = useProps('RichTextEditorControlsGroup', defaultProps, _props);
    const { classNames, className, style, styles, vars, variant, ...others } = props;
    const ctx = useRichTextEditorContext();
    return (
      <Box
        ref={ref}
        variant={variant || ctx.variant}
        {...ctx.getStyles('controlsGroup', { className, style, styles, classNames })}
        {...others}
      />
    );
  }
);

RichTextEditorControlsGroup.classes = classes;
RichTextEditorControlsGroup.displayName = '@mantine/tiptap/RichTextEditorControlsGroup';
