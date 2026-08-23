export interface NormalizeCodeOptions {
  /** If set, indentation of the first line of the code is preserved @default false */
  withFirstLineIndentation?: boolean;
}

/**
 * Normalizes code before it is passed to the highlighter: removes blank lines at the start
 * and trailing whitespace.
 *
 * By default, the indentation of the first line is removed as well (`String.trim` behavior).
 * With `withFirstLineIndentation`, it is preserved – trimming it misaligns blocks whose first
 * line is intentionally indented, for example column-aligned text or a wrapped shell command.
 */
export function normalizeCode(
  code: string,
  { withFirstLineIndentation }: NormalizeCodeOptions = {}
) {
  if (!withFirstLineIndentation) {
    return code.trim();
  }

  return code.replace(/^(?:[^\S\r\n]*\r?\n)+|\s+$/g, '');
}
