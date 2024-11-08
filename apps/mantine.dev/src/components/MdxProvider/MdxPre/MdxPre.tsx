import cx from 'clsx';
import { CodeHighlight, CodeHighlightProps } from '@mantinex/shiki';
import classes from './MdxPre.module.css';

interface PreProps {
  children?: React.ReactNode;
}

function getLanguage(children: any) {
  // @ts-ignore
  const matches = (children.props.className || '').match(/language-(?<lang>.*)/);
  const matchedLanguage =
    matches && matches.groups && matches.groups.lang ? matches.groups.lang : 'tsx';

  if (['js', 'jsx', 'ts', 'tsx'].includes(matchedLanguage)) {
    return 'tsx';
  }

  if (['css', 'scss'].includes(matchedLanguage)) {
    return 'scss';
  }

  if (['html', 'bash', 'json'].includes(matchedLanguage)) {
    return matchedLanguage;
  }

  throw new Error(`Unknown language: ${matchedLanguage}`);
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
