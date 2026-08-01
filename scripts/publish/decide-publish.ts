export type PublishDecision = 'publish' | 'skip-already-published' | 'skip-not-on-registry';

export function decidePublish(
  localVersion: string,
  publishedVersions: string[] | null
): PublishDecision {
  if (publishedVersions === null) {
    return 'skip-not-on-registry';
  }

  if (publishedVersions.includes(localVersion)) {
    return 'skip-already-published';
  }

  return 'publish';
}
