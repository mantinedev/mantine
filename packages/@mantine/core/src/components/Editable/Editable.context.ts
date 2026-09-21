import { createSafeContext, GetStylesApi } from '../../core';
import type { EditableFactory } from './Editable';
import type { EditableController } from './use-editable';

export interface EditablePlaceholder {
  edit?: string;
  preview?: string;
}

export interface EditableContextValue {
  getStyles: GetStylesApi<EditableFactory>;
  controller: EditableController;
  inputRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
  previewRef: React.RefObject<HTMLDivElement | null>;
  returningFocusRef: React.RefObject<boolean>;
  exitViaBlurRef: React.RefObject<boolean>;
  multiline: boolean;
  autosize: boolean;
  minRows: number | undefined;
  maxRows: number | undefined;
  placeholder: EditablePlaceholder;
  required: boolean | undefined;
  maxLength: number | undefined;
  name: string | undefined;
}

export const [EditableProvider, useEditableContext] = createSafeContext<EditableContextValue>(
  'Editable component was not found in tree'
);
