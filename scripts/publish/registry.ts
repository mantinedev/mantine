import { $ } from 'zx';

function isNotFound(error: any): boolean {
  const message = `${error.stderr ?? ''}${error.stdout ?? ''}${error.message ?? ''}`;
  return message.includes('E404') || message.includes('404');
}

export async function getPublishedVersions(name: string): Promise<string[] | null> {
  try {
    const result = await $`npm view ${name} versions --json`.quiet();
    const parsed = JSON.parse(result.stdout);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch (error: any) {
    if (isNotFound(error)) {
      return null;
    }

    throw error;
  }
}

export async function getLatestVersion(name: string): Promise<string | null> {
  try {
    const result = await $`npm view ${name} dist-tags.latest`.quiet();
    const value = result.stdout.trim();
    return value.length > 0 ? value : null;
  } catch (error: any) {
    if (isNotFound(error)) {
      return null;
    }

    throw error;
  }
}
