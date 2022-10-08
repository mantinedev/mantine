export function packSx<T>(sx: T | T[]) {
  return Array.isArray(sx) ? sx : [sx];
}
