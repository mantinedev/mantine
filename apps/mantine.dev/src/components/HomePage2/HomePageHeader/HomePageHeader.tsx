import {
  IconBrandDiscord,
  IconChevronDown,
  IconExternalLink,
  IconSearch,
} from '@tabler/icons-react';
import { Divider, Group, Menu, UnstyledButton } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import { MantineLogo } from '@mantinex/mantine-logo';
import { majorVersions, meta } from '@mantinex/mantine-meta';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import classes from './HomePageHeader.module.css';

export function HomePageHeader() {
  const versionItems = majorVersions.map((item) => (
    <Menu.Item
      component="a"
      key={item.name}
      href={item.link}
      target="_blank"
      rightSection={<IconExternalLink className={classes.versionExternalIcon} stroke={1.5} />}
      className={classes.versionMenuItem}
    >
      <span className={classes.versionItem}>
        {item.v} <span className={classes.exactVersion}>({item.name})</span>
      </span>
    </Menu.Item>
  ));

  return (
    <header className={classes.header}>
      <HomePageContainer>
        <nav className={classes.inner}>
          <MantineLogo size={40} />

          <Group component="nav" gap={0} className={classes.nav}>
            <Menu
              width={180}
              withinPortal={false}
              radius="md"
              transitionProps={{ transition: 'pop' }}
              position="bottom-start"
            >
              <Menu.Target>
                <UnstyledButton className={classes.version}>
                  <span>v7.11.1</span>
                  <IconChevronDown className={classes.versionChevron} />
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown className={classes.versionsDropdown}>{versionItems}</Menu.Dropdown>
            </Menu>

            <Divider orientation="vertical" className={classes.divider} />

            <a href="https://help.mantine.dev" className={classes.link}>
              Mantine UI
            </a>

            <a href="https://help.mantine.dev" className={classes.link}>
              Help center
            </a>

            <a href="https://mantine.dev/getting-started" className={classes.link}>
              Releases
            </a>

            <Divider orientation="vertical" className={classes.divider} />

            <Group gap={5}>
              <UnstyledButton className={classes.control}>
                <IconSearch size={22} />
              </UnstyledButton>
              <UnstyledButton
                className={classes.control}
                component="a"
                href={meta.gitHubLinks.mantine}
              >
                <GithubIcon size={20} />
              </UnstyledButton>
              <UnstyledButton
                className={classes.control}
                component="a"
                href={meta.discordLink}
                data-discord
              >
                <IconBrandDiscord size={22} />
              </UnstyledButton>
            </Group>
          </Group>
        </nav>
      </HomePageContainer>
    </header>
  );
}
