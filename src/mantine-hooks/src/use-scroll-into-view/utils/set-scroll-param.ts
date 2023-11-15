export const setScrollParam = ({ axis, parent, distance }: any) => {
  if (!parent && typeof document === 'undefined') {
    return;
  }

  const method = axis === 'y' ? 'scrollTop' : 'scrollLeft';

  if (parent) {
    parent[method] = distance;
  } else {
    const { body, documentElement } = document;
    body[method] = distance;
    documentElement[method] = distance;
  }
};
