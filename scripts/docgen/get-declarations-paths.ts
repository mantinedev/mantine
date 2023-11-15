import { getPackagePaths } from './get-package-paths';

export interface DeclarationPath {
  path: string;
  type: 'package' | 'file';
}

export function getDeclarationsPaths(paths: DeclarationPath[]): string[] {
  return paths.reduce<string[]>((acc, info) => {
    if (info.type === 'package') {
      const items = getPackagePaths(info.path);
      return [...acc, ...items];
    }

    if (info.type === 'file') {
      return [...acc, info.path];
    }

    return acc;
  }, []);
}
