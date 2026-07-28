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
  const body = githubNotes.replace(/\(#\d+(?:,\s*#\d+)*\)/g, '').trim();
  return `Patch ${version} is out:\n\n${body}\n\nView on GitHub – https://github.com/mantinedev/mantine/releases/tag/${version}`;
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
