'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Anchor, Avatar, Drawer, Title, Transition } from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { PresetProvider } from '@/components/PresetProvider';
import { CourseOutline } from './CourseOutline';
import { CURRENT_LESSON, modules as initialModules } from './data';
import { LessonPlayer } from './LessonPlayer';
import { LessonTabs } from './LessonTabs';
import { NotesAndNext } from './NotesAndNext';
import { Quiz } from './Quiz';
import { cssVariablesResolver, theme } from './theme';
import { TopBar } from './TopBar';
import { usePlayer } from './use-player';
import classes from './ClayAndWheel.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;600;700&family=Red+Hat+Text:ital,wght@0,400;0,500;0,600;1,400&display=swap';

function Lesson() {
  const [complete, setComplete] = useState(false);
  const [outlineOpened, setOutlineOpened] = useState(false);
  const [openedModules, setOpenedModules] = useState(['0']);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeout = useRef<number>(undefined);
  const playerRef = useRef<HTMLDivElement>(null);
  const player = usePlayer();

  useEffect(() => () => window.clearTimeout(toastTimeout.current), []);

  const modules = useMemo(
    () =>
      initialModules.map((module) => ({
        ...module,
        lessons: module.lessons.map((lesson) =>
          lesson.name === CURRENT_LESSON && complete
            ? { ...lesson, state: 'done' as const }
            : lesson
        ),
      })),
    [complete]
  );

  const doneCount = complete ? 5 : 4;

  const showToast = (message: string) => {
    setToast(message);
    window.clearTimeout(toastTimeout.current);
    toastTimeout.current = window.setTimeout(() => setToast(null), 2400);
  };

  const toggleComplete = () => {
    setComplete(!complete);
    showToast(complete ? 'Lesson 4 marked as not complete' : 'Lesson 4 marked complete');
  };

  const seek = (time: number) => {
    player.setTime(time);
    player.setPlaying(true);
    playerRef.current?.scrollIntoView({ block: 'nearest' });
  };

  const outline = (
    <CourseOutline
      modules={modules}
      openedModules={openedModules}
      onOpenedModulesChange={setOpenedModules}
    />
  );

  return (
    <>
      <div className={classes.root}>
        <TopBar
          doneCount={doneCount}
          outlineOpened={outlineOpened}
          onOutlineToggle={() => setOutlineOpened((opened) => !opened)}
        />

        <div className={classes.layout}>
          <nav className={classes.outline} aria-label="Course outline">
            {outline}
          </nav>

          <main className={classes.main}>
            <div>
              <Anchor href="#" c="inherit" size="sm" onClick={(event) => event.preventDefault()}>
                Module 1, Getting started on the wheel
              </Anchor>
              <Title order={1} className={classes.title}>
                Centering the clay
              </Title>
              <div className={classes.meta}>
                <Avatar variant="filled">AN</Avatar>
                <span>
                  With <b>Akiko Nakamura</b>
                </span>
                <span className={classes.separator} aria-hidden />
                <span>Lesson 4, 14 min video</span>
              </div>
            </div>

            <LessonPlayer ref={playerRef} player={player} />
            <LessonTabs onSeek={seek} onToast={showToast} />
            <Quiz />
            <NotesAndNext complete={complete} onCompleteToggle={toggleComplete} />
          </main>
        </div>

        <Drawer
          opened={outlineOpened}
          onClose={() => setOutlineOpened(false)}
          withinPortal={false}
          lockScroll={false}
          withCloseButton={false}
          size="min(320px, 88%)"
          className={classes.drawer}
          classNames={{ content: classes.drawerContent, body: classes.drawerBody }}
          aria-label="Course outline"
        >
          {outline}
        </Drawer>
      </div>

      <Transition mounted={toast !== null} transition="pop" duration={150} keepMounted={false}>
        {(styles) => (
          <div className={classes.toastAnchor}>
            <div className={classes.toast} style={styles} role="status">
              {toast}
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}

export function ClayAndWheel() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <PresetProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <Lesson />
        </PresetFrame>
      </PresetProvider>
    </>
  );
}
