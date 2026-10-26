'use client';

import { useState } from 'react';
import { IconAlertCircle, IconArrowBackUp, IconArrowUp, IconBulb } from '@tabler/icons-react';
import {
  Alert,
  Avatar,
  Badge,
  Button,
  Paper,
  ScrollArea,
  Tabs,
  Textarea,
  ThemeIcon,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { captions, type Post, posts as initialPosts, resources, steps } from './data';
import { formatTime } from './use-player';
import classes from './LessonTabs.module.css';

interface LessonTabsProps {
  onSeek: (time: number) => void;
  onToast: (message: string) => void;
}

function TabCount({ children }: { children: React.ReactNode }) {
  return <span className={classes.count}>{children}</span>;
}

function NotesPanel() {
  return (
    <>
      <Title order={2} className={classes.panelTitle}>
        Why centering comes first
      </Title>
      <p className={classes.paragraph}>
        Every pot you throw inherits its shape from the lump it started as. If the clay runs even a
        few millimetres off centre, the walls come up thick on one side and thin on the other, and
        the pot will wobble, slump or tear as you pull it taller.
      </p>
      <p className={classes.paragraph}>
        Centering is the slow, steady pressure that moves the clay to the middle of the wheel and
        keeps it there. It takes most beginners weeks to feel. The steps below are the ones Akiko
        uses in the video.
      </p>

      <ol className={classes.steps}>
        {steps.map((step) => (
          <li key={step.title}>
            <b>{step.title}</b>
            <span>
              {step.text} <span className={classes.stepTime}>At {step.at}</span>
            </span>
          </li>
        ))}
      </ol>

      <Alert
        color="red"
        title="Common mistakes"
        className={classes.callout}
        icon={
          <ThemeIcon color="red" radius="xl" size={32}>
            <IconAlertCircle size={17} stroke={1.75} />
          </ThemeIcon>
        }
      >
        <ul>
          <li>Running the wheel too slowly. For a 1 kg ball, aim for about two turns a second.</li>
          <li>
            Letting go suddenly. Ease your hands off over two or three turns or the clay jumps off
            centre.
          </li>
          <li>
            Adding too much water. Soggy clay collapses when you start opening it in lesson 5.
          </li>
        </ul>
      </Alert>

      <Alert
        color="green"
        title="Practise without the wheel"
        className={classes.callout}
        icon={
          <ThemeIcon color="green" radius="xl" size={32}>
            <IconBulb size={17} stroke={1.75} />
          </ThemeIcon>
        }
      >
        Wedge three 1 kg balls on the table before each session and pat each one into a smooth dome.
        The rounder the ball you start with, the less centering it needs.
      </Alert>
    </>
  );
}

function TranscriptPanel({ onSeek }: { onSeek: (time: number) => void }) {
  return (
    <div className={classes.transcript}>
      {captions.map((line) => (
        <div key={line.time} className={classes.transcriptLine}>
          <UnstyledButton className={classes.timestamp} onClick={() => onSeek(line.time)}>
            {formatTime(line.time)}
          </UnstyledButton>
          <span>{line.text}</span>
        </div>
      ))}
    </div>
  );
}

function ResourcesPanel() {
  return (
    <ul className={classes.files}>
      {resources.map((file) => (
        <Paper component="li" key={file.title} className={classes.file}>
          <span className={classes.fileIcon}>PDF</span>
          <span className={classes.fileBody}>
            <span className={classes.fileTitle}>{file.title}</span>
            <span className={classes.fileDescription}>{file.description}</span>
          </span>
          <Button variant="default" size="xs">
            Open
          </Button>
        </Paper>
      ))}
    </ul>
  );
}

interface ThreadPost extends Post {
  voted: boolean;
}

function PostItem({ post, onVote }: { post: ThreadPost; onVote: () => void }) {
  return (
    <li className={classes.post} data-answer={post.instructor || undefined}>
      <Avatar variant={post.instructor ? 'filled' : 'default'} className={classes.postAvatar}>
        {post.initials}
      </Avatar>
      <div className={classes.postHead}>
        <b>{post.author}</b>
        {post.instructor && <Badge className={classes.instructor}>Instructor</Badge>}
        {post.time}
      </div>
      <div className={classes.postBody}>{post.body}</div>
      <div className={classes.postActions}>
        <UnstyledButton className={classes.postAction} aria-pressed={post.voted} onClick={onVote}>
          <IconArrowUp size={15} stroke={1.75} />
          <span>{post.votes}</span>
        </UnstyledButton>
        {!post.instructor && (
          <UnstyledButton className={classes.postAction}>
            <IconArrowBackUp size={15} stroke={1.75} />
            Reply
          </UnstyledButton>
        )}
      </div>
    </li>
  );
}

function DiscussionPanel({
  thread,
  onThreadChange,
  onToast,
}: {
  thread: ThreadPost[];
  onThreadChange: (thread: ThreadPost[]) => void;
  onToast: (message: string) => void;
}) {
  const [question, setQuestion] = useState('');

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = question.trim();
    if (!value) {
      event.currentTarget.querySelector('textarea')?.focus();
      return;
    }
    onThreadChange([
      {
        id: `own-${thread.length}`,
        initials: 'JM',
        author: 'Jess Moreno',
        time: 'Just now',
        body: value,
        votes: 0,
        voted: false,
      },
      ...thread,
    ]);
    setQuestion('');
    onToast('Question posted');
  };

  const vote = (id: string) =>
    onThreadChange(
      thread.map((post) =>
        post.id === id
          ? { ...post, voted: !post.voted, votes: post.votes + (post.voted ? -1 : 1) }
          : post
      )
    );

  return (
    <>
      <form className={classes.ask} onSubmit={submit}>
        <Textarea
          label="Ask a question about this lesson"
          placeholder="What are you stuck on?"
          minRows={3}
          classNames={{ label: classes.askLabel, input: classes.textarea }}
          value={question}
          onChange={(event) => setQuestion(event.currentTarget.value)}
        />
        <div className={classes.rowEnd}>
          <span>Akiko answers questions on Tuesdays and Fridays</span>
          <Button size="xs" type="submit">
            Post question
          </Button>
        </div>
      </form>
      <ul className={classes.thread}>
        {thread.map((post) => (
          <PostItem key={post.id} post={post} onVote={() => vote(post.id)} />
        ))}
      </ul>
    </>
  );
}

