import React from 'react';
import { Container, Text, Group, Button } from '@mantine/core';
import cx from 'clsx';
import { Logo } from '../Logo/Logo';
import { SocialButton } from '../SocialButton/SocialButton';
import { LinksGroup } from './LinksGroup/LinksGroup';
import { FOOTER_LINKS_DATA } from './data';
import useStyles from './Footer.styles';

interface FooterProps {
  withNavbar?: boolean;
}

export function Footer({ withNavbar }: FooterProps) {
  const classes = useStyles();
  const groups = FOOTER_LINKS_DATA.map((group) => (
    <LinksGroup data={group.data} title={group.title} key={group.title} />
  ));

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

            <div className={classes.groups}>
              {groups}

              <div className={classes.feedback}>
                <Text size="lg" weight={500} style={{ marginBottom: 12 }}>
                  Feedback
                </Text>
                <Text className={classes.feedbackDescription} size="sm">
                  Your feedback is most valuable contribution to the project, please share how you
                  use Mantine, what features are missing and what is done good
                </Text>

                <Button
                  component="a"
                  href="https://github.com/mantinedev/mantine/discussions/new"
                  variant="outline"
                  color="gray"
                  size="sm"
                >
                  Leave feedback
                </Button>
              </div>
            </div>
          </div>

          <div className={classes.afterFooter}>
            <Group position="apart">
              <Text size="xs" className={classes.afterFooterNote}>
                Built by <a href="https://github.com/rtivital">Vitaly Rtishchev</a> and{' '}
                <a href="https://github.com/mantinedev/mantine/graphs/contributors">
                  these awesome people
                </a>
              </Text>
              <div className={classes.social}>
                <SocialButton service="discord" className={classes.socialButton} />
                <SocialButton service="twitter" className={classes.socialButton} />
              </div>
            </Group>
          </div>
        </Container>
      </div>
    </>
  );
}
