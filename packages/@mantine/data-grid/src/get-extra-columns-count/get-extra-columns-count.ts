interface ExtraColumnsFlags {
  withRowReorder: boolean;
  withRowSelection: boolean;
  withRowExpansion: boolean;
  withTreeData: boolean;
  withRowNumbers: boolean;
}

export function getExtraColumnsCount(flags: ExtraColumnsFlags): number {
  let count = 0;
  if (flags.withRowReorder) {
    count += 1;
  }
  if (flags.withRowSelection) {
    count += 1;
  }
  if (flags.withRowExpansion && !flags.withTreeData) {
    count += 1;
  }
  if (flags.withRowNumbers) {
    count += 1;
  }
  return count;
}
