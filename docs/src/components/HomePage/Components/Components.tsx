import React, { useState, useRef } from 'react';
import { Container, Grid, UnstyledButton, Text } from '@mantine/core';
import {
  IconForms,
  IconCalendar,
  IconStack2,
  IconDragDrop,
  IconBold,
  IconNotebook,
} from '@tabler/icons';
import { useMediaQuery } from '@mantine/hooks';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Inputs } from './demos/Inputs';
import { Dates } from './demos/Dates';
import { Overlays } from './demos/Overlays';
import { Content } from './demos/Content';
import { RichText } from './demos/RichText';
import { DropzoneDemo } from './demos/Dropzone';
import useStyles from './Components.styles';

const data = [
  { demo: Inputs, icon: IconForms, name: 'Inputs', description: '20+ input components' },
  {
    demo: Dates,
    icon: IconCalendar,
    name: 'Date pickers',
    description: 'Calendar, date pickers, time inputs',
  },
  {
    demo: Overlays,
    icon: IconStack2,
    name: 'Overlays & Navigation',
    description: 'Modal, HoverCard, Tabs, Stepper',
  },
  { demo: Content, icon: IconNotebook, name: 'Content', description: 'Accordion, Timeline' },
  {
    demo: RichText,
    icon: IconBold,
    name: 'Rich text editor',
    description: 'Quill based rich text editor',
  },
  { demo: DropzoneDemo, icon: IconDragDrop, name: 'Dropzone', description: 'Drag and drop files' },
];

export function Components() {
  const { classes, theme } = useStyles();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const animationTimeout = useRef<number>();
  const [active, setActive] = useState(0);
  const controlSize = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`) ? 60 : 80;

  const handleActiveChange = (index: number) => {
    setActive(index);
    if (index !== active) {
      setShouldAnimate(true);
      window.clearTimeout(animationTimeout.current);
      animationTimeout.current = window.setTimeout(() => setShouldAnimate(false), 500);
    }
  };

  const controls = data.map((item, index) => (
    <UnstyledButton<'button'>
      key={item.name}
      onClick={() => handleActiveChange(index)}
      data-active={index === active || undefined}
      className={classes.control}
    >
      <div className={classes.controlInner}>
        <item.icon size={28} stroke={1.5} className={classes.controlIcon} />
        <div>
          <Text className={classes.controlTitle}>{item.name}</Text>
          <Text color="dimmed" size="sm" className={classes.controlDescription}>
            {item.description}
          </Text>
        </div>
      </div>
    </UnstyledButton>
  ));

  const ActiveDemo = data[active].demo;

  return (
    <div className={classes.root}>
      <Container size={1100}>
        <SectionTitle>100+ components</SectionTitle>
        <Grid gutter={0} mt="md">
          <Grid.Col md={4}>
            <div className={classes.controls}>
              <div
                className={classes.controlsIndicator}
                style={{ height: controlSize, transform: `translateY(${controlSize * active}px)` }}
              />
              {controls}
            </div>
          </Grid.Col>
          <Grid.Col md={8}>
            <div className={classes.demo} style={{ animation: shouldAnimate ? undefined : 'none' }}>
              <ActiveDemo />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
