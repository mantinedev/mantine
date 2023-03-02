import { CSSObject } from '@mantine/core';
import { NotificationsPositioning } from '../../types';

export default function getPositionStyles(
  [vertical, horizontal]: NotificationsPositioning,
  spacing: number | string
) {
  const styles: CSSObject = {};

  vertical === 'top' && (styles.top = spacing);
  vertical === 'bottom' && (styles.bottom = spacing);

  horizontal === 'left' && (styles.left = spacing);
  horizontal === 'right' && (styles.right = spacing);
  horizontal === 'center' && ((styles.left = '50%'), (styles.transform = 'translateX(-50%)'));

  return styles;
}
