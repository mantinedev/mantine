import { DiscordIcon } from './DiscordIcon';
import { GithubIcon } from './GithubIcon';
import { NpmIcon } from './NpmIcon';
import { TwitterIcon } from './TwitterIcon';
import { YarnIcon } from './YarnIcon';

export default { title: 'x/DevIcons' };

export function Usage() {
  return (
    <div>
      <DiscordIcon size={40} />
      <GithubIcon size={40} />
      <TwitterIcon size={40} />
      <NpmIcon size={40} />
      <YarnIcon size={40} />
    </div>
  );
}
