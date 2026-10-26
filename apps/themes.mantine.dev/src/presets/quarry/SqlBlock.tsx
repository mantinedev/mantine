'use client';

import { useState } from 'react';
import { IconCheck, IconCopy, IconPencil, IconRefresh } from '@tabler/icons-react';
import { CodeHighlight } from '@mantine/code-highlight';
import { Button, Textarea } from '@mantine/core';
import classes from './SqlBlock.module.css';

interface SqlActions {
  onCopy: (sql: string) => void;
  onRerun: () => void;
  onSave: (sql: string) => void;
  onCancel: () => void;
}

interface SqlBlockProps {
  fileName: string;
  code: string;
  typing?: boolean;
  actions?: SqlActions;
}

const ICON = { size: 14, stroke: 1.8 };

function HeadButton({
  children,
  icon,
  primary,
  onClick,
}: {
  children: string;
  icon?: React.ReactNode;
  primary?: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      size="xs"
      variant={primary ? 'filled' : 'default'}
      leftSection={icon}
      className={classes.headButton}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export function SqlBlock({ fileName, code, typing, actions }: SqlBlockProps) {
  const [draft, setDraft] = useState<string | null>(null);

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <span>{fileName}</span>
        <span className={classes.spacer} />
        {actions && (
          <>
            <HeadButton icon={<IconCopy {...ICON} />} onClick={() => actions.onCopy(draft ?? code)}>
              Copy
            </HeadButton>
            {draft === null ? (
              <>
                <HeadButton icon={<IconPencil {...ICON} />} onClick={() => setDraft(code)}>
                  Edit
                </HeadButton>
                <HeadButton icon={<IconRefresh {...ICON} />} onClick={actions.onRerun}>
                  Re-run
                </HeadButton>
              </>
            ) : (
              <>
                <HeadButton
                  primary
                  icon={<IconCheck {...ICON} />}
                  onClick={() => {
                    actions.onSave(draft);
                    setDraft(null);
                  }}
                >
                  Save and run
                </HeadButton>
                <HeadButton
                  onClick={() => {
                    actions.onCancel();
                    setDraft(null);
                  }}
                >
                  Cancel
                </HeadButton>
              </>
            )}
          </>
        )}
      </div>
      {draft === null ? (
        <CodeHighlight code={code} language={typing ? 'sql-typing' : 'sql'} />
      ) : (
        <Textarea
          variant="unstyled"
          rows={draft.split('\n').length}
          autoFocus
          spellCheck={false}
          value={draft}
          onChange={(event) => setDraft(event.currentTarget.value)}
          aria-label="SQL query"
          classNames={{ input: classes.editor }}
        />
      )}
    </div>
  );
}
