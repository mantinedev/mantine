interface CreateAmPmHandler {
  onChange(value: string): void;
  nextRef?: React.RefObject<HTMLInputElement>;
}

const testRegex = /(^(a|p)m?$)|(^$)/;

export function createAmPmHandler({ onChange, nextRef }: CreateAmPmHandler) {
  return (value: string, triggerShift: boolean) => {
    const valLower = value.toLowerCase();

    if (valLower === 'am' || valLower === 'pm') {
      onChange(valLower);
      triggerShift && nextRef?.current?.focus();
      triggerShift && nextRef?.current?.select();
      return;
    }

    if (!testRegex.test(valLower)) {
      return;
    }

    onChange(valLower);
  };
}
