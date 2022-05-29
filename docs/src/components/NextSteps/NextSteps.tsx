import React from 'react';
import { Link } from 'gatsby';
import { ThemeIcon, Text, Group, SimpleGrid } from '@mantine/core';
import { IconRocket } from '@tabler/icons';
import { NEXT_STEPS_DATA } from './data';
import useStyles from './NextSteps.styles';

export function NextSteps() {
  const { classes, cx } = useStyles();

  const items = NEXT_STEPS_DATA.map((item, index) => {
    const LinkComponent =
      item.type === 'gatsby' ? Link : (props: any) => <a {...props}>{props.children}</a>;
    const linkProps = item.type === 'gatsby' ? { to: item.link } : { href: item.link };

    return (
      <LinkComponent className={classes.link} key={index} {...linkProps}>
        <Group noWrap>
          <ThemeIcon size={34} color={item.color} radius="md">
            <item.icon width={22} height={22} size={22} />
          </ThemeIcon>

          <Text weight={500} size="lg">
            {item.title}
          </Text>
        </Group>
        <Text size="sm" color="dimmed" mt="md" sx={{ lineHeight: 1.6 }}>
          {item.description}
        </Text>
      </LinkComponent>
    );
  });

  return (
    <SimpleGrid
      cols={2}
      breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      className={classes.wrapper}
      spacing="xl"
    >
      {items}

      <a href="https://ui.mantine.dev/" className={cx(classes.link, classes.linkUI)}>
        <Group noWrap>
          <ThemeIcon
            size={34}
            color="#fff"
            radius="md"
            sx={(theme) => ({ color: theme.colors.blue[6], boxShadow: theme.shadows.sm })}
          >
            <IconRocket stroke={1.5} />
          </ThemeIcon>

          <Text weight={500} size="lg">
            Explore Mantine UI
          </Text>
        </Group>
        <Text size="sm" mt="md" className={classes.uiDescription} sx={{ lineHeight: 1.6 }}>
          Mantine UI is a set of 120+ responsive components. All components support dark/light
          theme. It is free for everyone.
        </Text>
      </a>
    </SimpleGrid>
  );
}
