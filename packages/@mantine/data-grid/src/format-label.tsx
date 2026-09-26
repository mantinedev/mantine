import type { ReactNode } from 'react';

type LabelValues = Record<string, string | number>;

const TOKEN_RE = /\{(\w+)\}/g;

export function formatLabel(template: string, values: LabelValues): string {
  return template.replace(TOKEN_RE, (match, key: string) =>
    key in values ? String(values[key]) : match
  );
}

export function renderLabel(template: string, values: LabelValues): ReactNode[] {
  return template.split(/(\{\w+\})/).map((part, index) => {
    const key = part.match(/^\{(\w+)\}$/)?.[1];
    if (key !== undefined && key in values) {
      return <span key={index}>{String(values[key])}</span>;
    }
    return part;
  });
}
