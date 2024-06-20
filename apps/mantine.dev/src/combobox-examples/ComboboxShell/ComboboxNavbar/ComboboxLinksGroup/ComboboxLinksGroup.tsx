import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconChevronDown } from '@tabler/icons-react';
import { Box, Highlight, Text, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { ComboboxExamplesGroup } from '../get-grouped-data';
import classes from './ComboboxLinksGroup.module.css';

interface ComboboxLinksGroupProps {
  data: ComboboxExamplesGroup;
  searchQuery: string | string[];
  onClose: () => void;
}

export function ComboboxLinksGroup({ data, searchQuery, onClose }: ComboboxLinksGroupProps) {
  const router = useRouter();
  const [opened, { toggle, open }] = useDisclosure(true);

  useEffect(open, [searchQuery]);

  if (data.items.length === 0) {
    return null;
  }

  const items = data.items.map((item) => (
    <Link
      href={`/combobox?e=${item.id}`}
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
        <IconChevronDown className={classes.chevron} data-collapsed={!opened || undefined} />
        <Text className={classes.title}>{data.group.replace('-', ' ')}</Text>
      </UnstyledButton>
      {opened && items}
    </Box>
  );
}
