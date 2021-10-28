export const getScrollStart = ({ axis, parent }) => {
  if (!parent && typeof document === 'undefined') {
    return 0;
  }

  const method = axis === 'y' ? 'scrollTop' : 'scrollLeft';

  if (parent) {
    return parent[method];
  }

  const { body, documentElement } = document;

  // while one of it has a value the second is equal 0
  return body[method] + documentElement[method];
};
