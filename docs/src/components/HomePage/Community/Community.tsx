import React from 'react';
import { Container, Group, Text, Title, useMantineTheme } from '@mantine/core';
import { SocialButton } from '../../SocialButton/SocialButton';
import { Blobs } from './Blobs';
import useStyles from './Community.styles';

export function Community() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.wrapper}>
      <Container size={1100}>
        <div className={classes.inner}>
          <Blobs color={theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.white} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Title order={2} className={classes.title}>
              Join the community
            </Title>

            <Text style={{ maxWidth: 600 }} className={classes.description}>
              Mantine has a very friendly community, we are always open to new ideas and feedback.
              Join us on Discord or GitHub Discussions to get any kind of help or on Twitter to get
              notified about releases.
            </Text>

            <Group mt={30}>
              <SocialButton className={classes.control} service="github" />
              <SocialButton className={classes.control} service="discord" />
              <SocialButton className={classes.control} service="twitter" />
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
}
