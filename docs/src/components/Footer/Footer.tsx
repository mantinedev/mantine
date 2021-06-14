import React from 'react';
import { Container, Text, Group } from '@mantine/core';
import cx from 'clsx';
import { Logo } from '../Logo/Logo';
import { GitterButton } from '../GitterButton/GitterButton';
import { TwitterButton } from '../TwitterButton/TwitterButton';
import useStyles from './Footer.styles';

interface FooterProps {
  withNavbar?: boolean;
}

export function Footer({ withNavbar }: FooterProps) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.spacer} />
      <div className={cx(classes.wrapper, { [classes.withNavbar]: withNavbar })}>
        <Container size={1100}>
          <div className={classes.inner}>
            <div className={classes.logoSection}>
              <Logo />
              <Text className={classes.description} size="sm">
                Build fully functional accessible web applications with ease
              </Text>
            </div>

            <div>links</div>
          </div>

          <div className={classes.afterFooter}>
            <Group position="apart">
              <Text size="xs" className={classes.afterFooterNote}>
                Built by <a href="https://github.com/rtivital">Vitaly Rtishchev</a> and{' '}
                <a href="https://github.com/mantinedev/mantine/graphs/contributors">
                  these awesome people
                </a>
              </Text>
              <div style={{ display: 'flex' }}>
                <GitterButton />
                <TwitterButton style={{ marginLeft: 10 }} />
              </div>
            </Group>
          </div>
        </Container>
      </div>
    </>
  );
}
