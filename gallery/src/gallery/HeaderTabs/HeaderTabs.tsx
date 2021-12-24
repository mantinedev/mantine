import React, { useState } from 'react';
import {
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Divider,
  Tabs,
} from '@mantine/core';
import {
  Logout,
  Heart,
  Star,
  Message,
  Settings,
  PlayerPause,
  Trash,
  SwitchHorizontal,
} from 'tabler-icons-react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { MantineLogo } from '../../shared/MantineLogo';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
    }`,
    marginBottom: theme.spacing.xl * 2,
  },

  mainSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.sm,
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tabControl: {
    fontWeight: 500,
    height: 38,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },
  },

  tabControlActive: {
    borderColor: `${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    } !important`,
  },
}));

interface HeaderTabsProps {
  user: { name: string; image: string };
  tabs: string[];
}

export function HeaderTabs({ user, tabs }: HeaderTabsProps) {
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const items = tabs.map((tab) => <Tabs.Tab label={tab} key={tab} />);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <MantineLogo />

        <Menu
          size={260}
          placement="end"
          transition="pop-top-right"
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
          control={
            <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
              <Group spacing={7}>
                <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                  {user.name}
                </Text>
                <ChevronDownIcon width={12} height={12} />
              </Group>
            </UnstyledButton>
          }
        >
          <Menu.Item icon={<Heart size={14} color={theme.colors.red[6]} />}>Liked posts</Menu.Item>
          <Menu.Item icon={<Star size={14} color={theme.colors.yellow[6]} />}>
            Saved posts
          </Menu.Item>
          <Menu.Item icon={<Message size={14} color={theme.colors.blue[6]} />}>
            Your comments
          </Menu.Item>

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item icon={<Settings size={14} />}>Account settings</Menu.Item>
          <Menu.Item icon={<SwitchHorizontal size={14} />}>Change account</Menu.Item>
          <Menu.Item icon={<Logout size={14} />}>Logout</Menu.Item>

          <Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item icon={<PlayerPause size={14} />}>Pause subscription</Menu.Item>
          <Menu.Item color="red" icon={<Trash size={14} />}>
            Delete account
          </Menu.Item>
        </Menu>
      </Container>
      <Container>
        <Tabs
          variant="outline"
          classNames={{
            tabsListWrapper: classes.tabsList,
            tabControl: classes.tabControl,
            tabActive: classes.tabControlActive,
          }}
        >
          {items}
        </Tabs>
      </Container>
    </div>
  );
}
