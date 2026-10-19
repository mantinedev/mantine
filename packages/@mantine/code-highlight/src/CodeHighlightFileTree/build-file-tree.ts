import type { TreeNodeData } from '@mantine/core';

export interface FileTreeEntry {
  fileName: string;
}

interface FolderNode {
  path: string;
  name: string;
  folders: FolderNode[];
  files: string[];
}

function createFolder(path: string, name: string): FolderNode {
  return { path, name, folders: [], files: [] };
}

function getFileTreeLabel(path: string) {
  const index = path.lastIndexOf('/');
  return index === -1 ? path : path.slice(index + 1);
}

function toTreeNodes(folder: FolderNode): TreeNodeData[] {
  const folders = folder.folders.map((child) => ({
    value: child.path,
    label: child.name,
    children: toTreeNodes(child),
  }));

  const files = folder.files.map((file) => ({ value: file, label: getFileTreeLabel(file) }));
  return [...folders, ...files];
}

export function buildFileTree(entries: FileTreeEntry[]): TreeNodeData[] {
  const root = createFolder('', '');
  const seen = new Set<string>();

  for (const entry of entries) {
    const { fileName } = entry;

    if (!fileName || seen.has(fileName)) {
      continue;
    }

    seen.add(fileName);
    const segments = fileName.split('/').filter(Boolean);
    let current = root;

    for (let i = 0; i < segments.length - 1; i += 1) {
      const path = segments.slice(0, i + 1).join('/');
      let next = current.folders.find((folder) => folder.path === path);

      if (!next) {
        next = createFolder(path, segments[i]);
        current.folders.push(next);
      }

      current = next;
    }

    current.files.push(fileName);
  }

  return toTreeNodes(root);
}

export function getFileTreeParents(fileName: string): string[] {
  const segments = fileName.split('/').filter(Boolean);
  return segments.slice(0, -1).map((_, index) => segments.slice(0, index + 1).join('/'));
}

export function getFileTreeFileName(fileName: string) {
  return getFileTreeLabel(fileName);
}
