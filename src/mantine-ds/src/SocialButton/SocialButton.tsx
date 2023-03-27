import React from 'react';
import { DefaultProps, Button, rem } from '@mantine/core';
import { packSx } from '@mantine/utils';
import { meta } from '../meta';
import { DiscordIcon, TwitterIcon } from '../Icons';

export interface SocialButtonProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'a'>, 'type'> {
  icon?: React.ReactNode;
}

export function SocialButton({ icon, ...others }: SocialButtonProps) {
  return (
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      leftIcon={icon}
      styles={(theme) => ({
        root: {
          border: 0,
          height: rem(42),
          paddingLeft: rem(20),
          paddingRight: rem(20),
        },
        leftIcon: {
          marginRight: theme.spacing.md,
        },
      })}
      {...others}
    />
  );
}

export function DiscordButton({ sx, ...others }: SocialButtonProps) {
  return (
    <SocialButton
      sx={[
        (theme) => ({
          backgroundColor: meta.discordColor,
          ...theme.fn.hover({ backgroundColor: theme.fn.lighten(meta.discordColor, 0.1) }),
        }),
        ...packSx(sx),
      ]}
      icon={<DiscordIcon size={16} />}
      href={meta.discordLink}
      {...others}
    >
      Join Discord community
    </SocialButton>
  );
}

export function TwitterButton({ sx, ...others }: SocialButtonProps) {
  return (
    <SocialButton
      sx={[
        (theme) => ({
          backgroundColor: meta.twitterColor,
          ...theme.fn.hover({ backgroundColor: theme.fn.lighten(meta.twitterColor, 0.1) }),
        }),
        ...packSx(sx),
      ]}
      icon={<TwitterIcon size={16} />}
      href={meta.twitterLink}
      {...others}
    >
      Follow Mantine on Twitter
    </SocialButton>
  );
}
