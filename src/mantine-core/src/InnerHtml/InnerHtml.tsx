import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './InnerHtml.styles';

interface InnerHtmlProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {}

export function InnerHtml({
  className,
  themeOverride,
  dangerouslySetInnerHTML,
  ...others
}: InnerHtmlProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });

  return (
    <div
      className={cx(classes.innerHtml, className)}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      {...others}
    />
  );
}

InnerHtml.displayName = '@mantine/core/InnerHtml';
