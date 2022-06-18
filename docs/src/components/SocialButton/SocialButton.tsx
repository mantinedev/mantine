import React from 'react';
import { Button, useMantineTheme } from '@mantine/core';
import { meta } from '@mantine/ds';
import { TwitterIcon } from './TwitterIcon';
import { DiscordIcon } from './DiscordIcon';

const baseStyles = {
  border: 0,
  height: 42,
  paddingLeft: 20,
  paddingRight: 20,
};

type SocialButtonProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'type'>;

function DiscordButton({ style, ...others }: SocialButtonProps) {
  return (
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href={meta.discordLink}
      leftIcon={<DiscordIcon style={{ width: 14, marginRight: 5 }} />}
      style={{
        ...style,
        ...baseStyles,
        backgroundColor: '#5865f2',
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
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href={meta.twitterLink}
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

export function SocialButton({
  service,
  ...others
}: SocialButtonProps & { service: 'twitter' | 'discord' }) {
  if (service === 'discord') {
    return <DiscordButton {...others} />;
  }

  if (service === 'twitter') {
    return <TwitterButton {...others} />;
  }

  return null;
}
