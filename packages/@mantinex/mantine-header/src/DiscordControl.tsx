import { DiscordIcon } from '@mantinex/dev-icons';
import { HeaderControl } from './HeaderControl';
import classes from './DiscordControl.module.css';

interface DiscordControlProps {
  link: string;
}

export function DiscordControl({ link }: DiscordControlProps) {
  return (
    <HeaderControl tooltip="Discord" component="a" href={link} className={classes.discord}>
      <DiscordIcon size={20} />
    </HeaderControl>
  );
}
