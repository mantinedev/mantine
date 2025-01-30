import cx from 'clsx';
import { ElementProps, Text, TextProps } from '@mantine/core';
import classes from './HomePageDescription.module.css';

interface HomePageDescriptionProps extends TextProps, ElementProps<'p', 'color'> {}

export function HomePageDescription({ className, ...others }: HomePageDescriptionProps) {
  return <Text className={cx(classes.root, className)} {...others} />;
}
