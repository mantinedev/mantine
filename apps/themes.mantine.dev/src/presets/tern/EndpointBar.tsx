import { IconCopy } from '@tabler/icons-react';
import { Badge, Button, ScrollArea } from '@mantine/core';
import { ENDPOINT_HOST, ENDPOINT_PATH } from './data';
import classes from './EndpointBar.module.css';

interface EndpointBarProps {
  onCopy: (text: string, label: string) => void;
}

export function EndpointBar({ onCopy }: EndpointBarProps) {
  const url = `${ENDPOINT_HOST}${ENDPOINT_PATH}`;

  return (
    <div className={classes.root}>
      <Badge variant="filled" radius="sm" className={classes.verb}>
        GET
      </Badge>
      <ScrollArea className={classes.path} type="never" scrollbars="x">
        {ENDPOINT_HOST}
        <span className={classes.pathRest}>{ENDPOINT_PATH}</span>
      </ScrollArea>
      <Button
        variant="default"
        size="xs"
        className={classes.copy}
        classNames={{ label: classes.copyLabel, section: classes.copySection }}
        leftSection={<IconCopy size={16} stroke={1.75} />}
        onClick={() => onCopy(url, 'URL copied')}
        aria-label="Copy URL"
      >
        Copy URL
      </Button>
    </div>
  );
}
