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

const SURROGATES_REGEX = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g;

function replaceLoneSurrogates(value: string) {
  return value.replace(SURROGATES_REGEX, (match) => (match.length === 2 ? match : '\uFFFD'));
}

/** Encodes the given value into a QR code matrix without rendering it. Useful for custom renderers (rounded dots, gradients, canvas export, etc.). Lone UTF-16 surrogates are replaced with U+FFFD. Throws a `RangeError` when the value exceeds the capacity of a version 40 QR code for the given error correction level. */
export function encodeQR(value: string, options?: EncodeQROptions): EncodeQRResult {
  const result = encode(replaceLoneSurrogates(value), {
    ecc: options?.errorCorrectionLevel ?? 'M',
    border: 0,
  });
  return { matrix: result.data, size: result.size };
}
