import { useMergedRef } from '@mantine/hooks';
import { useEditableContext } from './Editable.context';

type EditableFieldElement = HTMLInputElement | HTMLTextAreaElement;

interface UseEditableFieldInput<T extends EditableFieldElement> {
  multiline: boolean;
  ref: React.Ref<T> | undefined;
  onChange: React.ChangeEventHandler<T> | undefined;
  onKeyDown: React.KeyboardEventHandler<T> | undefined;
}

export function useEditableField<T extends EditableFieldElement>({
  multiline,
  ref,
  onChange,
  onKeyDown,
}: UseEditableFieldInput<T>) {
  const ctx = useEditableContext();
  const { controller, focus } = ctx;
  const mergedRef = useMergedRef(focus.inputRef as React.Ref<T>, ref);

  const handleChange = (event: React.ChangeEvent<T>) => {
    controller.setValue(event.currentTarget.value);
    onChange?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent<T>) => {
    const composing = event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229;

    if (!composing) {
      if (event.key === 'Enter' && (!multiline || event.metaKey || event.ctrlKey)) {
        if (controller.submitMode === 'both' || controller.submitMode === 'enter') {
          event.preventDefault();
          controller.submit();
        }
      } else if (event.key === 'Escape') {
        event.preventDefault();
        controller.cancel();
      }
    }

    onKeyDown?.(event);
  };

  return {
    hidden: !controller.editing,
    fieldProps: {
      value: controller.value,
      disabled: controller.disabled,
      readOnly: controller.readOnly,
      required: ctx.required,
      maxLength: ctx.maxLength,
      name: ctx.name,
      placeholder: ctx.placeholder.edit,
      'data-mantine-stop-propagation': true,
      ref: mergedRef,
      onChange: handleChange,
      onKeyDown: handleKeyDown,
    },
  };
}
