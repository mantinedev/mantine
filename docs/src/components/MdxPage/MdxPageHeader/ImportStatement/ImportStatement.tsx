import React from 'react';
import { Tooltip, ActionIcon } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { CheckIcon, ClipboardIcon } from '@modulz/radix-icons';
import CodeHighlight from '../../../CodeHighlight/CodeHighlight';
import { HeaderItem } from '../HeaderItem/HeaderItem';
import useStyles from './ImportStatement.styles';

interface ImportStatementProps {
  code: string;
}

export function ImportStatement({ code }: ImportStatementProps) {
  const clipboard = useClipboard();
  const classes = useStyles();

  return (
    <HeaderItem label="Import">
      <CodeHighlight
        rootClassName={classes.code}
        language="tsx"
        code={code}
        style={{ padding: 0, margin: 0 }}
        noCopy
      />

      <Tooltip
        className={classes.copy}
        label={clipboard.copied ? 'Copied' : 'Copy import'}
        position="top"
        placement="end"
        transition="fade"
        withArrow
        arrowSize={4}
        gutter={8}
        color={clipboard.copied ? 'teal' : undefined}
      >
        <ActionIcon
          aria-label={clipboard.copied ? 'Copied' : 'Copy import'}
          onClick={() => clipboard.copy(code)}
          size="xs"
        >
          {clipboard.copied ? <CheckIcon /> : <ClipboardIcon />}
        </ActionIcon>
      </Tooltip>
    </HeaderItem>
  );
}
