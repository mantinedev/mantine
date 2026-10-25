import { InfoIcon } from '@phosphor-icons/react';
import cx from 'clsx';
import { Blockquote, BlockquoteProps } from '@mantine/core';
import classes from './MdxInfo.module.css';

export function MdxInfo({ className, ...others }: BlockquoteProps) {
  return (
    <Blockquote
      className={cx(classes.root, className)}
      icon={<InfoIcon className={classes.icon} />}
      __vars={{
        '--docs-bq-code-bg-light':
          'color-mix(in srgb, var(--mantine-primary-color-6) 20%, transparent)',
        '--docs-bq-code-bg-dark':
          'color-mix(in srgb, var(--mantine-primary-color-4) 20%, transparent)',
      }}
      {...others}
    />
  );
}
