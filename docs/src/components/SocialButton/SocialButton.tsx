import React from 'react';
import { Button, DEFAULT_THEME } from '@mantine/core';
import { TwitterIcon } from './TwitterIcon';
import { DiscordIcon } from './DiscordIcon';
import { MailIcon } from './MailIcon';

interface SocialButtonProps extends Omit<React.ComponentPropsWithoutRef<'a'>, 'type'> {
  service: 'twitter' | 'discord' | 'email';
}

const data = {
  email: {
    icon: MailIcon,
    label: 'Subscribe to email newsletter',
    link: 'https://buttondown.email/mantine',
    color: DEFAULT_THEME.colors.blue[6],
  },

  discord: {
    icon: DiscordIcon,
    label: 'Join Discord community',
    link: 'https://discord.gg/eUZpPbpxb4',
    color: '#7289da',
  },

  twitter: {
    icon: TwitterIcon,
    label: 'Follow Mantine on Twitter',
    link: 'https://twitter.com/mantinedev',
    color: '#00acee',
  },
};

export function SocialButton({ service, style, ...others }: SocialButtonProps) {
  const serviceData = data[service];

  return (
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href={serviceData.link}
      leftIcon={serviceData.icon && <serviceData.icon style={{ width: 14, marginRight: 5 }} />}
      style={{
        ...style,
        backgroundColor: serviceData.color,
        border: 0,
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
      }}
      {...others}
    >
      {serviceData.label}
    </Button>
  );
}
