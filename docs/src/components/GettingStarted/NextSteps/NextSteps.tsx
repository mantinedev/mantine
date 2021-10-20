import React from 'react';
import { Link } from 'gatsby';
import { Title, ThemeIcon, Text, Group, SimpleGrid, useMantineTheme } from '@mantine/core';
import { NEXT_STEPS_DATA } from './data';
import useStyles from './NextSteps.styles';

export function NextSteps() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const items = NEXT_STEPS_DATA.map((item, index) => {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    const LinkComponent = item.type === 'gatsby' ? Link : (props: any) => <a {...props} />;
    const linkProps = item.type === 'gatsby' ? { to: item.link } : { href: item.link };

    return (
      <LinkComponent className={classes.link} key={index} {...linkProps}>
        <Group>
          <ThemeIcon size={34} style={{ backgroundColor: item.color }}>
            <item.icon width={22} height={22} size={22} />
          </ThemeIcon>

          <Text weight={500} size="lg">
            {item.title}
          </Text>
        </Group>
        <Text size="sm" color="dimmed" mt="md" style={{ lineHeight: 1.6 }}>
          {item.description}
        </Text>
      </LinkComponent>
    );
  });

  return (
    <div className={classes.wrapper}>
      <Title order={2} style={{ color: theme.colorScheme === 'dark' ? theme.white : theme.black }}>
        Next steps
      </Title>
      <SimpleGrid cols={3} mt={15} breakpoints={[{ maxWidth: 960, cols: 1 }]}>
        {items}
      </SimpleGrid>
    </div>
  );
}
