import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface TextareaAutosizeProps extends Omit<TextareaProps, 'style'> {
  ref?: React.Ref<HTMLTextAreaElement>;
  maxRows?: number;
  minRows?: number;
  style?: Omit<NonNullable<TextareaProps['style']>, 'maxHeight' | 'minHeight'> & {
    height?: number;
  };
}

const SIZING_STYLE_KEYS = [
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'boxSizing',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'tabSize',
  'textIndent',
  'textRendering',
  'textTransform',
  'width',
  'wordBreak',
  'wordSpacing',
  'scrollbarGutter',
] as const;

type SizingStyleKey = (typeof SIZING_STYLE_KEYS)[number];

interface SizingData {
  sizingStyle: Pick<CSSStyleDeclaration, Extract<SizingStyleKey, keyof CSSStyleDeclaration>>;
  paddingSize: number;
  borderSize: number;
}

const HIDDEN_TEXTAREA_STYLE: Record<string, string> = {
  'min-height': '0',
  'max-height': 'none',
  height: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  position: 'absolute',
  'z-index': '-1000',
  top: '0',
  right: '0',
  display: 'block',
};

function forceHiddenStyles(node: HTMLElement) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach((key) => {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');
  });
}

function getSizingData(node: HTMLElement): SizingData | null {
  const style = window.getComputedStyle(node);

  if (style === null) {
    return null;
  }

  const sizingStyle = {} as SizingData['sizingStyle'];
  for (const key of SIZING_STYLE_KEYS) {
    (sizingStyle as any)[key] = style[key as keyof CSSStyleDeclaration];
  }

  if ((sizingStyle as any).boxSizing === '') {
    return null;
  }

  const paddingSize = parseFloat(sizingStyle.paddingBottom!) + parseFloat(sizingStyle.paddingTop!);

  const borderSize =
    parseFloat(sizingStyle.borderBottomWidth!) + parseFloat(sizingStyle.borderTopWidth!);

  return { sizingStyle, paddingSize, borderSize };
}

let hiddenTextarea: HTMLTextAreaElement | null = null;

function calculateNodeHeight(
  sizingData: SizingData,
  value: string,
  minRows = 1,
  maxRows = Infinity
): [number, number] {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tabindex', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    hiddenTextarea.setAttribute('aria-label', 'autosize measurement');
    forceHiddenStyles(hiddenTextarea);
  }

  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }

  const { paddingSize, borderSize, sizingStyle } = sizingData;
  const { boxSizing } = sizingStyle;

  Object.keys(sizingStyle).forEach((key) => {
    (hiddenTextarea!.style as any)[key] = (sizingStyle as any)[key];
  });

  forceHiddenStyles(hiddenTextarea);

  hiddenTextarea.value = value;
  let height =
    boxSizing === 'border-box'
      ? hiddenTextarea.scrollHeight + borderSize
      : hiddenTextarea.scrollHeight - paddingSize;

  // Double set and calc due to Firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1795904
  hiddenTextarea.value = value;
  height =
    boxSizing === 'border-box'
      ? hiddenTextarea.scrollHeight + borderSize
      : hiddenTextarea.scrollHeight - paddingSize;

  hiddenTextarea.value = 'x';
  const rowHeight = hiddenTextarea.scrollHeight - paddingSize;

  let minHeight = rowHeight * minRows;
  if (boxSizing === 'border-box') {
    minHeight = minHeight + paddingSize + borderSize;
  }
  height = Math.max(minHeight, height);

  let maxHeight = rowHeight * maxRows;
  if (boxSizing === 'border-box') {
    maxHeight = maxHeight + paddingSize + borderSize;
  }
  height = Math.min(maxHeight, height);

  return [height, rowHeight];
}

export function TextareaAutosize({
  maxRows,
  minRows,
  onChange,
  ref: userRef,
  ...props
}: TextareaAutosizeProps) {
  const isControlled = props.value !== undefined;
  const libRef = useRef<HTMLTextAreaElement | null>(null);
  const ref = useMergedRef(libRef, userRef);
  const heightRef = useRef(0);

  const resizeTextarea = () => {
    const node = libRef.current;

    if (!node) {
      return;
    }

    const nodeSizingData = getSizingData(node);

    if (!nodeSizingData) {
      return;
    }

    const [height] = calculateNodeHeight(
      nodeSizingData,
      node.value || node.placeholder || 'x',
      minRows,
      maxRows
    );

    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty('height', `${height}px`, 'important');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) {
      resizeTextarea();
    }
    onChange?.(event);
  };

  useLayoutEffect(resizeTextarea);

  useEffect(() => {
    const handleResize = () => resizeTextarea();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleFontsLoaded = () => resizeTextarea();
    document.fonts.addEventListener('loadingdone', handleFontsLoaded);
    return () => document.fonts.removeEventListener('loadingdone', handleFontsLoaded);
  }, []);

  useEffect(() => {
    const handleReset = (event: Event) => {
      if (libRef.current?.form === event.target && !isControlled) {
        const currentValue = libRef.current!.value;
        requestAnimationFrame(() => {
          if (libRef.current && currentValue !== libRef.current.value) {
            resizeTextarea();
          }
        });
      }
    };
    document.body.addEventListener('reset', handleReset);
    return () => document.body.removeEventListener('reset', handleReset);
  }, [isControlled]);

  return <textarea {...props} onChange={handleChange} ref={ref} />;
}
