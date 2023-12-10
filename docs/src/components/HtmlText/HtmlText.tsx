import React from 'react';
import { ElementProps, Text, TextProps } from '@mantine/core';

interface HtmlTextProps extends TextProps, ElementProps<'span', 'color'> {
  children: string;
}

function replaceBackticks(str: string): string {
  return str.replace(/`([^`]+)`/g, '<code>$1</code>').replace(/!important!/g, '<b>Important</b>');
}

export function HtmlText({ children, ...others }: HtmlTextProps) {
  return (
    <Text
      component="span"
      data-docs-inline-code
      dangerouslySetInnerHTML={{ __html: replaceBackticks(children) }}
      fz="sm"
      {...others}
    />
  );
}
