export const EXCLUDE_LAYOUT_PATHS = ['/'];
export const EXCLUDE_NAVBAR_PATHS = ['/gallery'];

export function shouldExcludeSearch(path: string) {
  return EXCLUDE_NAVBAR_PATHS.some((p) => path.startsWith(p));
}

export function shouldExcludeNavbar(path: string) {
  return (
    EXCLUDE_LAYOUT_PATHS.includes(path) || EXCLUDE_NAVBAR_PATHS.some((p) => path.startsWith(p))
  );
}
