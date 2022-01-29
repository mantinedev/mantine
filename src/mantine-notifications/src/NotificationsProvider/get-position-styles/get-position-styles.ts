import { CSSObject } from '@mantine/core';
import { NotificationsProviderPositioning } from '../../types';

export default function getPositionStyles(
  [vertical, horizontal]: NotificationsProviderPositioning,
  containerWidth: number,
  spacing: number
) {
  const styles: CSSObject = {};

  vertical === 'top' && (styles.top = spacing);
  vertical === 'bottom' && (styles.bottom = spacing);

  horizontal === 'left' && (styles.left = spacing);
  horizontal === 'right' && (styles.right = spacing);
  horizontal === 'center' && (styles.left = `calc(50% - ${containerWidth / 2}px)`);

  return styles;
}
