export const setScrollParam = ({ axis, parent, distance }) => {
  if (!parent && typeof document === 'undefined') {
    return;
  }

  const method = axis === 'y' ? 'scrollTop' : 'scrollLeft';

  if (parent) {
    // eslint-disable-next-line no-param-reassign
    parent[method] = distance;
  } else {
    const { body, documentElement } = document;

    // https://www.w3schools.com/jsref/prop_element_scrolltop.asp
    body[method] = distance;
    documentElement[method] = distance;
  }
};
