import React, { useState } from 'react';
import { Container, Grid, UnstyledButton, Text } from '@mantine/core';
import {
  IconForms,
  IconCalendar,
  IconStack2,
  IconLink,
  IconDragDrop,
  IconBold,
} from '@tabler/icons';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Inputs } from './demos/Inputs';
import useStyles from './Components.styles';

const data = [
  { demo: Inputs, icon: IconForms, name: 'Inputs', description: '20+ input components' },
  {
    demo: Inputs,
    icon: IconCalendar,
    name: 'Date pickers',
    description: 'Calendar, date pickers, time inputs',
  },
  { demo: Inputs, icon: IconStack2, name: 'Overlays', description: 'Modal, Drawer, Popover, Menu' },
  { demo: Inputs, icon: IconLink, name: 'Navigation', description: 'Tabs, Pagination, Stepper' },
  {
    demo: Inputs,
    icon: IconBold,
    name: 'Rich text editor',
    description: 'Quill based rich text editor',
  },
  { demo: Inputs, icon: IconDragDrop, name: 'Dropzone', description: 'Drag and drop files' },
];

export function Components() {
  const { classes } = useStyles();
  const [active, setActive] = useState('Inputs');
  const controls = data.map((item) => (
    <UnstyledButton
      key={item.name}
      onClick={() => setActive(item.name)}
      data-active={item.name === active || undefined}
      className={classes.control}
    >
      <item.icon size={28} stroke={1.5} className={classes.controlIcon} />
      <div>
        <Text className={classes.controlTitle}>{item.name}</Text>
        <Text color="dimmed" size="sm">
          {item.description}
        </Text>
      </div>
    </UnstyledButton>
  ));

  const ActiveDemo = data.find((item) => item.name === active).demo;

  return (
    <div className={classes.root}>
      <Container size={1100}>
        <SectionTitle>100+ components</SectionTitle>
        <Grid gutter={60} mt="md">
          <Grid.Col span={4}>{controls}</Grid.Col>
          <Grid.Col span={8}>
            <ActiveDemo />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
