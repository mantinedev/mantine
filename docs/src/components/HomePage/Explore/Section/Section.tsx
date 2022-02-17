import React from 'react';
import { Link } from 'gatsby';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Section.styles';

interface SectionProps {
  title: React.ReactNode;
  description: React.ReactNode | React.ReactNode[];
  children: React.ReactNode;
  label?: React.ReactNode;
  link?: string;
}

export function Section({ title, description, children, link, label }: SectionProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.meta}>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        {Array.isArray(description) ? (
          description.map((line, index) => (
            <Text className={classes.description} key={index}>
              {line}
            </Text>
          ))
        ) : (
          <Text className={classes.description}>{description}</Text>
        )}

        {link && (
          <Anchor component={Link} to={link} className={classes.link}>
            {label}
            <ArrowRightIcon style={{ marginLeft: 8 }} />
          </Anchor>
        )}
      </div>

      <div className={classes.body}>{children}</div>
    </div>
  );
}
