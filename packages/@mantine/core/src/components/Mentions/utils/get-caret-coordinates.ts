/*
 * Derived from textarea-caret 3.1.0 (https://github.com/component/textarea-caret-position)
 * — MIT, Copyright (c) 2015 Jonathan Ong. See ../LICENSE for the full license text.
 *
 * Local changes compared to textarea-caret 3.1.0:
 * - The mirror of an input uses white-space: nowrap (no wrapping, like the input's single
 *   horizontally scrolling line) instead of pre-wrap, whitespace is kept with non-breaking spaces
 * - height falls back to the font size when the computed line-height is not a number
 *   (line-height: normal)
 * - No Firefox overflow special case and no debug mode, returns a zero rect on the server
 * - TypeScript types adjusted for the Mantine build, formatted with oxfmt
 */

export interface CaretCoordinates {
  top: number;
  left: number;
  height: number;
}

const MIRROR_PROPERTIES = [
  'direction',
  'boxSizing',
  'width',
  'height',
  'overflowX',
  'overflowY',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'fontStyle',
  'fontVariant',
  'fontWeight',
  'fontStretch',
  'fontSize',
  'fontSizeAdjust',
  'lineHeight',
  'fontFamily',
  'textAlign',
  'textTransform',
  'textIndent',
  'textDecoration',
  'letterSpacing',
  'wordSpacing',
  'tabSize',
] as const;

export function getCaretCoordinates(
  element: HTMLTextAreaElement | HTMLInputElement,
  position: number
): CaretCoordinates {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return { top: 0, left: 0, height: 0 };
  }

  const isInput = element.nodeName === 'INPUT';
  const computed = window.getComputedStyle(element);

  const mirror = document.createElement('div');
  const style = mirror.style;

  if (isInput) {
    style.whiteSpace = 'nowrap';
  } else {
    style.whiteSpace = 'pre-wrap';
    style.wordWrap = 'break-word';
  }
  style.position = 'absolute';
  style.visibility = 'hidden';

  MIRROR_PROPERTIES.forEach((property) => {
    style[property as any] = computed[property as any];
  });

  style.overflow = 'hidden';

  mirror.textContent = element.value.substring(0, position);
  if (isInput) {
    mirror.textContent = mirror.textContent.replace(/\s/g, '\u00a0');
  }

  const span = document.createElement('span');
  span.textContent = element.value.substring(position) || '.';
  mirror.appendChild(span);

  document.body.appendChild(mirror);

  const coordinates: CaretCoordinates = {
    top: span.offsetTop + (parseInt(computed.borderTopWidth, 10) || 0),
    left: span.offsetLeft + (parseInt(computed.borderLeftWidth, 10) || 0),
    height: parseInt(computed.lineHeight, 10) || parseInt(computed.fontSize, 10) || 0,
  };

  document.body.removeChild(mirror);

  return coordinates;
}
