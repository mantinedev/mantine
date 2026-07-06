/*
 * Vendored from `uqr` (https://github.com/unjs/uqr) — MIT License.
 * Copyright (c) Project Nayuki, Copyright (c) 2023 Anthony Fu.
 * See ./LICENSE for the full license text.
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

export interface QrCodeGenerateInvertableOptions extends QrCodeGenerateOptions {
  /**
   * Adds the option to invert the colour scheme of the QR code in addition to the standard options.
   */
  invert?: boolean;
}

export interface QrCodeGenerateUnicodeOptions extends QrCodeGenerateInvertableOptions {
  /**
   * Character used to represent white modules in the QR code.
   */
  whiteChar?: string;
  /**
   * Character used to represent black modules in the QR code.
   */
  blackChar?: string;
}

export interface QrCodeGenerateSvgOptions extends QrCodeGenerateOptions {
  /**
   * Size of each pixel
   *
   * @default 10
   */
  pixelSize?: number;

  /**
   * Color of the white module
   *
   * @default 'white'
   */
  whiteColor?: string;

  /**
   * Color of the black module
   *
   * @default 'black'
   */
  blackColor?: string;
}
