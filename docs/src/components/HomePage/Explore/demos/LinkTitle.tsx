import React from 'react';
import { Link } from 'gatsby';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { Group, Anchor, Title } from '@mantine/core';
import { Description } from './Description';

interface LinkTitleProps {
  link: string;
  title: string;
  label?: string;
  description?: string;
}

export function LinkTitle({ link, title, label = 'Get started', description }: LinkTitleProps) {
  return (
    <>
      <Group position="apart" spacing={0}>
        <Title order={3}>{title}</Title>
        <Anchor component={Link} to={link}>
          {label} <ArrowRightIcon style={{ width: 12, height: 12 }} />
        </Anchor>
      </Group>
      {description && (
        <Description style={{ marginBottom: 15, marginTop: 10 }}>{description}</Description>
      )}
    </>
  );
}
