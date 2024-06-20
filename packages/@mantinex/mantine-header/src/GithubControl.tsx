import { GithubIcon } from '@mantinex/dev-icons';
import { HeaderControl } from './HeaderControl';

interface GithubControlProps {
  link: string;
}

export function GithubControl({ link }: GithubControlProps) {
  return (
    <HeaderControl tooltip="Source code" component="a" href={link}>
      <GithubIcon size={22} />
    </HeaderControl>
  );
}
