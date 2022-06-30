export function getInputOnChange<Value>(
  setValue: (value: Value | ((current: Value) => Value)) => void
) {
  return (val: Value | React.ChangeEvent<unknown> | ((current: Value) => Value)) => {
    if (!val) {
      setValue(val as Value);
    } else if (typeof val === 'function') {
      setValue(val);
    } else if (typeof val === 'object' && 'nativeEvent' in val) {
      const { currentTarget } = val;
      if (currentTarget instanceof HTMLTextAreaElement) {
        setValue(currentTarget.value as any);
      } else if (currentTarget instanceof HTMLInputElement) {
        if (currentTarget.type === 'checkbox') {
          setValue(currentTarget.checked as any);
        } else {
          setValue(currentTarget.value as any);
        }
      }
    } else {
      setValue(val);
    }
  };
}
