import React from 'react';
import { Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { Language } from 'prism-react-renderer';
import CodeHighlight from '../../../CodeHighlight/CodeHighlight';
import useStyles from './HeaderCode.styles';

interface ImportStatementProps {
  code: string;
  icon?: React.ReactNode;
  language?: Language;
}

export function HeaderCode({ code, icon, language }: ImportStatementProps) {
  const clipboard = useClipboard();
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {icon && <div className={classes.icon}>{icon}</div>}

      <Tooltip
        label={clipboard.copied ? 'Copied' : 'Copy'}
        position="right"
        placement="center"
        transition="fade"
        withArrow
        arrowSize={4}
        gutter={15}
        color={clipboard.copied ? 'teal' : undefined}
      >
        <button className={classes.copy} type="button" onClick={() => clipboard.copy(code)}>
          <CodeHighlight
            rootClassName={classes.code}
            language={language || 'tsx'}
            code={code}
            style={{ padding: 0, margin: 0 }}
            noCopy
          />
        </button>
      </Tooltip>
    </div>
  );
}
