import { useRef } from 'react';
import cx from 'clsx';
import { Box, Container, Group, RemoveScroll, Text } from '@mantine/core';
import { useWindowEvent } from '@mantine/hooks';
import { Logo } from '../Logo/Logo';
import { DiscordButton, TwitterButton } from '../SocialButton';
import { FOOTER_LINKS_DATA } from './data';
import classes from './DocsFooter.module.css';
import { LinksGroup } from './LinksGroup/LinksGroup';

interface FooterProps {
  withNavbar?: boolean;
}

function getRemainingScrollDistance() {
  const scrollTop = document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const remainingScrollDistance = documentHeight - (scrollTop + viewportHeight);
  return remainingScrollDistance;
}

export function DocsFooter({ withNavbar }: FooterProps) {
  const ref = useRef<HTMLElement>(null);
  const groups = FOOTER_LINKS_DATA.map((group) => (
    <LinksGroup data={group.data} title={group.title} key={group.title} />
  ));

  useWindowEvent('scroll', () => {
    const diff = getRemainingScrollDistance() - 30;
    if (ref.current) {
      const translate = diff > 0 ? diff / 2 : 0;
      ref.current.style.transform = `translateY(${translate}px)`;
    }
  });

  return (
    <div className={classes.root}>
      <div className={classes.spacer} />
      <Box
        component="footer"
        mod={{ 'with-navbar': withNavbar }}
        className={cx(classes.wrapper, RemoveScroll.classNames.fullWidth)}
        ref={ref}
      >
        <Container size={withNavbar ? 1170 : 1440}>
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
