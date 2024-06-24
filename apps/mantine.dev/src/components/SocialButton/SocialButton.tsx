import cx from 'clsx';
import { BoxProps, Button, ElementProps } from '@mantine/core';
import { DiscordIcon, XIcon } from '@mantinex/dev-icons';
import { meta } from '@mantinex/mantine-meta';
import classes from './SocialButton.module.css';

export interface SocialButtonProps extends BoxProps, ElementProps<'a', 'type'> {
  icon?: React.ReactNode;
}

export function SocialButton({ icon, ...others }: SocialButtonProps) {
  return (
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      leftSection={icon}
      radius="md"
      classNames={{
        root: classes.socialButton,
        section: classes.socialButtonSection,
      }}
      {...others}
    />
  );
}

export function DiscordButton({ className, ...others }: SocialButtonProps) {
  return (
    <SocialButton
      className={cx(classes.discordButton, className)}
      icon={<DiscordIcon size={16} />}
      href={meta.discordLink}
      {...others}
    >
      Join Discord community
    </SocialButton>
  );
}

export function TwitterButton({ className, ...others }: SocialButtonProps) {
  return (
    <SocialButton
      className={cx(classes.xButton, className)}
      icon={<XIcon size={16} />}
      href={meta.twitterLink}
      {...others}
    >
      Follow Mantine on X
    </SocialButton>
  );
}
