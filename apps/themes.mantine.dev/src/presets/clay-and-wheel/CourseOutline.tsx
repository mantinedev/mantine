'use client';

import { IconCheck, IconChevronDown, IconLock } from '@tabler/icons-react';
import { Accordion, NavLink, Title } from '@mantine/core';
import type { CourseModule, LessonState } from './data';
import classes from './CourseOutline.module.css';

interface CourseOutlineProps {
  modules: CourseModule[];
  openedModules: string[];
  onOpenedModulesChange: (value: string[]) => void;
}

function StateIcon({ state }: { state: LessonState }) {
  return (
    <span className={classes.state} data-state={state}>
      {state === 'done' && <IconCheck size={13} stroke={2.5} />}
      {state === 'locked' && <IconLock size={15} stroke={1.75} />}
    </span>
  );
}

export function CourseOutline({
  modules,
  openedModules,
  onOpenedModulesChange,
}: CourseOutlineProps) {
  let lessonNumber = 0;

  return (
    <>
      <Title order={2} className={classes.title}>
        Throwing your first bowls
      </Title>
      <Accordion
        multiple
        value={openedModules}
        onChange={onOpenedModulesChange}
        chevron={<IconChevronDown size={18} stroke={1.75} />}
      >
        {modules.map((module, moduleIndex) => {
          const done = module.lessons.filter((lesson) => lesson.state === 'done').length;
          return (
            <Accordion.Item key={module.name} value={String(moduleIndex)}>
              <Accordion.Control>
                <span className={classes.moduleName}>
                  {moduleIndex + 1}. {module.name}
                </span>
                <span className={classes.moduleMeta}>
                  {done} of {module.lessons.length} done
                </span>
              </Accordion.Control>
              <Accordion.Panel>
                {module.lessons.map((lesson) => {
                  lessonNumber += 1;
                  const locked = lesson.state === 'locked';
                  return (
                    <NavLink
                      key={lesson.name}
                      href="#"
                      label={`${lessonNumber}. ${lesson.name}`}
                      leftSection={<StateIcon state={lesson.state} />}
                      rightSection={<span className={classes.duration}>{lesson.duration}</span>}
                      active={lesson.state === 'current'}
                      aria-current={lesson.state === 'current' ? 'page' : undefined}
                      aria-disabled={locked || undefined}
                      classNames={
                        locked ? { root: classes.locked, label: classes.lockedLabel } : undefined
                      }
                      onClick={(event) => event.preventDefault()}
                    />
                  );
                })}
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
}
