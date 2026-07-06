import { useEditableContext } from './Editable.context';

export function useEditableField(multiline: boolean) {
  const ctx = useEditableContext();
  const { controller } = ctx;

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    controller.setValue(event.currentTarget.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.nativeEvent.isComposing) {
      return;
    }

    if (event.key === 'Enter' && (!multiline || event.metaKey || event.ctrlKey)) {
      if (controller.submitMode === 'both' || controller.submitMode === 'enter') {
        event.preventDefault();
        controller.submit();
      }
    } else if (event.key === 'Escape') {
      event.preventDefault();
      controller.cancel();
    }
  };

  const onBlur = () => {
    if (controller.submitMode === 'both' || controller.submitMode === 'blur') {
      ctx.exitViaBlurRef.current = true;
      controller.submit();
    }
  };

  return {
    hidden: !controller.editing,
    attributes: {
      value: controller.value,
      disabled: controller.disabled,
      readOnly: controller.readOnly,
      required: ctx.required,
      maxLength: ctx.maxLength,
      name: ctx.name,
      placeholder: ctx.placeholder.edit,
    },
    onChange,
    onKeyDown,
    onBlur,
  };
}
