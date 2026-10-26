'use client';

import { useState } from 'react';
import { IconMoon, IconPlus, IconSun, IconTable } from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Button,
  NavLink,
  Popover,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { BrandMark } from './BrandIcons';
import { saved, sources } from './data';
import classes from './Sidebar.module.css';

interface SidebarProps {
  opened: boolean;
  onNewQuestion: () => void;
  onOpenSaved: (title: string) => void;
  onAskAboutTable: (table: string) => void;
}

export function Sidebar({ opened, onNewQuestion, onOpenSaved, onAskAboutTable }: SidebarProps) {
  const { toggleColorScheme } = useMantineColorScheme();
  const [active, setActive] = useState(saved[0].title);
  const [openSource, setOpenSource] = useState<string | null>(null);

  return (
    <aside
      className={classes.root}
      data-opened={opened || undefined}
      aria-label="Analyses and data"
    >
      <div className={classes.brand}>
        <BrandMark />
        <div>
          <div className={classes.brandName}>Quarry</div>
          <div className={classes.workspace}>Hopwell workspace</div>
        </div>
      </div>

      <div className={classes.newQuestion}>
        <Button fullWidth leftSection={<IconPlus />} onClick={onNewQuestion}>
          New question
        </Button>
      </div>

      <div className={classes.scroll}>
        <div className={classes.label}>
          Saved analyses <span>{saved.length}</span>
        </div>
        <div className={classes.saved}>
          {saved.map((item) => (
            <NavLink
              key={item.title}
              component="button"
              label={item.title}
              description={item.date}
              active={item.title === active}
              aria-current={item.title === active || undefined}
              onClick={() => {
                setActive(item.title);
                if (item.title !== saved[0].title) {
                  onOpenSaved(item.title);
                }
              }}
            />
          ))}
        </div>

        <div className={classes.label}>
          Data sources <span>{sources.length} tables</span>
        </div>
        <ul className={classes.sources}>
          {sources.map((source) => (
            <li key={source.name}>
              <Popover
                opened={openSource === source.name}
                onChange={(value) => !value && setOpenSource(null)}
                position="right-start"
                offset={{ mainAxis: 8, crossAxis: -8 }}
                width={300}
                middlewares={{ flip: true, shift: { padding: 8 } }}
              >
                <Popover.Target>
                  <UnstyledButton
                    className={classes.source}
                    aria-haspopup="dialog"
                    aria-expanded={openSource === source.name}
                    onClick={() =>
                      setOpenSource((value) => (value === source.name ? null : source.name))
                    }
                  >
                    <IconTable size={16} stroke={1.8} />
                    <span className={classes.sourceName}>{source.name}</span>
                    <span className={classes.sourceRows}>{source.rows}</span>
                  </UnstyledButton>
                </Popover.Target>
                <Popover.Dropdown p={0} className={classes.schema} aria-label="Table columns">
                  <div className={classes.schemaHead}>
                    <b>{source.name}</b>
                    <span>
                      {source.rows} rows, {source.columns.length} columns
                    </span>
                  </div>
                  <ul className={classes.columns}>
                    {source.columns.map((column) => (
                      <li key={column.name}>
                        <code>{column.name}</code>
                        {column.key && <span className={classes.key}>{column.key}</span>}
                        <span className={classes.type}>{column.type}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={classes.schemaFoot}>
                    <Button
                      size="xs"
                      variant="default"
                      onClick={() => {
                        setOpenSource(null);
                        onAskAboutTable(source.name);
                      }}
                    >
                      Ask about this table
                    </Button>
                    <Button size="xs" variant="default" onClick={() => setOpenSource(null)}>
                      Close
                    </Button>
                  </div>
                </Popover.Dropdown>
              </Popover>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.footer}>
        <Avatar>NO</Avatar>
        <span className={classes.who}>
          <b>Nadia Okoro</b>
          <span>Growth team</span>
        </span>
        <ActionIcon variant="subtle" onClick={toggleColorScheme} aria-label="Switch color scheme">
          <IconMoon size={18} stroke={1.8} className={classes.moon} />
          <IconSun size={18} stroke={1.8} className={classes.sun} />
        </ActionIcon>
      </div>
    </aside>
  );
}
