import { createSafeContext, GetStylesApi } from '../../core';
import type { EditableFactory, EditablePlaceholder } from './Editable';
import { EditableController } from './use-editable';
import { EditableFocus } from './use-editable-focus';

export interface EditableAriaProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

export interface EditableContextValue {
  getStyles: GetStylesApi<EditableFactory>;
  controller: EditableController;
  focus: EditableFocus;
  ariaProps: EditableAriaProps;
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
