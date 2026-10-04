export const PATH_SEPARATOR = '\0';

export function serializePath(segments: string[]): string {
  return segments.join(PATH_SEPARATOR);
}

export interface JsonViewerArrayChunk {
  start: number;
  end: number;
}

export function getArrayChunks(
  length: number,
  groupArraysAfterLength: number | false
): JsonViewerArrayChunk[] | null {
  if (groupArraysAfterLength === false) {
    return null;
  }

  const size = Math.floor(groupArraysAfterLength);
  if (!(size >= 1) || length <= groupArraysAfterLength) {
    return null;
  }

  const chunks: JsonViewerArrayChunk[] = [];
  for (let start = 0; start < length; start += size) {
    chunks.push({ start, end: Math.min(start + size, length) - 1 });
  }
  return chunks;
}

export function getChunkSegment(chunk: JsonViewerArrayChunk): string {
  return `[${chunk.start}...${chunk.end}]`;
}

export function resolveDisplayValue(value: any): any {
  if (value !== null && typeof value === 'object' && typeof value.toJSON === 'function') {
    try {
      return value.toJSON();
    } catch {
      return value;
    }
  }
  return value;
}

export function isExpandableValue(value: any): value is object {
  return value !== null && typeof value === 'object';
}

export function getEntries(value: object): [string, any][] {
  return Array.isArray(value)
    ? value.map((item, index) => [String(index), item])
    : Object.entries(value);
}

export interface GetExpandablePathsOptions {
  depth?: number;
  groupArraysAfterLength?: number | false;
}

export function getExpandablePaths(
  value: any,
  { depth = Infinity, groupArraysAfterLength = false }: GetExpandablePathsOptions = {}
): string[] {
  const paths: string[] = [];
  const ancestors = new WeakSet<object>();

  const visitChildren = (entries: [string, any][], path: string[], childLevel: number) => {
    for (const [key, child] of entries) {
      visit(child, [...path, key], childLevel);
    }
  };

  const visit = (node: any, path: string[], level: number) => {
    const resolved = resolveDisplayValue(node);
    if (!isExpandableValue(resolved) || ancestors.has(resolved) || level > depth) {
      return;
    }

    const entries = getEntries(resolved);
    if (entries.length === 0) {
      return;
    }

    if (path.length > 0) {
      paths.push(serializePath(path));
    }

    ancestors.add(resolved);
    const chunks = Array.isArray(resolved)
      ? getArrayChunks(entries.length, groupArraysAfterLength)
      : null;

    if (chunks) {
      if (level + 1 <= depth) {
        for (const chunk of chunks) {
          paths.push(serializePath([...path, getChunkSegment(chunk)]));
          visitChildren(entries.slice(chunk.start, chunk.end + 1), path, level + 2);
        }
      }
    } else {
      visitChildren(entries, path, level + 1);
    }
    ancestors.delete(resolved);
  };

  visit(value, [], 1);
  return paths;
}

export function getValueType(value: any): string {
  if (value === null) {
    return 'null';
  }
  if (Array.isArray(value)) {
    return 'array';
  }
  return typeof value;
}

export function getTypeLabel(value: any): string {
  const type = getValueType(value);
  switch (type) {
    case 'string':
      return 'string';
    case 'number':
      return Number.isInteger(value) ? 'int' : 'float';
    case 'boolean':
      return 'bool';
    case 'null':
      return 'null';
    case 'undefined':
      return 'undefined';
    case 'array':
      return 'array';
    case 'object':
      return 'object';
    default:
      return type;
  }
}

export function formatValue(
  value: any,
  withQuotes: boolean,
  collapseStringsAfterLength: number | false
): { display: string; collapsed: boolean } {
  if (value === null) {
    return { display: 'null', collapsed: false };
  }
  if (value === undefined) {
    return { display: 'undefined', collapsed: false };
  }
  if (typeof value === 'boolean') {
    return { display: String(value), collapsed: false };
  }
  if (typeof value === 'number') {
    return { display: String(value), collapsed: false };
  }
  if (typeof value === 'string') {
    if (collapseStringsAfterLength !== false && value.length > collapseStringsAfterLength) {
      const splitsPair = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(
        value.slice(collapseStringsAfterLength - 1)
      );
      const truncated = value.slice(0, collapseStringsAfterLength - (splitsPair ? 1 : 0));
      return {
        display: withQuotes ? `${JSON.stringify(truncated).slice(0, -1)}..."` : `${truncated}...`,
        collapsed: true,
      };
    }
    return { display: withQuotes ? JSON.stringify(value) : value, collapsed: false };
  }
  return { display: String(value), collapsed: false };
}

function createStringifyReplacer() {
  const ancestors: object[] = [];
  return function replacer(this: any, _key: string, value: any) {
    if (typeof value === 'bigint') {
      return value.toString();
    }
    if (typeof value !== 'object' || value === null) {
      return value;
    }
    while (ancestors.length > 0 && ancestors[ancestors.length - 1] !== this) {
      ancestors.pop();
    }
    if (ancestors.includes(value)) {
      return '[Circular]';
    }
    ancestors.push(value);
    return value;
  };
}

export function safeStringify(value: any): string {
  try {
    return JSON.stringify(value, createStringifyReplacer(), 2) ?? String(value);
  } catch {
    return String(value);
  }
}
