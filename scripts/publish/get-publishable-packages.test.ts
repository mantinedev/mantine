import type { Package } from '../packages/get-packages-list';
import { filterPublishablePackages } from './get-publishable-packages';

function pkg(name: string, isPrivate = false): Package {
  return {
    path: `/x/${name}`,
    packageJsonPath: `/x/${name}/package.json`,
    packageJson: { name, version: '1.0.0', private: isPrivate },
  } as Package;
}

describe('filterPublishablePackages', () => {
  it('keeps @mantine packages only', () => {
    const result = filterPublishablePackages([pkg('@mantine/core'), pkg('@mantine/hooks')]);
    expect(result.map((p) => p.packageJson.name)).toEqual(['@mantine/core', '@mantine/hooks']);
  });

  it('drops @mantinex, internal scopes, and private packages', () => {
    const result = filterPublishablePackages([
      pkg('@mantinex/mantine-logo'),
      pkg('@docs/demos'),
      pkg('@mantine-tests/core'),
      pkg('@mantine/secret', true),
    ]);
    expect(result).toEqual([]);
  });
});
