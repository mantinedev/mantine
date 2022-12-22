export function padTime(value: string) {
  const _val = parseInt(value, 10);

  return _val >= 10 ? _val.toString() : `0${_val}`;
}
