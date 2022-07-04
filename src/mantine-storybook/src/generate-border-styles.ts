export function generateBorderStyles(stylesApi: Record<string, any>) {
  return Object.keys(stylesApi).reduce((acc, key) => {
    acc[key] = { border: `1px solid #${Math.floor(Math.random() * 16777215).toString(16)}` };
    return acc;
  }, {});
}
