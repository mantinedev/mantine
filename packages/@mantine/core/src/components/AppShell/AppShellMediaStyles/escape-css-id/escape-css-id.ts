function isNameCodeUnit(codeUnit: number) {
  return (
    codeUnit >= 0x80 ||
    codeUnit === 0x2d ||
    codeUnit === 0x5f ||
    (codeUnit >= 0x30 && codeUnit <= 0x39) ||
    (codeUnit >= 0x41 && codeUnit <= 0x5a) ||
    (codeUnit >= 0x61 && codeUnit <= 0x7a)
  );
}

function isDigit(codeUnit: number) {
  return codeUnit >= 0x30 && codeUnit <= 0x39;
}

/** Serializes a string as a CSS identifier, same output as `CSS.escape`, works on the server */
export function escapeCssId(value: string) {
  let result = '';

  for (let index = 0; index < value.length; index += 1) {
    const codeUnit = value.charCodeAt(index);
    const char = value.charAt(index);

    if (codeUnit === 0) {
      result += String.fromCharCode(0xfffd);
    } else if (
      (codeUnit >= 0x1 && codeUnit <= 0x1f) ||
      codeUnit === 0x7f ||
      (index === 0 && isDigit(codeUnit)) ||
      (index === 1 && isDigit(codeUnit) && value.charCodeAt(0) === 0x2d)
    ) {
      result += `\\${codeUnit.toString(16)} `;
    } else if (index === 0 && value.length === 1 && codeUnit === 0x2d) {
      result += `\\${char}`;
    } else if (isNameCodeUnit(codeUnit)) {
      result += char;
    } else {
      result += `\\${char}`;
    }
  }

  return result;
}
