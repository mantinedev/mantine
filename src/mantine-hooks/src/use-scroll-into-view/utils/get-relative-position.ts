export const getRelativePosition = ({ axis, target, parent, alignment, offset }): number => {
  if (!target || (!parent && typeof document === 'undefined')) {
    return 0;
  }
  const isCustomParent = !!parent;
  const parentElement = parent || document.body;
  const parentPosition = parentElement.getBoundingClientRect();
  const targetPosition = target.getBoundingClientRect();

  const getDiff = (property: 'top' | 'left'): number =>
    targetPosition[property] - parentPosition[property];

  if (axis === 'y') {
    const diff = getDiff('top');

    if (diff === 0) return 0;

    if (alignment === 'start') {
      return diff - offset;
    }

    const parentHeight = isCustomParent ? parentPosition.height : window.innerHeight;

    if (alignment === 'end') {
      return diff + offset - parentHeight + targetPosition.height;
    }

    if (alignment === 'center') {
      return diff - parentHeight / 2 + targetPosition.height / 2;
    }

    return 0;
  }

  if (axis === 'x') {
    const diff = getDiff('left');

    if (diff === 0) return 0;

    if (alignment === 'start') {
      return diff - offset;
    }

    const parentWidth = isCustomParent ? parentPosition.width : window.innerWidth;

    if (alignment === 'end') {
      return diff + offset - parentWidth + targetPosition.width;
    }

    if (alignment === 'center') {
      return diff - parentWidth / 2 + targetPosition.width / 2;
    }

    return 0;
  }

  return 0;
};
