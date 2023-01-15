export function rem(px: unknown) {
  if (typeof px === 'number') {
    return `${px / 16}rem`;
  }

  if (typeof px === 'string') {
    const replaced = px.replace('px', '');
    if (!Number.isNaN(Number(replaced))) {
      return `${Number(replaced) / 16}rem`;
    }
  }

  return px as string;
}
