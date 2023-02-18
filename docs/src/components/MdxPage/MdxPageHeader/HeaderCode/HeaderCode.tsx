import React from 'react';
import { em, Tooltip } from '@mantine/core';
import { useClipboard, useMediaQuery } from '@mantine/hooks';
import { Prism } from '@mantine/prism';
import { Language } from 'prism-react-renderer';
import useStyles from './HeaderCode.styles';

interface ImportStatementProps {
  code: string;
  icon?: React.ReactNode;
  language?: Language;
}

export function HeaderCode({ code, icon, language }: ImportStatementProps) {
  const clipboard = useClipboard();
  const { classes } = useStyles();
  const mobile = useMediaQuery(`(max-width: ${em(500)})`);

  return (
    <div className={classes.wrapper}>
      {icon && <div className={classes.icon}>{icon}</div>}

      <Tooltip
        label={clipboard.copied ? 'Copied' : 'Copy'}
        position="right"
        withArrow
        arrowSize={6}
        offset={10}
        color={clipboard.copied ? 'teal' : undefined}
        sx={{ flex: 1 }}
        disabled={mobile}
      >
        <button className={classes.copy} type="button" onClick={() => clipboard.copy(code)}>
          <Prism
            className={classes.code}
            language={language || 'tsx'}
            styles={{ code: { padding: 0, margin: 0 }, line: { padding: 0 } }}
            noCopy
          >
            {code}
          </Prism>
        </button>
      </Tooltip>
    </div>
  );
}
