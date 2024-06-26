import { IconArrowUpRight } from '@tabler/icons-react';
import cx from 'clsx';
import { SimpleGrid, SimpleGridProps } from '@mantine/core';
import { DiscordIcon, GithubIcon, XIcon } from '@mantinex/dev-icons';
import { MantineLogo } from '@mantinex/mantine-logo';
import { meta } from '@mantinex/mantine-meta';
import classes from './SocialCards.module.css';

interface CardBaseProps extends React.ComponentPropsWithoutRef<'a'> {
  icon: 'discord' | 'twitter' | 'github' | 'mantine';
  title: string;
  description: string;
  href: string;
}

const icons: Record<CardBaseProps['icon'], React.ReactNode> = {
  discord: <DiscordIcon size={30} className={classes.icon} />,
  twitter: <XIcon size={30} className={classes.icon} />,
  github: <GithubIcon size={30} className={classes.icon} />,
  mantine: (
    <div className={classes.icon}>
      <MantineLogo size={50} type="mark" />
    </div>
  ),
};

export function CardBase({ icon, title, description, className, ...others }: CardBaseProps) {
  return (
    <a className={cx(classes.card, className)} target="_blank" rel="noreferrer" {...others}>
      {icons[icon]}
      <IconArrowUpRight size={20} className={classes.arrow} />
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
      title="Chat on Discord"
      description="Join a community of 10,000+ developers to ask questions, share feedback and explore upcoming features"
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

export function HelpCenterCard() {
  return (
    <CardBase
      icon="mantine"
      className={classes.hc}
      href="https://help.mantine.dev"
      title="Help center"
      description="Explore 30+ frequently asked questions"
    />
  );
}

export function TwitterCard() {
  return (
    <CardBase
      icon="twitter"
      className={classes.twitter}
      href={meta.twitterLink}
      title="Follow on X"
      description="Get notified about new minor and major releases"
    />
  );
}

interface SocialCardsProps {
  discord?: boolean;
  github?: boolean;
  twitter?: boolean;
  helpCenter?: boolean;
  cols?: SimpleGridProps['cols'];
}

export function SocialCards({
  discord = true,
  github = true,
  twitter = true,
  helpCenter = true,
  cols = { md: 2 },
}: SocialCardsProps) {
  return (
    <SimpleGrid cols={cols} spacing="lg">
      {discord && <DiscordCard />}
      {github && <GitHubCard />}
      {helpCenter && <HelpCenterCard />}
      {twitter && <TwitterCard />}
    </SimpleGrid>
  );
}
