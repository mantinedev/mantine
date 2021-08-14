import React from 'react';
import { Button, DEFAULT_THEME } from '@mantine/core';
import { MarkGithubIcon } from '@primer/octicons-react';
import { TwitterIcon } from './TwitterIcon';
import { DiscordIcon } from './DiscordIcon';
import { MailIcon } from './MailIcon';

interface SocialButtonProps extends React.ComponentProps<'button'> {
  service: 'github' | 'twitter' | 'discord' | 'email' | 'tg';
}

const data = {
  email: {
    icon: MailIcon,
    label: 'Subscribe to email newsletter',
    link: 'https://buttondown.email/mantine',
    color: DEFAULT_THEME.colors.blue[6],
  },

  github: {
    icon: MarkGithubIcon,
    label: 'Source code',
    link: 'https://github.com/mantinedev/mantine',
    color: '#000',
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

  tg: {
    icon: null,
    label: 'Contact on Telegram',
    link: 'https://t.me/rtivital',
    color: '#40B3E0',
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
        textShadow: 'unset',
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
