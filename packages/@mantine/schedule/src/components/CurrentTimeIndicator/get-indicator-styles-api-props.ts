import type { CSSProperties } from 'react';
import type { CurrentTimeIndicatorStylesNames } from './CurrentTimeIndicator';

interface IndicatorPartStyles {
  className: string;
  style: CSSProperties;
  [attribute: string]: any;
}

export function getIndicatorStylesApiProps(
  parts: Record<CurrentTimeIndicatorStylesNames, IndicatorPartStyles>
) {
  const classNames = {} as Record<CurrentTimeIndicatorStylesNames, string>;
  const styles = {} as Record<CurrentTimeIndicatorStylesNames, CSSProperties>;
  const attributes = {} as Record<CurrentTimeIndicatorStylesNames, Record<string, any>>;

  for (const selector of Object.keys(parts) as CurrentTimeIndicatorStylesNames[]) {
    const { className, style, ...partAttributes } = parts[selector];
    classNames[selector] = className;
    styles[selector] = style;
    attributes[selector] = partAttributes;
  }

  return { unstyled: true, classNames, styles, attributes };
}
