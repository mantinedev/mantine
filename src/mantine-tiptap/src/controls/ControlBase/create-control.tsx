import React, { forwardRef } from 'react';
import { useRichTextEditorContext } from '../../RichTextEditor.context';
import { RichTextEditorLabels } from '../../labels';
import { PremadeControlProps } from '../Control/Control';
import { ControlBase } from './ControlBase';

interface CreateControlProps {
  label: keyof RichTextEditorLabels;
  icon: React.FC<{ size: number }>;
  isActive?: { name: string; attributes?: Record<string, any> | string };
  operation: { name: string; attributes?: Record<string, any> | string };
}

export function createControl({ label, isActive, operation, icon }: CreateControlProps) {
  return forwardRef<HTMLButtonElement, PremadeControlProps>((props, ref) => {
    const { editor, labels } = useRichTextEditorContext();
    const _label = labels[label] as string;
    return (
      <ControlBase
        aria-label={_label}
        title={_label}
        active={isActive?.name ? editor?.isActive(isActive.name, isActive.attributes) : false}
        ref={ref}
        onClick={() => editor?.chain().focus()[operation.name](operation.attributes).run()}
        icon={icon}
        {...props}
      />
    );
  });
}
