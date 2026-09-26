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
    expect(result).toContain('Patch 9.4.3 is out:');
    expect(result).toContain('- `[@mantine/core]` Button: Fix');
    expect(result).not.toContain('(#100)');
    expect(result).toContain('https://github.com/mantinedev/mantine/releases/tag/9.4.3');
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
