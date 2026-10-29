'use client';

import { useRef, useState } from 'react';
import {
  IconArchive,
  IconChevronLeft,
  IconCopy,
  IconDots,
  IconPencil,
  IconPhone,
  IconPlus,
  IconSend,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Checkbox,
  Menu,
  ScrollArea,
  Tabs,
  Textarea,
  Timeline,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { StageStepper } from './CommissionMeter';
import { type Deal, OWNERS, STAGES } from './data';
import classes from './Benchbook.module.css';

export type DetailTab = 'overview' | 'files' | 'emails';

const MENU_ICON = { size: 17, stroke: 1.75 };

interface DealDetailProps {
  deal: Deal;
  tab: DetailTab;
  onTabChange: (tab: DetailTab) => void;
  onBack: () => void;
  onAdvance: () => void;
  onLogCall: () => void;
  onAddNote: (note: string) => void;
  onToggleTask: (index: number, done: boolean) => void;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Title order={2} className={classes.sectionTitle}>
      {children}
    </Title>
  );
}

function Overview({
  deal,
  onAddNote,
  onToggleTask,
}: Pick<DealDetailProps, 'deal' | 'onAddNote' | 'onToggleTask'>) {
  const [note, setNote] = useState('');
  const noteRef = useRef<HTMLTextAreaElement>(null);

  const addNote = () => {
    const value = note.trim();
    if (!value) {
      noteRef.current?.focus();
      return;
    }
    onAddNote(value);
    setNote('');
  };

  return (
    <>
      <div>
        <SectionTitle>Details</SectionTitle>
        <dl className={classes.fields}>
          {deal.fields.map(([label, value, hint]) => (
            <div key={label} className={classes.field}>
              <dt>{label}</dt>
              <dd>
                {value}
                {hint && <small>{hint}</small>}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={classes.twoCol}>
        <div>
          <SectionTitle>
            Tasks
            <Button variant="default" size="xs" leftSection={<IconPlus size={17} stroke={1.75} />}>
              Add task
            </Button>
          </SectionTitle>
          <ul className={classes.tasks}>
            {deal.tasks.length === 0 && (
              <li className={classes.small}>Nothing to do on this one.</li>
            )}
            {deal.tasks.map((task, index) => {
              const late = task.late && !task.done;
              return (
                <li key={task.text}>
                  <Checkbox
                    className={classes.task}
                    classNames={{ label: classes.taskLabel, description: classes.taskDescription }}
                    mod={{ done: task.done }}
                    checked={task.done}
                    onChange={(event) => onToggleTask(index, event.currentTarget.checked)}
                    label={task.text}
                    description={
                      <span data-late={late || undefined} className={classes.taskDue}>
                        {late ? `Overdue, ${task.due}` : task.due}
                      </span>
                    }
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <SectionTitle>Activity</SectionTitle>
          <div className={classes.composer}>
            <Textarea
              ref={noteRef}
              variant="unstyled"
              placeholder="Add a note for the team"
              aria-label="Add a note"
              value={note}
              onChange={(event) => setNote(event.currentTarget.value)}
              classNames={{ input: classes.composerInput }}
            />
            <div className={classes.composerFoot}>
              <span>Visible to everyone at Hollis &amp; Rowe</span>
              <Button size="xs" onClick={addNote}>
                Add note
              </Button>
            </div>
          </div>
          <Timeline className={classes.timeline}>
            {deal.activity.map((entry) => (
              <Timeline.Item
                key={entry.id}
                active
                title={entry.title}
                classNames={entry.note ? { itemBullet: classes.noteBullet } : undefined}
              >
                <div className={classes.small}>{entry.meta}</div>
                {entry.body && <div className={classes.timelineBody}>{entry.body}</div>}
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    </>
  );
}

function Files({ deal }: { deal: Deal }) {
  if (deal.files.length === 0) {
    return <p className={classes.small}>No files yet. Drop drawings, photos or quotes here.</p>;
  }

  return (
    <ul className={classes.rows}>
      {deal.files.map(([type, name, meta]) => (
        <li key={name}>
          <span className={classes.fileIcon}>{type}</span>
          <span className={classes.rowText}>
            <span className={classes.rowTitle}>{name}</span>
            <span className={classes.rowSub}>{meta}</span>
          </span>
          <Button variant="default" size="xs">
            Open
          </Button>
        </li>
      ))}
    </ul>
  );
}

function Emails({ deal }: { deal: Deal }) {
  if (deal.emails.length === 0) {
    return <p className={classes.small}>No emails with this client yet.</p>;
  }

  return (
    <ul className={classes.rows}>
      {deal.emails.map(([subject, from]) => (
        <li key={subject}>
          <Avatar size={26}>
            {from
              .split(' ')
              .map((word) => word[0])
              .slice(0, 2)
              .join('')}
          </Avatar>
          <span className={classes.rowText}>
            <span className={classes.rowTitle}>{subject}</span>
            <span className={classes.rowSub}>{from}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function DealDetail({
  deal,
  tab,
  onTabChange,
  onBack,
  onAdvance,
  onLogCall,
  onAddNote,
  onToggleTask,
}: DealDetailProps) {
  const next = STAGES[deal.stage + 1];

  return (
    <main className={classes.detail} aria-live="polite">
      <ScrollArea className={classes.detailScroll} scrollbars="y" scrollbarSize={8}>
        <div className={classes.detailInner}>
          <UnstyledButton className={classes.back} onClick={onBack}>
            <IconChevronLeft size={16} stroke={1.75} />
            Commissions
          </UnstyledButton>

          <div className={classes.recordHead}>
            <div className={classes.recordMain}>
              <Title order={2} className={classes.recordTitle}>
                {deal.client}
              </Title>
              <div className={classes.recordSub}>
                <span>
                  {deal.project}, {deal.place}
                </span>
                {deal.late && <Badge color="rust">{deal.due}</Badge>}
                {!deal.late && deal.closed && <Badge color="sage">Closed</Badge>}
              </div>
            </div>
            <div className={classes.recordActions}>
              <Button
                variant="default"
                className={classes.logCall}
                leftSection={<IconPhone size={17} stroke={1.75} />}
                onClick={onLogCall}
              >
                Log a call
              </Button>
              <Button leftSection={<IconSend size={17} stroke={1.75} />}>Email client</Button>
              <Menu position="bottom-end">
                <Menu.Target>
                  <ActionIcon aria-label="More actions">
                    <IconDots size={20} stroke={1.75} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item leftSection={<IconPencil {...MENU_ICON} />}>Edit details</Menu.Item>
                  <Menu.Item leftSection={<IconCopy {...MENU_ICON} />}>
                    Duplicate as new quote
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item color="rust" leftSection={<IconArchive {...MENU_ICON} />}>
                    Mark as lost
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>

          <div>
            <StageStepper stage={deal.stage} />
            <div className={classes.stageRow}>
              <span>
                Owner <b>{OWNERS[deal.owner]}</b>, {STAGES[deal.stage].toLowerCase()} stage
              </span>
              {next && (
                <Button variant="default" size="xs" onClick={onAdvance}>
                  Move to {next.toLowerCase()}
                </Button>
              )}
            </div>
          </div>

          <Tabs
            value={tab}
            onChange={(value) => onTabChange(value as DetailTab)}
            className={classes.tabsRoot}
          >
            <ScrollArea scrollbars="x" type="never">
              <Tabs.List aria-label="Record sections">
                <Tabs.Tab value="overview">Overview</Tabs.Tab>
                <Tabs.Tab value="files" rightSection={deal.files.length}>
                  Files
                </Tabs.Tab>
                <Tabs.Tab value="emails" rightSection={deal.emails.length}>
                  Emails
                </Tabs.Tab>
              </Tabs.List>
            </ScrollArea>

            <Tabs.Panel value="overview" className={classes.panel}>
              <Overview
                key={deal.id}
                deal={deal}
                onAddNote={onAddNote}
                onToggleTask={onToggleTask}
              />
            </Tabs.Panel>
            <Tabs.Panel value="files">
              <Files deal={deal} />
            </Tabs.Panel>
            <Tabs.Panel value="emails">
              <Emails deal={deal} />
            </Tabs.Panel>
          </Tabs>
        </div>
      </ScrollArea>
    </main>
  );
}
