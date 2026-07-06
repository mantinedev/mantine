import { encode } from './encoder';

export type QRCodeErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export interface EncodeQROptions {
  /** Error correction level, higher levels allow the code to be scanned even when it is partially damaged or covered, `'M'` by default */
  errorCorrectionLevel?: QRCodeErrorCorrectionLevel;
}

export interface EncodeQRResult {
  /** Two-dimensional array of QR code modules, `true` for dark modules and `false` for light modules */
  matrix: boolean[][];
  /** Number of modules per side (matrix width and height), does not include the quiet zone */
  size: number;
}

/** Encodes the given value into a QR code matrix without rendering it. Useful for custom renderers (rounded dots, gradients, canvas export, etc.). */
export function encodeQR(value: string, options?: EncodeQROptions): EncodeQRResult {
  const result = encode(value, { ecc: options?.errorCorrectionLevel ?? 'M', border: 0 });
  return { matrix: result.data, size: result.size };
}
