export function getGradientColorStops(colors: string[]) {
  let stops = '';
  for (let i = 1; i < colors.length - 1; i += 1) {
    stops += `${colors[i]} ${(i / (colors.length - 1)) * 100}%, `;
  }
  return `${colors[0]} 0%, ${stops}${colors[colors.length - 1]} 100%`;
}
