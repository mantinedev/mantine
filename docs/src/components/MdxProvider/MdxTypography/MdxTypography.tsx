import React from 'react';
import cx from 'clsx';
import { Code } from '@mantine/core';
import classes from './MdxTypography.module.css';

export function MdxParagraph({ className, ...others }: React.ComponentPropsWithoutRef<'p'>) {
  return <p className={cx(classes.paragraph, className)} {...others} />;
}

export function MdxUl({ className, ...others }: React.ComponentPropsWithoutRef<'ul'>) {
  return <ul className={cx(classes.ul, className)} {...others} />;
}

export function MdxLi({ className, ...others }: React.ComponentPropsWithoutRef<'li'>) {
  return <li className={cx(classes.li, className)} {...others} />;
}

export function MdxCode(props: React.ComponentPropsWithoutRef<'code'>) {
  return <Code {...props} />;
}
