const _colors = [
  '#00FFFF',
  '#A52A2A',
  '#0000FF',
  '#FF7F50',
  '#DC143C',
  '#000000',
  '#B8860B',
  '#006400',
  '#9932CC',
  '#2F4F4F',
  '#FF1493',
  '#1E90FF',
  '#ADFF2F',
  '#FF4500',
  '#4169E1',
  '#FF0000',
  '#2E8B57',
  '#C0C0C0',
  '#4682B4',
  '#FF6347',
  '#FFFF00',
];

const colors = [..._colors, ..._colors, ..._colors];

export function generateBorderStyles(stylesApi: Record<string, any>) {
  return Object.keys(stylesApi).reduce((acc, key, index) => {
    acc[key] = { border: `1px solid ${colors[index]}` };
    return acc;
  }, {});
}
