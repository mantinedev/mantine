import { forwardRef, ReactNode } from 'react';
import { IconSettings } from '@tabler/icons-react';
import { BoxProps, ElementProps, useProps } from '@mantine/core';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import { RichTextEditorControl } from './RichTextEditorControl';

export interface RichTextEditorSetCellAttributeControlProps
  extends BoxProps,
    ElementProps<'button'> {
  /** Key for the custom attribute to be set, for example 'colspan' */
  attributeKey: string;
  /** Function for value of the custom attribute to be set based on the current value */
  attributeValue: (currentValue: any) => any;
  /** Function to determine whether the control is disabled based on the current value */
  disabledByValue?: (currentValue: any) => boolean;
  /** Custom label for the control */
  label?: string;
  /** Custom icon for the control */
  icon?: ReactNode;
}

export const RichTextEditorSetCellAttributeControl = forwardRef<
  HTMLButtonElement,
  RichTextEditorSetCellAttributeControlProps
>((props, ref) => {
  const {
    attributeKey,
    attributeValue,
    disabled: providedDisabled,
    disabledByValue,
    label: providedLabel,
    icon,
    ...others
  } = useProps('RichTextEditorSetCellAttributeControl', null, props);
  const { editor, labels, variant } = useRichTextEditorContext();
  let currentAttribute = editor?.getAttributes('tableCell');
  if (currentAttribute === undefined || Object.keys(currentAttribute).length === 0) {
    currentAttribute = editor?.getAttributes('tableHeader');
  }
  const currentAttributeValue = currentAttribute?.[attributeKey];
  const label = providedLabel ?? labels.setCellAttributeLabel;
  const nextAttributeValue = attributeValue(currentAttributeValue);
  const disabled =
    providedDisabled ??
    (!(editor?.can() as any)?.setCellAttribute(attributeKey, nextAttributeValue) ||
      disabledByValue?.(currentAttributeValue));

  return (
    <RichTextEditorControl
      {...others}
      variant={variant}
      active={!disabled && currentAttributeValue === nextAttributeValue}
      aria-label={label}
      title={label}
      onClick={() =>
        (editor?.chain() as any).focus().setCellAttribute(attributeKey, nextAttributeValue).run()
      }
      disabled={disabled}
      ref={ref}
    >
      {icon ?? <IconSettings strokeWidth={1.5} size={16} />}
    </RichTextEditorControl>
  );
});

RichTextEditorSetCellAttributeControl.displayName =
  '@mantine/tiptap/RichTextEditorSetCellAttributeControl';
