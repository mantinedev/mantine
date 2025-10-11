import cx from 'clsx';
import { Code } from '@mantine/core';
import classes from './MdxTypography.module.css';

export function MdxParagraph({ className, ...others }: React.ComponentProps<'p'>) {
  return <p className={cx(classes.paragraph, className)} {...others} />;
}

export function MdxUl({ className, ...others }: React.ComponentProps<'ul'>) {
  return <ul className={cx(classes.ul, className)} {...others} />;
}

export function MdxLi({ className, ...others }: React.ComponentProps<'li'>) {
  return <li className={cx(classes.li, className)} {...others} />;
}

export function MdxCode(props: React.ComponentProps<'code'>) {
  return <Code {...props} />;
}
