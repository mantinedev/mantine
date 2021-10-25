export const EXCLUDE_LAYOUT_PATHS = ['/', '/app-shell-demo'];
export const EXCLUDE_NAVBAR_PATHS = ['/app-shell-demo'];
export const EXCLUDE_HEADER_PATHS = ['/app-shell-demo'];

export function shouldExcludeHeader(path: string) {
  return EXCLUDE_HEADER_PATHS.some((p) => path.startsWith(p));
}

export function shouldExcludeNavbar(path: string) {
  return (
    EXCLUDE_LAYOUT_PATHS.includes(path) || EXCLUDE_NAVBAR_PATHS.some((p) => path.startsWith(p))
  );
}
