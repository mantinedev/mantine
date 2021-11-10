import React from 'react';
import { GitHubLogoIcon } from '@modulz/radix-icons';
import { Button, ButtonProps, Group } from '@mantine/core';
import { GoogleIcon } from './GoogleIcon';
import { TwitterIcon } from './TwitterIcon';

export function GoogleButton(props: ButtonProps<'button'>) {
  return <Button leftIcon={<GoogleIcon />} variant="default" color="gray" {...props} />;
}

export function FacebookButton(props: ButtonProps<'button'>) {
  return <Button sx={{ backgroundColor: '#4267B2', color: '#fff' }} {...props} />;
}

// Twitter button as anchor
export function TwitterButton(props: ButtonProps<'a'>) {
  return <Button component="a" leftIcon={<TwitterIcon />} variant="default" {...props} />;
}

export function GithubButton(props: ButtonProps<'button'>) {
  return (
    <Button
      {...props}
      leftIcon={<GitHubLogoIcon />}
      sx={{ backgroundColor: '#000', color: '#fff' }}
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
      <GithubButton>View on GitHub</GithubButton>
    </Group>
  );
}
