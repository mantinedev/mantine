'use client';

import { useState } from 'react';
import {
  IconArrowUp,
  IconCheck,
  IconChevronDown,
  IconPaperclip,
  IconPlayerStopFilled,
  IconPlus,
  IconX,
} from '@tabler/icons-react';
import { ActionIcon, Button, Menu, Popover, Textarea } from '@mantine/core';
import { useWindowEvent } from '@mantine/hooks';
import { addedFile, initialFiles, type LeaseFile, type Mode, modes, suggestions } from './data';
import classes from './Clerk.module.css';

function getFormOffset(target: HTMLElement) {
  const form = target.closest('form');
  if (!form) {
    return 6;
  }
  return target.getBoundingClientRect().top - form.getBoundingClientRect().top + 6;
}

interface ComposerProps {
  promptRef: React.RefObject<HTMLTextAreaElement | null>;
  streaming: boolean;
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  onAsk: (question: string, answer?: string) => void;
  onSubmit: (value: string) => void;
  onStop: () => void;
  onToast: (message: string) => void;
}

export function Composer({
  promptRef,
  streaming,
  mode,
  onModeChange,
  onAsk,
  onSubmit,
  onStop,
  onToast,
}: ComposerProps) {
  const [value, setValue] = useState('');
  const [files, setFiles] = useState<LeaseFile[]>(initialFiles);
  const [filesOpened, setFilesOpened] = useState(false);
  const [addedCount, setAddedCount] = useState(0);
  const [filesOffset, setFilesOffset] = useState(6);
  const [modeOffset, setModeOffset] = useState(6);

  useWindowEvent('keydown', (event) => {
    if (event.key === 'Escape') {
      setFilesOpened(false);
    }
  });

  const pages = files.reduce((total, file) => total + file.pages, 0);

  const submit = (event?: React.FormEvent) => {
    event?.preventDefault();
    if (streaming) {
      onStop();
      return;
    }
    const question = value.trim();
    if (!question) {
      promptRef.current?.focus();
      return;
    }
    setValue('');
    onSubmit(question);
  };

  const removeFile = (file: LeaseFile) => {
    setFiles((current) => current.filter((item) => item.id !== file.id));
    onToast(`Removed ${file.name}`);
  };

  const addFile = () => {
    setFiles((current) => [...current, { ...addedFile, id: `added-${addedCount}` }]);
    setAddedCount((count) => count + 1);
    onToast('Added. Clerk will read it with the next question');
  };

  return (
    <div className={classes.composerWrap}>
      <div className={classes.chips}>
        {suggestions.map((suggestion) => (
          <Button
            key={suggestion.question}
            variant="default"
            size="xs"
            radius="xl"
            className={classes.chip}
            onClick={() => onAsk(suggestion.question, suggestion.answer)}
          >
            {suggestion.question}
          </Button>
        ))}
      </div>

      <form className={classes.composer} onSubmit={submit}>
        <Textarea
          ref={promptRef}
          variant="unstyled"
          autosize
          minRows={2}
          maxRows={5}
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              submit();
            }
          }}
          placeholder="Ask about the lease, the schedules or the heads of terms"
          aria-label="Ask Clerk"
        />

        <div className={classes.composerBar}>
          <Popover
            opened={filesOpened}
            onChange={setFilesOpened}
            position="top-start"
            offset={{ mainAxis: filesOffset, crossAxis: -9 }}
            width={340}
            withinPortal={false}
          >
            <Popover.Target>
              <Button
                variant="default"
                radius="xl"
                className={classes.filesButton}
                leftSection={<IconPaperclip stroke={1.7} />}
                aria-expanded={filesOpened}
                onClick={(event) => {
                  setFilesOffset(getFormOffset(event.currentTarget));
                  setFilesOpened((opened) => !opened);
                }}
              >
                <span>
                  <b>{files.length}</b> files, {pages} pages
                </span>
              </Button>
            </Popover.Target>
            <Popover.Dropdown className={classes.filesDropdown}>
              {files.length ? (
                files.map((file) => (
                  <div key={file.id} className={classes.fileRow}>
                    <span className={classes.fileIcon}>{file.kind}</span>
                    <span className={classes.fileText}>
                      <span className={classes.fileName}>{file.name}</span>
                      <span className={classes.fileMeta}>
                        {file.pages} pages, {file.added}
                      </span>
                    </span>
                    <ActionIcon
                      variant="subtle"
                      aria-label={`Remove ${file.name}`}
                      onClick={() => removeFile(file)}
                    >
                      <IconX size={18} stroke={1.7} />
                    </ActionIcon>
                  </div>
                ))
              ) : (
                <div className={classes.fileEmpty}>No files. Add the lease to start.</div>
              )}
              <div className={classes.filesFoot}>
                <span>Clerk only reads files in this matter.</span>
                <Button
                  variant="default"
                  size="xs"
                  leftSection={<IconPlus stroke={1.7} />}
                  onClick={addFile}
                >
                  Add file
                </Button>
              </div>
            </Popover.Dropdown>
          </Popover>

          <span className={classes.spacer} />

          <Menu position="top-end" offset={modeOffset} width={250} withinPortal={false}>
            <Menu.Target>
              <Button
                variant="default"
                className={classes.modeButton}
                onClick={(event) => setModeOffset(getFormOffset(event.currentTarget))}
                rightSection={<IconChevronDown stroke={1.7} />}
              >
                {mode}
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.RadioGroup value={mode} onChange={(next) => onModeChange(next as Mode)}>
                {modes.map((item) => (
                  <Menu.RadioItem
                    key={item.value}
                    value={item.value}
                    checkIcon={<IconCheck stroke={1.7} />}
                    closeMenuOnClick
                  >
                    <b className={classes.modeTitle}>{item.value}</b>
                    <span className={classes.modeDescription}>{item.description}</span>
                  </Menu.RadioItem>
                ))}
              </Menu.RadioGroup>
            </Menu.Dropdown>
          </Menu>

          <ActionIcon
            type="submit"
            variant="filled"
            radius="50%"
            size={34}
            aria-label={streaming ? 'Stop' : 'Send'}
          >
            {streaming ? (
              <IconPlayerStopFilled size={14} />
            ) : (
              <IconArrowUp size={17} stroke={1.7} />
            )}
          </ActionIcon>
        </div>
      </form>

      <div className={classes.composerNote}>
        Clerk can miss things. Check every cited clause before advising the client.
      </div>
    </div>
  );
}
