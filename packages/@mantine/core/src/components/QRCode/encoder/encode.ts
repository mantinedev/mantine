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

import { EccMap, encodeSegments, makeBytes, makeSegments } from './qrcode';
import type { QrCodeGenerateData, QrCodeGenerateOptions, QrCodeGenerateResult } from './types';
import { QrCodeDataType } from './types';

/**
 * Encodes the given data into a QR code format according to the given options.
 * @param {QrCodeGenerateData} data - The data to encode, either as a string or an array of bytes. See {@link QrCodeGenerateData}.
 * @param {QrCodeGenerateOptions} [options] - QR Code generation configuration options. Optional. See {@link QrCodeGenerateOptions}.
 * @returns {QrCodeGenerateResult} The result of the QR code generation, including the QR code matrix. See {@link QrCodeGenerateResult}.
 */
export function encode(
  data: QrCodeGenerateData,
  options?: QrCodeGenerateOptions
): QrCodeGenerateResult {
  const {
    ecc = 'L',
    boostEcc = false,
    minVersion = 1,
    maxVersion = 40,
    maskPattern = -1,
    border = 1,
  } = options || {};

  const segment =
    typeof data === 'string'
      ? makeSegments(data)
      : Array.isArray(data)
        ? [makeBytes(data)]
        : undefined;

  if (!segment)
    throw new Error(`uqr only supports encoding string and binary data, but got: ${typeof data}`);

  const qr = encodeSegments(segment, EccMap[ecc], minVersion, maxVersion, maskPattern, boostEcc);

  const result = addBorder(
    {
      version: qr.version,
      maskPattern: qr.mask,
      size: qr.size,
      data: qr.modules,
      types: qr.types,
    },
    border
  );

  if (options?.invert) result.data = result.data.map((row) => row.map((mod) => !mod));

  options?.onEncoded?.(result);

  return result;
}

function addBorder(input: QrCodeGenerateResult, border = 1): QrCodeGenerateResult {
  if (!border) return input;

  const { size } = input;
  const newSize = size + border * 2;

  input.size = newSize;

  input.data.forEach((row) => {
    for (let i = 0; i < border; i++) {
      row.unshift(false);
      row.push(false);
    }
  });
  for (let i = 0; i < border; i++) {
    input.data.unshift(Array.from({ length: newSize }, (_) => false));
    input.data.push(Array.from({ length: newSize }, (_) => false));
  }

  const b = QrCodeDataType.Border;
  input.types.forEach((row) => {
    for (let i = 0; i < border; i++) {
      row.unshift(b);
      row.push(b);
    }
  });
  for (let i = 0; i < border; i++) {
    input.types.unshift(Array.from({ length: newSize }, (_) => b));
    input.types.push(Array.from({ length: newSize }, (_) => b));
  }

  return input;
}
