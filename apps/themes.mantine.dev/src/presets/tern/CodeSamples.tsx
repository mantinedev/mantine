'use client';

import { useState } from 'react';
import { IconCopy } from '@tabler/icons-react';
import { CodeHighlight, CodeHighlightTabs } from '@mantine/code-highlight';
import { Button } from '@mantine/core';
import { responseJson, samples } from './data';
import classes from './CodeSamples.module.css';

interface CopyProps {
  onCopy: (text: string, label: string) => void;
}

function CopyButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      key="copy"
      variant="default"
      size="xs"
      className={classes.copy}
      leftSection={<IconCopy size={14} stroke={1.75} />}
      onClick={onClick}
    >
      Copy
    </Button>
  );
}

export function ExampleRequest({ onCopy }: CopyProps) {
  const [tab, setTab] = useState(0);

  return (
    <CodeHighlightTabs
      mt="md"
      code={samples}
      activeTab={tab}
      onTabChange={setTab}
      withCopyButton={false}
      aria-label="Language"
      controls={[
        <CopyButton key="copy" onClick={() => onCopy(samples[tab].code, 'Example copied')} />,
      ]}
    />
  );
}

export function ResponseSample({ onCopy }: CopyProps) {
  return (
    <div className={classes.card}>
      <div className={classes.head}>
        <span className={classes.title}>
          Response <span className={classes.status}>200 OK</span>
        </span>
        <CopyButton onClick={() => onCopy(responseJson, 'Response copied')} />
      </div>
      <CodeHighlight
        code={responseJson}
        language="json"
        withCopyButton={false}
        withBorder={false}
        radius={0}
      />
    </div>
  );
}
