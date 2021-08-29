import React from 'react';
import { GitHubLogoIcon } from '@modulz/radix-icons';
import { Button, ButtonProps, Group, useMantineTheme } from '@mantine/core';
import { GoogleIcon } from './GoogleIcon';
import { TwitterIcon } from './TwitterIcon';

export function GoogleButton(props: ButtonProps) {
  const theme = useMantineTheme();
  return (
    <Button
      leftIcon={<GoogleIcon />}
      variant="outline"
      color="gray"
      styles={{
        root: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
        },
        label: {
          textShadow: 'none',
        },
      }}
      {...props}
    />
  );
}

export function FacebookButton(props: ButtonProps) {
  return (
    <Button
      styles={{
        root: {
          backgroundColor: '#4267B2',
          color: '#fff',
        },

        label: {
          textShadow: '1px 1px 0 #385185',
        },
      }}
      {...props}
    />
  );
}

// Generic arguments are used to support custom component in TypeScript
export function TwitterButton<
  C extends React.ElementType = 'button',
  R extends HTMLElement = HTMLButtonElement
>(props: ButtonProps<C, R>) {
  return (
    <Button
      leftIcon={<TwitterIcon />}
      styles={{
        root: {
          backgroundColor: '#1B91DA',
          color: '#fff',
        },
        label: {
          textShadow: '1px 1px 0 #1a7fbd',
        },
      }}
      {...props}
    />
  );
}

export function GithubButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<GitHubLogoIcon />}
      styles={{
        root: {
          backgroundColor: '#000',
          color: '#fff',
        },
        label: {
          textShadow: 'none',
        },
      }}
      {...props}
    />
  );
}

export function SocialButtons() {
  return (
    <Group position="center" withGutter>
      <GoogleButton>Continue with Google</GoogleButton>
      <FacebookButton>Sign in with Facebook</FacebookButton>
      <GithubButton>View on GitHub</GithubButton>
      <TwitterButton<'a', HTMLAnchorElement>
        component="a"
        href="https://twitter.com/mantinedev"
        target="_blank"
      >
        Follow on Twitter
      </TwitterButton>
    </Group>
  );
}
