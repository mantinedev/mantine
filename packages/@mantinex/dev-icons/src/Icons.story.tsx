import { CssIcon } from './CssIcon';
import { DiscordIcon } from './DiscordIcon';
import { FolderIcon } from './FolderIcon';
import { FolderOpenIcon } from './FolderOpenIcon';
import { GithubIcon } from './GithubIcon';
import { HtmlIcon } from './HtmlIcon';
import { MarkdownIcon } from './MarkdownIcon';
import { NpmIcon } from './NpmIcon';
import { TwitterIcon } from './TwitterIcon';
import { TypeScriptIcon } from './TypeScriptIcon';
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

export function FileIcons() {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <TypeScriptIcon size={40} />
      <CssIcon size={40} />
      <HtmlIcon size={40} />
      <MarkdownIcon size={40} />
      <FolderIcon size={40} />
      <FolderOpenIcon size={40} />
    </div>
  );
}
