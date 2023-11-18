import { FormStatus } from '../types';

export function getStatus(status: FormStatus, path?: unknown) {
  const paths = Object.keys(status);

  if (typeof path === 'string') {
    const nestedPaths = paths.filter((statusPath) => statusPath.startsWith(`${path}.`));
    return status[path] || nestedPaths.some((statusPath) => status[statusPath]) || false;
  }

  return paths.some((statusPath) => status[statusPath]);
}
