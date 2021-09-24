import { getScrollStart } from './get-scroll-start';

export const getRelativePosition = ({ axis, target, parent }) => {
  if (!target || (!parent && typeof document === 'undefined')) {
    return 0;
  }
  const parentElement = parent || document.body;
  const parentPosition = parentElement.getBoundingClientRect();
  const targetPosition = target.getBoundingClientRect();

  const getDiff = (property: 'top' | 'left'): number =>
    targetPosition[property] - parentPosition[property];

  if (axis === 'y') {
    return getDiff('top') + getScrollStart({ axis, parent });
  }

  return getDiff('left');
};
