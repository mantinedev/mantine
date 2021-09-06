import React from 'react';
import { Button, useMantineTheme } from '@mantine/core';
import { TwitterIcon } from './TwitterIcon';
import { DiscordIcon } from './DiscordIcon';
import { MailIcon } from './MailIcon';

const baseStyles = {
  border: 0,
  height: 42,
  paddingLeft: 20,
  paddingRight: 20,
};

type SocialButtonProps = Omit<React.ComponentProps<'a'>, 'type'>;

function DiscordButton({ style, ...others }: SocialButtonProps) {
  const theme = useMantineTheme();
  return (
    <Button<'a', HTMLAnchorElement>
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href="https://discord.gg/eUZpPbpxb4"
      leftIcon={<DiscordIcon style={{ width: 14, marginRight: 5 }} />}
      style={{
        ...style,
        ...baseStyles,
        backgroundColor: theme.colorScheme === 'dark' ? '#5865f2' : '#7289da',
      }}
      {...others}
    >
      Join Discord community
    </Button>
  );
}

function TwitterButton({ style, ...others }: SocialButtonProps) {
  const theme = useMantineTheme();
  return (
    <Button<'a', HTMLAnchorElement>
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/mantinedev"
      leftIcon={<TwitterIcon style={{ width: 14, marginRight: 5 }} />}
      style={{
        ...style,
        ...baseStyles,
        backgroundColor: theme.colorScheme === 'dark' ? '#1C8CD8' : '#00acee',
      }}
      {...others}
    >
      Follow Mantine on Twitter
    </Button>
  );
}

function EmailButton({ style, ...others }: SocialButtonProps) {
  return (
    <Button<'a', HTMLAnchorElement>
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href="https://buttondown.email/mantine"
      color="teal"
      leftIcon={<MailIcon style={{ width: 14, marginRight: 5 }} />}
      style={{ ...style, ...baseStyles }}
      {...others}
    >
      Subscribe to email newsletter
    </Button>
  );
}

export function SocialButton({
  service,
  style,
  ...others
}: SocialButtonProps & { service: 'twitter' | 'discord' | 'email' }) {
  if (service === 'discord') {
    return <DiscordButton style={style} {...others} />;
  }

  if (service === 'twitter') {
    return <TwitterButton style={style} {...others} />;
  }

  return <EmailButton style={style} {...others} />;
}
