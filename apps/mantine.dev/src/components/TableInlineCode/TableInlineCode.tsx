import cx from 'clsx';
import { ElementProps, Text, TextProps } from '@mantine/core';
import classes from './TableInlineCode.module.css';

interface TableInlineCodeProps extends TextProps, ElementProps<'span', 'color'> {}

export function TableInlineCode({ className, ...others }: TableInlineCodeProps) {
  return <Text component="span" className={cx(classes.code, className)} {...others} />;
}
