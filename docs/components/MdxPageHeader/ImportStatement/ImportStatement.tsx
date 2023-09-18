import React from 'react';
import { em, Tooltip, UnstyledButton } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';
import { useClipboard, useMediaQuery } from '@mantine/hooks';
import { HeaderItem } from '../HeaderItem/HeaderItem';
import classes from './ImportStatement.module.css';

interface ImportStatementProps {
  code: string;
}

export function ImportStatement({ code }: ImportStatementProps) {
  const clipboard = useClipboard();
  const mobile = useMediaQuery(`(max-width: ${em(500)})`);
  return (
    <HeaderItem label="Import" className={classes.wrapper}>
      <Tooltip
        label={clipboard.copied ? 'Copied' : 'Copy code'}
        position="right"
        offset={10}
        disabled={mobile}
      >
        <UnstyledButton className={classes.copy} type="button" onClick={() => clipboard.copy(code)}>
          <InlineCodeHighlight
            className={classes.code}
            language="tsx"
            styles={{ code: { padding: 0, margin: 0 } }}
            code={code}
          />
        </UnstyledButton>
      </Tooltip>
    </HeaderItem>
  );
}