export function LessonTabs({ onSeek, onToast }: LessonTabsProps) {
  const [thread, setThread] = useState<ThreadPost[]>(() =>
    initialPosts.map((post) => ({ ...post, voted: false }))
  );

  return (
    <Paper component="section" className={classes.card}>
      <Tabs defaultValue="notes" keepMounted={false}>
        <ScrollArea type="never" scrollbars="x">
          <Tabs.List className={classes.list} aria-label="Lesson sections">
            <Tabs.Tab value="notes">Lesson notes</Tabs.Tab>
            <Tabs.Tab value="transcript">Transcript</Tabs.Tab>
            <Tabs.Tab value="resources" rightSection={<TabCount>{resources.length}</TabCount>}>
              Resources
            </Tabs.Tab>
            <Tabs.Tab value="discussion" rightSection={<TabCount>{thread.length}</TabCount>}>
              Discussion
            </Tabs.Tab>
          </Tabs.List>
        </ScrollArea>

        <Tabs.Panel value="notes" className={classes.panel}>
          <NotesPanel />
        </Tabs.Panel>
        <Tabs.Panel value="transcript" className={classes.panel}>
          <TranscriptPanel onSeek={onSeek} />
        </Tabs.Panel>
        <Tabs.Panel value="resources" className={classes.panel}>
          <ResourcesPanel />
        </Tabs.Panel>
        <Tabs.Panel value="discussion" className={classes.panel}>
          <DiscussionPanel thread={thread} onThreadChange={setThread} onToast={onToast} />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
}
