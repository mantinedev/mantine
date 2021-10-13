import React from 'react';
import { GitHubLogoIcon } from '@modulz/radix-icons';
import { Button, ButtonProps, Group, useMantineTheme } from '@mantine/core';
import { GoogleIcon } from './GoogleIcon';
import { TwitterIcon } from './TwitterIcon';

export function GoogleButton({ style, ...props }: ButtonProps<'button'>) {
  const theme = useMantineTheme();
  return (
    <Button
      leftIcon={<GoogleIcon />}
      variant="outline"
      color="gray"
      style={{
        ...style,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
      }}
      {...props}
    />
  );
}

export function FacebookButton({ style, ...props }: ButtonProps<'button'>) {
  return <Button style={{ ...style, backgroundColor: '#4267B2', color: '#fff' }} {...props} />;
}

// Twitter button as anchor
export function TwitterButton({ style, component, ...others }: ButtonProps<'a'>) {
  const theme = useMantineTheme();
  return (
    <Button
      component="a"
      leftIcon={<TwitterIcon />}
      variant="outline"
      style={{
        ...style,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      }}
      {...others}
    />
  );
}

export function GithubButton({ style, ...props }: ButtonProps<'button'>) {
  return (
    <Button
      {...props}
      leftIcon={<GitHubLogoIcon />}
      style={{
        ...style,
        backgroundColor: '#000',
        color: '#fff',
      }}
    />
  );
}

export function SocialButtons() {
  return (
    <Group position="center" withGutter>
      <GoogleButton>Continue with Google</GoogleButton>
      <TwitterButton href="https://twitter.com/mantinedev" target="_blank">
        Follow on Twitter
      </TwitterButton>
      <FacebookButton>Sign in with Facebook</FacebookButton>
      <GithubButton>View on GitHub</GithubButton>
    </Group>
  );
}
