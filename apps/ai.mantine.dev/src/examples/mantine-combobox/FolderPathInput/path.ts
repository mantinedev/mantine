import type { Folder } from './workspace';

const NAME_PATTERN = /^[\p{L}\p{N} _-]*$/u;

export const NAME_ERROR = 'Folder names can contain only letters, numbers, spaces, - and _';

export function isValidName(name: string) {
  return NAME_PATTERN.test(name);
}

const sameName = (a: string, b: string) => a.toLowerCase() === b.toLowerCase();

/** Folder at the given segments, the workspace root for no segments, null when it does not exist */
export function findFolder(tree: Folder[], segments: string[]): Folder | null {
  let current: Folder = { name: '', documents: 0, children: tree };
  for (const segment of segments) {
    const next = current.children.find((item) => sameName(item.name, segment));
    if (!next) {
      return null;
    }
    current = next;
  }
  return current;
}

/** Splits the typed text into the completed folders and the segment being typed */
export function parsePath(value: string) {
  const parts = value.split('/');
  const segment = parts.pop() ?? '';
  return { parents: parts, segment };
}

/** Canonical folder names of the path, or null when some folder does not exist */
export function resolvePath(tree: Folder[], value: string): string[] | null {
  const trimmed = value.endsWith('/') ? value.slice(0, -1) : value;
  if (trimmed === '') {
    return null;
  }

  const names: string[] = [];
  let children = tree;
  for (const segment of trimmed.split('/')) {
    const next = children.find((item) => sameName(item.name, segment));
    if (!next) {
      return null;
    }
    names.push(next.name);
    children = next.children;
  }
  return names;
}

/** Replaces completed segments (followed by `/`) with the folder names they match */
export function canonicalizePath(tree: Folder[], value: string) {
  const { parents, segment } = parsePath(value);
  let children: Folder[] | null = tree;
  const names = parents.map((part) => {
    const match: Folder | undefined = children?.find((item) => sameName(item.name, part));
    children = match ? match.children : null;
    return match ? match.name : part;
  });
  return [...names, segment].join('/');
}

/** Subfolders whose name starts with the query first, then the ones that contain it */
export function filterFolders(folders: Folder[], query: string) {
  const search = query.trim().toLowerCase();
  if (search === '') {
    return folders;
  }
  const starts = folders.filter((item) => item.name.toLowerCase().startsWith(search));
  const contains = folders.filter(
    (item) =>
      !item.name.toLowerCase().startsWith(search) && item.name.toLowerCase().includes(search)
  );
  return [...starts, ...contains];
}

export function addFolder(tree: Folder[], parents: string[], created: Folder): Folder[] {
  if (parents.length === 0) {
    return [...tree, created];
  }
  const [head, ...rest] = parents;
  return tree.map((item) =>
    sameName(item.name, head)
      ? { ...item, children: addFolder(item.children, rest, created) }
      : item
  );
}

export function formatPath(segments: string[]) {
  return segments.length === 0 ? 'Workspace' : segments.join(' / ');
}
