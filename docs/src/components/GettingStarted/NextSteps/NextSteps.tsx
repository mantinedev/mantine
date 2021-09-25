import React from 'react';
import { Link } from 'gatsby';
import { Title, ThemeIcon, Text, Group } from '@mantine/core';
import { NEXT_STEPS_DATA } from './data';
import useStyles from './NextSteps.styles';

export function NextSteps() {
  const { classes } = useStyles();
  const items = NEXT_STEPS_DATA.map((item, index) => {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    const LinkComponent = item.type === 'gatsby' ? Link : (props: any) => <a {...props} />;
    const linkProps = item.type === 'gatsby' ? { to: item.link } : { href: item.link };

    return (
      <LinkComponent className={classes.link} key={index} {...linkProps}>
        <Group spacing="lg">
          <ThemeIcon size={40} style={{ backgroundColor: item.color }}>
            <item.icon width={26} height={26} size={26} />
          </ThemeIcon>
          <Text weight={500} size="lg">
            {item.title}
          </Text>
        </Group>
        <Text size="sm" className={classes.description}>
          {item.description}
        </Text>
      </LinkComponent>
    );
  });
  return (
    <div className={classes.wrapper}>
      <Title>Next steps</Title>
      <div className={classes.links}>{items}</div>
    </div>
  );
}
