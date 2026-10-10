import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CaretDownIcon } from '@phosphor-icons/react';
import { Box, Highlight, Text, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { ExampleItem, ExamplesGroup } from '../../types';
import classes from './ExamplesLinksGroup.module.css';

interface ExamplesLinksGroupProps {
  group: ExamplesGroup;
  items: ExampleItem[];
  basePath: string;
  searchQuery: string | string[];
  onClose: () => void;
}

export function ExamplesLinksGroup({
  group,
  items,
  basePath,
  searchQuery,
  onClose,
}: ExamplesLinksGroupProps) {
  const router = useRouter();
  const [opened, { toggle, open }] = useDisclosure(true);

  useEffect(open, [searchQuery]);

  if (items.length === 0) {
    return null;
  }

  const links = items.map((item) => (
    <Link
      href={`${basePath}?e=${item.id}`}
      key={item.id}
      className={classes.link}
      data-navbar-link-active={router.query.e === item.id || undefined}
      onClick={onClose}
    >
      <Highlight className={classes.linkTitle} highlight={searchQuery}>
        {item.name}
      </Highlight>
      <Highlight className={classes.linkDescription} highlight={searchQuery}>
        {item.description}
      </Highlight>
    </Link>
  ));

  return (
    <Box className={classes.group} mod={{ opened }}>
      <UnstyledButton className={classes.header} onClick={toggle}>
        <CaretDownIcon className={classes.chevron} data-collapsed={!opened || undefined} />
        <Text className={classes.title}>{group.label}</Text>
      </UnstyledButton>
      {opened && links}
    </Box>
  );
}
