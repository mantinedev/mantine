import React, { useState } from 'react';
import { Container, Grid, UnstyledButton, Text } from '@mantine/core';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Inputs } from './demos/Inputs';
import useStyles from './Components.styles';

const data = [
  { demo: Inputs, name: 'Inputs', description: '20+ input components' },
  { demo: Inputs, name: 'Date pickers', description: 'Calendar, date pickers, time inputs' },
  { demo: Inputs, name: 'Overlays', description: 'Modal, Drawer, Popover, Menu' },
  { demo: Inputs, name: 'Navigation', description: 'Tabs, Pagination, Stepper' },
  { demo: Inputs, name: 'Rich text editor', description: 'Quill based rich text editor' },
  { demo: Inputs, name: 'Dropzone', description: 'Drag and drop files' },
  { demo: Inputs, name: 'Spotlight', description: 'Command center for your application' },
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
      <Text className={classes.controlTitle}>{item.name}</Text>
      <Text color="dimmed" size="sm">
        {item.description}
      </Text>
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
