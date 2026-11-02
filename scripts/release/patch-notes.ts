export function findPreviousReleaseIndex(messages: string[], currentVersion: string): number {
  return messages.findIndex(
    (message) =>
      message.includes('[release]') &&
      !message.includes(currentVersion) &&
      !message.includes('beta') &&
      !message.includes('alpha')
  );
}

export function formatGithubNotes(messages: string[]): string {
  return messages
    .filter((message) => /\[@mantine/.test(message))
    .map((message) => message.replace(/^\[([^\]]+)\]/, '- `[$1]`'))
    .join('\n');
}

export function formatDiscordMessage(githubNotes: string, version: string): string {
  const title = `Patch ${version} is out:`;
  const link = `View on GitHub – https://github.com/mantinedev/mantine/releases/tag/${version}`;
  const messages = githubNotes
    .replace(/\(#\d+(?:,\s*#\d+)*\)/g, '')
    .trim()
    .split('\n');
  const maxMessagesLength = 2000 - title.length - link.length - 4;
  const included: string[] = [];
  let length = 0;

  for (const message of messages) {
    const nextLength = length + message.length + (included.length ? 1 : 0);

    if (nextLength > maxMessagesLength) {
      break;
    }

    included.push(message);
    length = nextLength;
  }

  return [title, ...(included.length ? [included.join('\n')] : []), link].join('\n\n');
}

export function buildPatchNotes(
  messages: string[],
  version: string
): { githubNotes: string; discordMessage: string } | null {
  const index = findPreviousReleaseIndex(messages, version);
  const slice = index === -1 ? messages : messages.slice(0, index);
  const githubNotes = formatGithubNotes(slice);

  if (!githubNotes) {
    return null;
  }

  return { githubNotes, discordMessage: formatDiscordMessage(githubNotes, version) };
}
