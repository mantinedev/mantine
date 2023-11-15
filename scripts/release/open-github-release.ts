import open from 'open';
import githubRelease from 'new-github-release-url';

export function openGithubRelease(version: string) {
  open(
    githubRelease({
      user: 'mantinedev',
      repo: 'mantine',
      tag: version,
      title: version,
    })
  );
}
