import React from 'react';
import { Title, Text, Tooltip, ActionIcon } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { CheckIcon, ClipboardIcon } from '@modulz/radix-icons';
import CodeHighlight from '../../CodeHighlight/CodeHighlight';
import { MdxPageProps } from '../types';
import useStyles from './MdxPageHeader.styles';

export function MdxPageHeader({ data }: MdxPageProps) {
  const classes = useStyles();
  const clipboard = useClipboard();

  return (
    <div className={classes.headerWrapper}>
      <div className={classes.header}>
        <Title className={classes.title}>{data.title}</Title>

        <Text size="lg" className={classes.description}>
          {data.description}
        </Text>

        {data.import && (
          <div className={classes.item}>
            <Text className={classes.label} size="sm">
              Import
            </Text>
            <CodeHighlight
              rootClassName={classes.code}
              language="tsx"
              code={data.import}
              style={{ padding: 0, margin: 0 }}
              noCopy
            />
            <Tooltip
              className={classes.copy}
              label={clipboard.copied ? 'Copied' : 'Copy import'}
              position="bottom"
              placement="end"
              transition="fade"
              withArrow
              arrowSize={4}
              gutter={8}
              color={clipboard.copied ? 'teal' : undefined}
            >
              <ActionIcon
                aria-label={clipboard.copied ? 'Copied' : 'Copy import'}
                onClick={() => clipboard.copy(data.import)}
                size="xs"
              >
                {clipboard.copied ? <CheckIcon /> : <ClipboardIcon />}
              </ActionIcon>
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
}
