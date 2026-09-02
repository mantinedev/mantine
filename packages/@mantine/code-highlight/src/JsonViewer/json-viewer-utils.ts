export const PATH_SEPARATOR = '\0';

export function serializePath(segments: string[]): string {
  return segments.join(PATH_SEPARATOR);
}

export function getAllExpandablePaths(
  value: any,
  prefix: string[] = [],
  groupArraysAfterLength: number | false = false,
  ancestors = new WeakSet<object>()
): string[] {
  const paths: string[] = [];
  if (value !== null && typeof value === 'object' && !ancestors.has(value)) {
    ancestors.add(value);
    paths.push(serializePath(prefix));
    const isArray = Array.isArray(value);
    const entries: [string, any][] = isArray
      ? value.map((v: any, i: number) => [String(i), v])
      : Object.entries(value);

    if (isArray && groupArraysAfterLength !== false && entries.length > groupArraysAfterLength) {
      for (let i = 0; i < entries.length; i += groupArraysAfterLength) {
        const end = Math.min(i + groupArraysAfterLength - 1, entries.length - 1);
        paths.push(serializePath([...prefix, `[${i}...${end}]`]));
      }
    }

    for (const [key, val] of entries) {
      paths.push(
        ...getAllExpandablePaths(val, [...prefix, key], groupArraysAfterLength, ancestors)
      );
    }
    ancestors.delete(value);
  }
  return paths;
}

export function getDefaultExpandedPaths(
  value: any,
  depth: number,
  prefix: string[] = [],
  currentDepth = 0,
  groupArraysAfterLength: number | false = false,
  ancestors = new WeakSet<object>()
): string[] {
  if (
    currentDepth >= depth ||
    value === null ||
    typeof value !== 'object' ||
    ancestors.has(value)
  ) {
    return [];
  }

  ancestors.add(value);
  const paths: string[] = [serializePath(prefix)];
  const isArray = Array.isArray(value);
  const entries: [string, any][] = isArray
    ? value.map((v: any, i: number) => [String(i), v])
    : Object.entries(value);

  if (isArray && groupArraysAfterLength !== false && entries.length > groupArraysAfterLength) {
    for (let i = 0; i < entries.length; i += groupArraysAfterLength) {
      const end = Math.min(i + groupArraysAfterLength - 1, entries.length - 1);
      paths.push(serializePath([...prefix, `[${i}...${end}]`]));
    }
  }

  for (const [key, val] of entries) {
    paths.push(
      ...getDefaultExpandedPaths(
        val,
        depth,
        [...prefix, key],
        currentDepth + 1,
        groupArraysAfterLength,
        ancestors
      )
    );
  }
  ancestors.delete(value);
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
      const truncated = value.slice(0, collapseStringsAfterLength);
      return {
        display: withQuotes ? `"${truncated}..."` : `${truncated}...`,
        collapsed: true,
      };
    }
    return { display: withQuotes ? `"${value}"` : value, collapsed: false };
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
    return JSON.stringify(value, createStringifyReplacer(), 2);
  } catch {
    return String(value);
  }
}
