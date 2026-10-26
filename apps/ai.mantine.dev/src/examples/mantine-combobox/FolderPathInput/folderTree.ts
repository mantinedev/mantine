export interface FolderNode {
  name: string;
  documents: number;
  children: FolderNode[];
  isNew?: boolean;
}

function folder(name: string, documents: number, children: FolderNode[] = []): FolderNode {
  return { name, documents, children };
}

export const WORKSPACE_TREE: FolderNode[] = [
  folder('documents', 12, [
    folder('drafts', 8, [folder('blog', 5), folder('newsletters', 3)]),
    folder('archive', 41, [folder('2024', 18), folder('2025', 23)]),
    folder('templates', 6),
  ]),
  folder('projects', 4, [
    folder('web', 9, [
      folder('forms', 14, [folder('validation', 6), folder('layouts', 3)]),
      folder('components', 21),
      folder('landing-pages', 7),
    ]),
    folder('website', 5),
    folder('mobile', 5, [folder('ios', 11), folder('android', 9)]),
    folder('api', 3, [folder('auth', 8), folder('payments', 12)]),
  ]),
  folder('design', 2, [
    folder('brand', 7, [folder('logos', 15), folder('colors', 4)]),
    folder('ui-kit', 19),
    folder('research', 6, [folder('interviews', 24), folder('surveys', 9)]),
  ]),
  folder('team', 1, [
    folder('onboarding', 10),
    folder('meetings', 3, [folder('weekly', 52), folder('retrospectives', 17)]),
    folder('policies', 8),
  ]),
  folder('finance', 0, [
    folder('invoices', 64, [folder('2025', 30), folder('2026', 34)]),
    folder('reports', 12),
    folder('budgets', 5),
  ]),
  folder('personal', 3, [folder('notes', 27), folder('reading list', 11)]),
];

export const FOLDER_NAME_PATTERN = /^[\p{L}\p{N} _-]+$/u;

export function splitPath(path: string): string[] {
  return path.split('/');
}

/** Human-readable path: `projects / web`, `Workspace` for the root */
export function formatPath(segments: string[]) {
  return segments.length === 0 ? 'Workspace' : segments.join(' / ');
}

/** Children of the folder at `segments`, `null` when a segment does not exist */
export function getChildren(tree: FolderNode[], segments: string[]): FolderNode[] | null {
  let level = tree;
  for (const segment of segments) {
    const next = level.find((item) => item.name === segment);
    if (!next) {
      return null;
    }
    level = next.children;
  }
  return level;
}

/** Index of the first segment that does not exist, -1 when the whole path exists */
export function findMissingSegment(tree: FolderNode[], segments: string[]) {
  let level = tree;
  for (let index = 0; index < segments.length; index += 1) {
    const next = level.find((item) => item.name === segments[index]);
    if (!next) {
      return index;
    }
    level = next.children;
  }
  return -1;
}

/** Folders whose name starts with the query first, then folders whose name contains it */
export function filterFolders(folders: FolderNode[], query: string) {
  const search = query.trim().toLowerCase();
  if (search === '') {
    return folders;
  }
  const startsWith = folders.filter((item) => item.name.toLowerCase().startsWith(search));
  const contains = folders.filter(
    (item) =>
      !item.name.toLowerCase().startsWith(search) && item.name.toLowerCase().includes(search)
  );
  return [...startsWith, ...contains];
}

export function insertFolder(tree: FolderNode[], parent: string[], name: string): FolderNode[] {
  if (parent.length === 0) {
    return [...tree, { name, documents: 0, children: [], isNew: true }];
  }
  return tree.map((item) =>
    item.name === parent[0]
      ? { ...item, children: insertFolder(item.children, parent.slice(1), name) }
      : item
  );
}
