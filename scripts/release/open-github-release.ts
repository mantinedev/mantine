import githubRelease from 'new-github-release-url';
import open from 'open';

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
