/* eslint-disable import/no-relative-packages */
import React from 'react';
import { IconChevronDown, IconExternalLink } from '@tabler/icons-react';
import { Code, Menu, UnstyledButton, Text, RemoveScroll, rem } from '@mantine/core';
import { useSpotlight } from '@mantine/spotlight';
import { HeaderControls } from '@mantine/ds';
import corePackageJson from '../../../../../package.json';
import { Logo } from '../../Logo/Logo';
import { useDirectionContext } from '../DirectionContext';
import useStyles from './HeaderDesktop.styles';

const versions = [
  { v: 'v5', name: '5.10.5', link: 'https://v5.mantine.dev/' },
  { v: 'v4', name: '4.2.12', link: 'https://v4.mantine.dev/' },
  { v: 'v3', name: '3.6.14', link: 'https://v3.mantine.dev/' },
  { v: 'v2', name: '2.5.1', link: 'https://v2.mantine.dev/' },
  { v: 'v1', name: '1.3.1', link: 'https://v1.mantine.dev/' },
];

export function HeaderDesktop() {
  const { classes, cx } = useStyles();
  const { dir, toggleDirection } = useDirectionContext();
  const spotlight = useSpotlight();

  const versionItems = versions.map((item) => (
    <Menu.Item
      key={item.name}
      component="a"
      href={item.link}
      target="_blank"
      rightSection={<IconExternalLink size={rem(14)} stroke={1.5} />}
    >
      <b>{item.v}</b>{' '}
      <Text span color="dimmed" fz="xs">
        ({item.name})
      </Text>
    </Menu.Item>
  ));

  return (
    <div className={cx(classes.header, RemoveScroll.classNames.fullWidth)}>
      <div className={classes.mainSection}>
        <div className={classes.logoWrapper}>
          <div className={classes.logo}>
            <Logo />
          </div>

          <Menu width={160} position="bottom-start" withArrow>
            <Menu.Target>
              <UnstyledButton mt={2}>
                <Code className={classes.version}>
                  v{corePackageJson.version}{' '}
                  <IconChevronDown size={rem(12)} className={classes.chevron} />
                </Code>
              </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>{versionItems}</Menu.Dropdown>
          </Menu>
        </div>
      </div>

      <HeaderControls
        pr="md"
        onSearch={spotlight.openSpotlight}
        githubLink="https://github.com/mantinedev/mantine"
        direction={dir}
        toggleDirection={toggleDirection}
      />
    </div>
  );
}
