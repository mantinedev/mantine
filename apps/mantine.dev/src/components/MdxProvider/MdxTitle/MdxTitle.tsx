import { IconCheck } from '@tabler/icons-react';
import cx from 'clsx';
import { FOCUS_CLASS_NAMES, Title, UnstyledButton } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { LinkIcon } from './LinkIcon';
import classes from './MdxTitle.module.css';

export function MdxTitle({
  id,
  children,
  order = 2,
  ...others
}: React.ComponentPropsWithoutRef<typeof Title>) {
  const { copied, copy, reset } = useClipboard();

  if (order === 1) {
    return (
      <Title className={classes.title} data-h1>
        {children}
      </Title>
    );
  }

  return (
    <>
      <div id={id} data-heading={children} data-order={order} className={classes.offset} />
      <Title order={order} className={classes.title} {...others}>
        <a className={cx(classes.link, FOCUS_CLASS_NAMES.auto)} href={`#${id}`}>
          {children}
        </a>
        <UnstyledButton
          className={classes.copyButton}
          tabIndex={-1}
          aria-label="Copy link to the section"
          onClick={() => copy(`${window.location.origin}${window.location.pathname}#${id}`)}
          onMouseLeave={reset}
          title={copied ? '✓ Copied to clipboard' : 'Copy link'}
        >
          {copied ? (
            <IconCheck className={classes.copyIcon} />
          ) : (
            <LinkIcon className={classes.copyIcon} />
          )}
        </UnstyledButton>
      </Title>
    </>
  );
}

export const h = (order: 1 | 2 | 3 | 4 | 5 | 6) => (props: any) => (
  <MdxTitle order={order} {...props} />
);
