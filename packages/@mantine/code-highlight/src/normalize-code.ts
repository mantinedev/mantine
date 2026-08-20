/**
 * Removes blank lines at the start and trailing whitespace of the code.
 * Unlike `code.trim()`, keeps the indentation of the first line – trimming it
 * misaligns blocks whose first line is intentionally indented, for example
 * column-aligned text or a wrapped shell command.
 */
export function normalizeCode(code: string) {
  return code.replace(/^[\r\n]+|\s+$/g, '');
}
