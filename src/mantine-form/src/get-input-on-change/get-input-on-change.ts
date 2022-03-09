export function getInputOnChange<T>(
  setValue: (value: null | undefined | T | ((current: T) => T)) => void
) {
  return (val: null | undefined | T | React.ChangeEvent<any> | ((current: T) => T)) => {
    if (!val) {
      setValue(val as T);
    } else if (typeof val === 'function') {
      setValue(val);
    } else if (typeof val === 'object' && 'nativeEvent' in val) {
      const { currentTarget } = val;

      if (currentTarget.type === 'checkbox') {
        setValue(currentTarget.checked);
      } else {
        setValue(currentTarget.value);
      }
    } else {
      setValue(val);
    }
  };
}
