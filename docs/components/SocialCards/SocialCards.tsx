import React from 'react';
import cx from 'clsx';
import { DiscordIcon, GithubIcon, TwitterIcon, meta } from '@mantine/ds';
import classes from './SocialCards.module.css';

interface CardBaseProps extends React.ComponentPropsWithoutRef<'a'> {
  icon: 'discord' | 'twitter' | 'github';
  title: string;
  description: string;
  href: string;
}

const icons: Record<CardBaseProps['icon'], React.ReactNode> = {
  discord: <DiscordIcon size={30} className={classes.icon} />,
  twitter: <TwitterIcon size={30} className={classes.icon} />,
  github: <GithubIcon size={30} className={classes.icon} />,
};

export function CardBase({ icon, title, description, className, ...others }: CardBaseProps) {
  return (
    <a className={cx(classes.card, className)} target="_blank" rel="noreferrer" {...others}>
      {icons[icon]}
      <div className={classes.body}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
      </div>
    </a>
  );
}

export function DiscordCard() {
  return (
    <CardBase
      icon="discord"
      className={classes.discord}
      href={meta.discordLink}
      title="Join Discord community"
      description="Ask questions, share feedback, get updates, learn about upcoming features and more"
    />
  );
}

export function GitHubCard() {
  return (
    <CardBase
      icon="github"
      className={classes.github}
      href={meta.gitHubLinks.discussions}
      title="Start a discussion"
      description="Request new features, ask questions and provide feedback with GitHub discussions"
    />
  );
}

export function TwitterCard() {
  return (
    <CardBase
      icon="twitter"
      className={classes.twitter}
      href={meta.twitterLink}
      title="Follow on Twitter"
      description="Get notified about new minor and major releases"
    />
  );
}

interface SocialCardsProps {
  discord?: boolean;
  github?: boolean;
  twitter?: boolean;
}

export function SocialCards({ discord = true, github = true, twitter = true }: SocialCardsProps) {
  return (
    <div className={classes.cards}>
      {discord && <DiscordCard />}
      {github && <GitHubCard />}
      {twitter && <TwitterCard />}
    </div>
  );
}
