/** Builds an SVG path `d` string that draws every dark module of a QR code matrix as a 1×1 square, offset by the quiet-zone `margin` (in modules). */
export function getQRCodePath(matrix: boolean[][], margin: number): string {
  const parts: string[] = [];

  for (let y = 0; y < matrix.length; y += 1) {
    const row = matrix[y];
    for (let x = 0; x < row.length; x += 1) {
      if (row[x]) {
        parts.push(`M${x + margin},${y + margin}h1v1h-1z`);
      }
    }
  }

  return parts.join('');
}
