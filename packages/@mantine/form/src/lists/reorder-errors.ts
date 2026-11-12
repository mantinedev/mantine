import { ReorderPayload } from '../types';

export function reorderErrors<T>(path: unknown, { from, to }: ReorderPayload, errors: T): T {
  const pathStart = `${path}.`;
  const clone: any = { ...errors };
  const movedErrors: any = {};

  Object.keys(errors as any).forEach((key) => {
    if (!key.startsWith(pathStart)) {
      return;
    }

    const keyParts = key.slice(pathStart.length).split('.');
    const index = Number(keyParts[0]);

    if (keyParts[0] === `${index}` && index >= Math.min(from, to) && index <= Math.max(from, to)) {
      const newIndex = index === from ? to : index + (from < to ? -1 : 1);
      keyParts[0] = `${newIndex}`;
      movedErrors[`${pathStart}${keyParts.join('.')}`] = (errors as any)[key];
      delete clone[key];
    }
  });

  return { ...clone, ...movedErrors };
}
