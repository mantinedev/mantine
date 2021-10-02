export function fromEntries(entries: any) {
  const o: any = {};

  Object.keys(entries).forEach((key) => {
    const [k, v] = entries[key];
    o[k] = v;
  });

  return o;
}
