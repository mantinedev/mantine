import React, { useState, useEffect, useRef } from 'react';
import { createStyles, Table, ScrollArea } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

interface TableScrollAreaProps {
  data: { name: string; email: string; company: string }[];
}

export function TableScrollArea({ data }: TableScrollAreaProps) {
  const { classes, cx } = useStyles();
  const viewportRef = useRef<HTMLDivElement>();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (event: { target: HTMLDivElement }) =>
    setScrolled(event.target.scrollTop !== 0);

  useEffect(() => {
    viewportRef.current?.addEventListener('scroll', handleScroll as any);
    return () => viewportRef.current?.removeEventListener('scroll', handleScroll as any);
  }, []);

  const rows = data.map((row) => (
    <tr key={row.name}>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.company}</td>
    </tr>
  ));

  return (
    <ScrollArea sx={{ height: 300 }} viewportRef={viewportRef}>
      <Table sx={{ minWidth: 700 }}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
