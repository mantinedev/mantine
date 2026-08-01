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

/**
 * Returns the pixel position of the caret inside a `textarea` or `input` element using a hidden
 * mirror element that clones the element's text styles. Used to anchor the dropdown and inline
 * suggestions to the caret.
 */
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

  style.whiteSpace = 'pre-wrap';
  if (!isInput) {
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
    mirror.textContent = mirror.textContent.replace(/\s/g, ' ');
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
