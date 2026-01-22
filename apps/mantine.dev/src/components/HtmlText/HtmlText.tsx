import { ElementProps, Text, TextProps } from '@mantine/core';
import classes from './HtmlText.module.css';

interface HtmlTextProps extends TextProps, ElementProps<'span', 'color'> {
  children: string;
}

function replaceMarkdown(str: string): string {
  return str
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/!important!/g, '<b>Important</b>')
    .replace(/@deprecated/g, '<i>Deprecated:</i>')
    .replace(/\[([^\]]+)\]\((.*?)\)/g, '<a href="$2" target="_blank" ref="noreferrer">$1</a>')
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
