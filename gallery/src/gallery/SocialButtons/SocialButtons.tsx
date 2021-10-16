import React from 'react';
import { GitHubLogoIcon } from '@modulz/radix-icons';
import { Button, ButtonProps, Group } from '@mantine/core';
import { GoogleIcon } from './GoogleIcon';
import { TwitterIcon } from './TwitterIcon';

export function GoogleButton(props: ButtonProps<'button'>) {
  return <Button leftIcon={<GoogleIcon />} variant="default" color="gray" {...props} />;
}

export function FacebookButton({ style, ...props }: ButtonProps<'button'>) {
  return <Button style={{ ...style, backgroundColor: '#4267B2', color: '#fff' }} {...props} />;
}

// Twitter button as anchor
export function TwitterButton({ component, ...others }: ButtonProps<'a'>) {
  return <Button component="a" leftIcon={<TwitterIcon />} variant="default" {...others} />;
}

export function GithubButton({ style, ...props }: ButtonProps<'button'>) {
  return (
    <Button
      {...props}
      leftIcon={<GitHubLogoIcon />}
      style={{ ...style, backgroundColor: '#000', color: '#fff' }}
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
