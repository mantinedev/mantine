import cx from 'clsx';
import type { MDXComponents } from 'mdx/types';
import { Anchor, Code, Image, Title } from '@mantine/core';
import { Demo } from '@mantinex/demo';
import { CodeHighlight } from '@mantinex/shiki';
import { MdxErrorMessage } from './MdxErrorMessage/MdxErrorMessage';
import { MdxInfo } from './MdxInfo/MdxInfo';
import { MdxInstallScript } from './MdxInstallScript/MdxInstallScript';
import classes from './MdxElements.module.css';

export function MdxTitle({
  id,
  children,
  order = 2,
  ...others
}: React.ComponentPropsWithoutRef<typeof Title>) {
  return (
    <>
      <div id={id} data-heading={children} data-order={order} className={classes.titleOffset} />
      <Title order={order} className={classes.title} {...others}>
        <a className={cx(classes.titleLink, 'mantine-focus-auto')} href={`#${id}`}>
          {children}
        </a>
      </Title>
    </>
  );
}

export const h = (order: 1 | 2 | 3 | 4 | 5 | 6) => (props: any) => (
  <MdxTitle order={order} {...props} />
);

function getLanguage(children: any) {
  // @ts-ignore
  const matches = (children.props.className || '').match(/language-(?<lang>.*)/);
  return matches && matches.groups && matches.groups.lang ? matches.groups.lang : 'tsx';
}

function getCode(children: any) {
  return children.props.children;
}

export function MdxPre({ children }: React.ComponentPropsWithoutRef<'pre'>) {
  return (
    <CodeHighlight
      className={classes.code}
      code={getCode(children)}
      language={getLanguage(children)}
    />
  );
}

export function MdxParagraph(props: React.ComponentPropsWithoutRef<'p'>) {
  return <p className={classes.paragraph} {...props} />;
}

export function MdxUl(props: React.ComponentPropsWithoutRef<'ul'>) {
  return <ul className={classes.ul} {...props} />;
}

export function MdxLi(props: React.ComponentPropsWithoutRef<'li'>) {
  return <li className={classes.li} {...props} />;
}

export function MdxLink({ href, ...others }: React.ComponentPropsWithoutRef<'a'>) {
  return <Anchor className={classes.link} href={href} {...others} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: Image as any,
    ul: MdxUl,
    li: MdxLi,
    p: MdxParagraph,
    a: MdxLink,
    code: Code as any,
    h1: h(1),
    h2: h(2),
    h3: h(3),
    h4: h(4),
    h5: h(5),
    h6: h(6),
    pre: MdxPre,
    Demo,
    InstallScript: MdxInstallScript,
    ErrorMessage: MdxErrorMessage,
    blockquote: MdxInfo,
    ...components,
  };
}
