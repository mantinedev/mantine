import React from 'react';
import { Button, ButtonProps, Group } from '@mantine/core';
import { MarkGithubIcon } from '@primer/octicons-react';
import { GoogleIcon } from './GoogleIcon';
import { DiscordIcon } from './DiscordIcon';
import { FacebookIcon } from './FacebookIcon';
import { TwitterIcon } from './TwitterIcon';

export function GoogleButton(props: ButtonProps<'button'>) {
  return <Button leftIcon={<GoogleIcon />} variant="default" color="gray" {...props} />;
}

export function FacebookButton(props: ButtonProps<'button'>) {
  return (
    <Button
      leftIcon={<FacebookIcon />}
      sx={(theme) => ({
        backgroundColor: '#4267B2',
        color: '#fff',
        '&:hover': {
          backgroundColor: theme.fn.darken('#4267B2', 0.1),
        },
      })}
      {...props}
    />
  );
}

export function DiscordButton(props: ButtonProps<'button'>) {
  return (
    <Button
      leftIcon={<DiscordIcon />}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? '#5865F2' : '#7289da',
        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.lighten('#5865F2', 0.05)
              : theme.fn.darken('#7289da', 0.05),
        },
      })}
      {...props}
    />
  );
}

// Twitter button as anchor
export function TwitterButton(props: ButtonProps<'a'>) {
  return <Button component="a" leftIcon={<TwitterIcon />} variant="default" {...props} />;
}

export function GithubButton(props: ButtonProps<'button'>) {
  return (
    <Button
      {...props}
      leftIcon={<MarkGithubIcon />}
      sx={(theme) => ({
        backgroundColor: theme.colors.dark[theme.colorScheme === 'dark' ? 9 : 6],
        color: '#fff',
        '&:hover': {
          backgroundColor: theme.colors.dark[theme.colorScheme === 'dark' ? 9 : 6],
        },
      })}
    />
  );
}

export function SocialButtons() {
  return (
    <Group position="center" sx={{ padding: 15 }}>
      <GoogleButton>Continue with Google</GoogleButton>
      <TwitterButton href="https://twitter.com/mantinedev" target="_blank">
        Follow on Twitter
      </TwitterButton>
      <FacebookButton>Sign in with Facebook</FacebookButton>
      <GithubButton>Login with GitHub</GithubButton>
      <DiscordButton>Join Discord community</DiscordButton>
    </Group>
  );
}
