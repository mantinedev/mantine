import { ElementProps, Text, TextProps } from '@mantine/core';
import classes from './HtmlText.module.css';

interface HtmlTextProps extends TextProps, ElementProps<'span', 'color'> {
  children: string;
}

function escapeHtml(str: string): string {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function sanitizeHref(href: string): string {
  const normalized = href.trim();

  if (/^(https?:|mailto:|tel:)/i.test(normalized)) {
    return normalized;
  }

  return '#';
}

export function replaceMarkdown(str: string): string {
  return escapeHtml(str)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/!important!/g, '<b>Important</b>')
    .replace(/@deprecated/g, '<i>Deprecated:</i>')
    .replace(/\[([^\]]+)\]\((.*?)\)/g, (_, text, href) => {
      const safeHref = sanitizeHref(String(href));
      return `<a href="${safeHref}" target="_blank" rel="noreferrer">${text}</a>`;
    })
    .replace(/(?:^|\n)((?:- .+(?:\n|$))+)/g, (_, list) => {
      const items = list.replace(/(?:^|\n)- (.+)/g, '<li>$1</li>');
      return `<ul>${items}</ul>`;
    });
}

export function HtmlText({ children, ...others }: HtmlTextProps) {
  return (
    <Text
      component="span"
      className={classes.text}
      dangerouslySetInnerHTML={{ __html: replaceMarkdown(children) }}
      fz="sm"
      {...others}
    />
  );
}
