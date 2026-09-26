export interface ColumnDefIdSource {
  id?: string;
  accessorKey?: unknown;
  header?: unknown;
  columns?: readonly ColumnDefIdSource[];
}

export function getColumnDefId(def: ColumnDefIdSource): string | undefined {
  const accessorKey =
    def.accessorKey === undefined ? undefined : String(def.accessorKey).replaceAll('.', '_');
  return def.id ?? accessorKey ?? (typeof def.header === 'string' ? def.header : undefined);
}

export function collectLeafColumnDefIds<TDef extends ColumnDefIdSource>(
  columns: readonly TDef[],
  predicate: (def: TDef) => boolean,
  acc: string[] = []
): string[] {
  for (const def of columns) {
    if (def.columns) {
      collectLeafColumnDefIds(def.columns as readonly TDef[], predicate, acc);
      continue;
    }

    if (predicate(def)) {
      const id = getColumnDefId(def);
      if (id) {
        acc.push(id);
      }
    }
  }

  return acc;
}
