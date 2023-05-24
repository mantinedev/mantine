import React, { useState, useRef } from 'react';
import { Container, Grid, UnstyledButton, Text, Box, rem } from '@mantine/core';
import { IconForms } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import useStyles from './DemoTabs.styles';

interface DemoTabsProps {
  title: string;
  data: {
    demo: React.FC<any>;
    icon: typeof IconForms;
    name: string;
    description: string;
  }[];
}

export function DemoTabs({ data, title }: DemoTabsProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { classes, theme } = useStyles({ shouldAnimate });
  const animationTimeout = useRef<number>();
  const [active, setActive] = useState(0);
  const controlSize = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`) ? 60 : 80;

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
        <item.icon size={rem(28)} stroke={1.5} className={classes.controlIcon} />
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
        <SectionTitle>{title}</SectionTitle>
        <Grid gutter={0} mt="md">
          <Grid.Col md={4}>
            <div className={classes.controls}>
              <Box
                className={classes.controlsIndicator}
                sx={{
                  height: rem(controlSize),
                  transform: `translateY(${rem(controlSize * active)})`,
                }}
              />
              {controls}
            </div>
          </Grid.Col>
          <Grid.Col md={8}>
            <div className={classes.demo}>
              <ActiveDemo />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
