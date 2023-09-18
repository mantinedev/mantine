import React from 'react';
import cx from 'clsx';
import { Container, Text, Group, Box, RemoveScroll } from '@mantine/core';
import { TwitterButton, DiscordButton } from '@mantine/ds';
import { Logo } from '../Logo/Logo';
import { LinksGroup } from './LinksGroup/LinksGroup';
import { FOOTER_LINKS_DATA } from './data';
import classes from './Footer.module.css';

interface FooterProps {
  withNavbar?: boolean;
}

export function Footer({ withNavbar }: FooterProps) {
  const groups = FOOTER_LINKS_DATA.map((group) => (
    <LinksGroup data={group.data} title={group.title} key={group.title} />
  ));

  return (
    <div className={classes.root}>
      <div className={classes.spacer} />
      <Box
        mod={{ 'with-navbar': withNavbar }}
        className={cx(classes.wrapper, RemoveScroll.classNames.fullWidth)}
      >
        <Container size={1100}>
          <div className={classes.inner}>
            <div className={classes.logoSection}>
              <Logo />
              <Text className={classes.description} fz="sm">
                Build fully functional accessible web applications faster than ever
              </Text>
            </div>

            <div className={classes.groups}>{groups}</div>
          </div>

          <div className={classes.afterFooter}>
            <Group justify="space-between" wrap="wrap">
              <Text fz="xs" className={classes.afterFooterNote}>
                Built by <a href="https://github.com/rtivital">Vitaly Rtishchev</a> and{' '}
                <a href="https://github.com/mantinedev/mantine/graphs/contributors">
                  these awesome people
                </a>
              </Text>
              <div className={classes.social}>
                <DiscordButton className={classes.socialButton} />
                <TwitterButton className={classes.socialButton} />
              </div>
            </Group>
          </div>
        </Container>
      </Box>
    </div>
  );
}
