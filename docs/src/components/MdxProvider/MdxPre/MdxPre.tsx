import React from 'react';
import cx from 'clsx';
import { CodeHighlight, CodeHighlightProps } from '@mantine/code-highlight';
import classes from './MdxPre.module.css';

interface PreProps {
  children?: React.ReactNode;
}

function getLanguage(children: any) {
  const matches = (children.props.className || '').match(/language-(?<lang>.*)/);
  return matches && matches.groups && matches.groups.lang ? matches.groups.lang : 'tsx';
}

function getCode(children: any) {
  return children.props.children;
}

export function MdxCodeHighlight({ className, ...others }: CodeHighlightProps) {
  return <CodeHighlight className={cx(classes.code, className)} {...others} />;
}

export function MdxPre({ children }: PreProps) {
  return <MdxCodeHighlight code={getCode(children)} language={getLanguage(children)} />;
}
