import { ElementProps, Text, TextProps } from '@mantine/core';
import classes from './HtmlText.module.css';

interface HtmlTextProps extends TextProps, ElementProps<'span', 'color'> {
  children: string;
}

function replaceMarkdown(str: string): string {
  return str
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/!important!/g, '<b>Important</b>')
    .replace(/\[([^\]]+)\]\((.*?)\)/g, '<a href="$2" target="_blank" ref="noreferrer">$1</a>');
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
