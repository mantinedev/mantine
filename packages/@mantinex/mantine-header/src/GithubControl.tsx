import { GithubIcon } from '@mantinex/dev-icons';
import { HeaderControl } from './HeaderControl';
import classes from './GithubControl.module.css';

interface GithubControlProps {
  link: string;
}

export function GithubControl({ link }: GithubControlProps) {
  return (
    <HeaderControl tooltip="Source code" component="a" href={link} className={classes.github}>
      <GithubIcon size={22} />
    </HeaderControl>
  );
}
