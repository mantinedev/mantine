import { IconArrowUpRight } from '@tabler/icons-react';
import { DiscordIcon, GithubIcon } from '@mantinex/dev-icons';
import { meta } from '@mantinex/mantine-meta';
import classes from './SocialCard.module.css';

interface SocialCardProps {
  type: 'discord' | 'github';
}

const SOCIAL_DATA = {
  discord: {
    title: 'Discord',
    description: 'Chat with community on Discord',
    link: meta.discordLink,
    icon: DiscordIcon,
  },
  github: {
    title: 'GitHub',
    description: 'Ask your questions on GitHub Discussions',
    link: meta.gitHubLinks.discussions,
    icon: GithubIcon,
  },
};

export function SocialCard({ type }: SocialCardProps) {
  const data = SOCIAL_DATA[type];

  return (
    <a href={data.link} target="_blank" data-type={type} className={classes.root} rel="noreferrer">
      <div className={classes.appIcon}>
        <data.icon size={40} />
      </div>

      <div>
        <h3 className={classes.title}>{data.title}</h3>
        <p className={classes.description}>{data.description}</p>
      </div>

      <IconArrowUpRight className={classes.arrowIcon} size={30} stroke={1.5} />
    </a>
  );
}
