import {
  buildPatchNotes,
  findPreviousReleaseIndex,
  formatDiscordMessage,
  formatGithubNotes,
} from './patch-notes';

const messages = [
  '[@mantine/core] Button: Fix focus ring (#100)',
  '[@mantine/hooks] use-id: Fix SSR mismatch',
  '[docs] Update getting started',
  '[release] Version: 9.4.2',
  '[@mantine/core] Older change before previous release',
];

describe('findPreviousReleaseIndex', () => {
  it('finds the previous [release] commit that is not the current version/prerelease', () => {
    expect(findPreviousReleaseIndex(messages, '9.4.3')).toBe(3);
  });
});

describe('formatGithubNotes', () => {
  it('keeps only @mantine commits and wraps the scope tag', () => {
    expect(formatGithubNotes(messages.slice(0, 3))).toBe(
      '- `[@mantine/core]` Button: Fix focus ring (#100)\n- `[@mantine/hooks]` use-id: Fix SSR mismatch'
    );
  });
});

describe('formatDiscordMessage', () => {
  it('prefixes the version, strips PR refs, and appends the GitHub link', () => {
    const result = formatDiscordMessage('- `[@mantine/core]` Button: Fix (#100)', '9.4.3');
    expect(result).toBe(
      'Patch 9.4.3 is out:\n\n- `[@mantine/core]` Button: Fix\n\nView on GitHub – https://github.com/mantinedev/mantine/releases/tag/9.4.3'
    );
  });

  it('includes only complete commit messages that fit and reserves the link', () => {
    const title = 'Patch 9.4.3 is out:';
    const link = 'View on GitHub – https://github.com/mantinedev/mantine/releases/tag/9.4.3';
    const available = 2000 - title.length - link.length - 4;
    const first = `- ${'a'.repeat(available - 2)}`;
    const result = formatDiscordMessage(`${first}\n- second change`, '9.4.3');

    expect(result).toBe(`${title}\n\n${first}\n\n${link}`);
    expect(result.length).toBe(2000);
  });

  it('keeps the title and link when the first commit cannot fit', () => {
    const result = formatDiscordMessage(`- ${'a'.repeat(2000)}\n- short change`, '9.4.3');

    expect(result).toBe(
      'Patch 9.4.3 is out:\n\nView on GitHub – https://github.com/mantinedev/mantine/releases/tag/9.4.3'
    );
    expect(result.length).toBeLessThanOrEqual(2000);
  });
});

describe('buildPatchNotes', () => {
  it('returns github + discord notes for commits since the previous release', () => {
    const result = buildPatchNotes(messages, '9.4.3');
    expect(result).not.toBeNull();
    expect(result!.githubNotes).toContain('- `[@mantine/core]` Button: Fix focus ring');
    expect(result!.discordMessage).toContain('Patch 9.4.3 is out:');
  });

  it('returns null when there are no @mantine changes', () => {
    expect(buildPatchNotes(['[docs] x', '[release] Version: 9.4.2'], '9.4.3')).toBeNull();
  });
});
