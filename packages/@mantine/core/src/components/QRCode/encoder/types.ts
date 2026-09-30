/*
 * Vendored from uqr 0.1.3 (https://github.com/unjs/uqr) — MIT License.
 * uqr is a port of the QR Code generator library by Project Nayuki
 * (https://www.nayuki.io/page/qr-code-generator-library).
 * Copyright (c) Project Nayuki, Copyright (c) 2023 Anthony Fu.
 * See ./LICENSE for the full license text.
 *
 * Local changes compared to uqr 0.1.3:
 * - Only the encoder is vendored: uqr's renderers (renderANSI, renderUnicode,
 *   renderUnicodeCompact, renderSVG) and the getDataAt helper are removed together
 *   with their renderer-only option types
 * - TypeScript types adjusted for the Mantine build (strict mode)
 * - Formatted with oxfmt
 * - Lone UTF-16 surrogates are replaced with U+FFFD by the Mantine boundary
 *   (../encode-qr.ts) before reaching this encoder, the algorithm is unchanged
 */

/**
 * String or binary
 */
export type QrCodeGenerateData = string | Readonly<Array<number>>;

export interface QrCodeGenerateOptions {
  /**
   * Error correction level
   *
   * L - Allows recovery of up to 7% data loss
   * M - Allows recovery of up to 15% data loss
   * Q - Allows recovery of up to 25% data loss
   * H - Allows recovery of up to 30% data loss
   *
   * @default 'L'
   */
  ecc?: 'L' | 'M' | 'Q' | 'H';
  /**
   * Mask pattern to use
   *
   * @default -1 (auto)
   */
  maskPattern?: number;
  /**
   * Boost the error correction level to the maximum allowed by the version and size
   */
  boostEcc?: boolean;
  /**
   * Minimum version of the QR code (1-40)
   * @default 1
   */
  minVersion?: number;
  /**
   * Maximum version of the QR code (1-40)
   * @default 40
   */
  maxVersion?: number;
  /**
   * Border around the QR code
   *
   * @default 1
   */
  border?: number;
  /**
   * Invert black and white
   */
  invert?: boolean;

  /**
   * Callback function to receive the generated QR Code
   */
  onEncoded?: (qr: QrCodeGenerateResult) => void;
}

export enum QrCodeDataType {
  Border = -1,
  Data = 0,
  Function = 1,
  Position = 2,
  Timing = 3,
  Alignment = 4,
}

export interface QrCodeGenerateResult {
  /**
   * QR Code version
   */
  version: number;
  /**
   * Width and height of the QR Code array
   */
  size: number;
  /**
   * Mask pattern used
   */
  maskPattern: number;
  /**
   * Two dimensional array representing the QR Code
   *
   * `true` for black, `false` for white
   */
  data: boolean[][];
  /**
   * Data type of each module
   */
  types: QrCodeDataType[][];
}
