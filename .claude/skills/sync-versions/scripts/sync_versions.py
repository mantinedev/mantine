#!/usr/bin/env python3
"""
Sync GitHub releases to packages/@mantinex/mantine-meta/src/versions.ts.

Run from the repo root. Requires `gh` CLI authenticated with mantinedev/mantine.

Usage:
  python .claude/skills/sync-versions/scripts/sync_versions.py [--dry-run]
"""

import json
import re
import subprocess
import sys
from pathlib import Path
from datetime import datetime

REPO = "mantinedev/mantine"
VERSIONS_FILE = Path("packages/@mantinex/mantine-meta/src/versions.ts")
MIN_MAJOR = 7  # Never touch versions below this major


# ---------------------------------------------------------------------------
# GitHub API
# ---------------------------------------------------------------------------

def gh_releases():
    """Fetch all releases from GitHub (all pages)."""
    result = subprocess.run(
        ["gh", "api", "--paginate", f"/repos/{REPO}/releases?per_page=100"],
        capture_output=True, text=True, check=True,
    )
    return json.loads(result.stdout)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def parse_semver(s):
    """Return (major, minor, patch) tuple or None."""
    m = re.match(r'^v?(\d+)\.(\d+)\.(\d+)$', s.strip())
    return tuple(int(x) for x in m.groups()) if m else None


def is_stable(release):
    """Return True if this GitHub release is a stable (non-pre-release) release."""
    if release.get('prerelease') or release.get('draft'):
        return False
    tag = release.get('tag_name', '').lower()
    for kw in ['alpha', 'beta', '-rc', 'preview', 'canary', 'next', '.dev']:
        if kw in tag:
            return False
    return True


def format_date(iso):
    """Convert GitHub ISO date to 'Month Day, Year' (no leading zero on day)."""
    dt = datetime.fromisoformat(iso.replace('Z', '+00:00'))
    return f"{dt.strftime('%B')} {dt.day}, {dt.year}"


def changelog_link(major, minor, patch, max_stable_major):
    slug = f"{major}-{minor}-{patch}"
    if major < max_stable_major:
        return f"https://v{major}.mantine.dev/changelog/{slug}"
    return f"https://mantine.dev/changelog/{slug}"


# ---------------------------------------------------------------------------
# Parse versions.ts
# ---------------------------------------------------------------------------

def parse_versions_ts(text):
    """
    Parse the allVersions array from versions.ts.
    Returns a list of dicts (preserving existing patch order).
    """
    # Find start of the array
    marker = 'export const allVersions = ['
    start = text.index(marker) + len(marker)
    array_text = text[start:]

    versions = []
    depth = 0
    obj_start = None
    i = 0

    while i < len(array_text):
        ch = array_text[i]
        if ch == '{':
            if depth == 0:
                obj_start = i
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0 and obj_start is not None:
                obj_str = array_text[obj_start:i + 1]
                versions.append(_parse_version_obj(obj_str))
                obj_start = None
        elif ch == ']' and depth == 0:
            break
        i += 1

    return versions


def _str_field(name, s):
    m = re.search(rf"{name}:\s*'([^']*)'", s)
    return m.group(1) if m else ''


def _parse_version_obj(s):
    patches = []
    # The patches array has no nested brackets, so [^\]]* is safe.
    m = re.search(r'patches:\s*\[(.*?)\]', s, re.DOTALL)
    if m:
        patch_str = m.group(1)
        for pm in re.finditer(
            r"version:\s*'([^']*)'.*?date:\s*'([^']*)'", patch_str, re.DOTALL
        ):
            patches.append({'version': pm.group(1), 'date': pm.group(2)})
    return {
        'version': _str_field('version', s),
        'date': _str_field('date', s),
        'github': _str_field('github', s),
        'link': _str_field('link', s),
        'patches': patches,
    }


# ---------------------------------------------------------------------------
# Generate versions.ts
# ---------------------------------------------------------------------------

def generate_versions_ts(versions):
    lines = [
        'export interface PatchVersion {',
        '  version: string;',
        '  date: string;',
        '}',
        '',
        'export interface Version {',
        '  version: string;',
        '  date: string;',
        '  github: string;',
        '  link: string;',
        '  patches: PatchVersion[];',
        '}',
        '',
        'export const allVersions = [',
    ]
    for v in versions:
        lines += [
            '  {',
            f"    version: '{v['version']}',",
            f"    date: '{v['date']}',",
            f"    github: '{v['github']}',",
            f"    link: '{v['link']}',",
        ]
        if v['patches']:
            lines.append('    patches: [')
            for p in v['patches']:
                lines += [
                    '      {',
                    f"        version: '{p['version']}',",
                    f"        date: '{p['date']}',",
                    '      },',
                ]
            lines.append('    ],')
        else:
            lines.append('    patches: [],')
        lines.append('  },')
    lines += ['];', '']
    return '\n'.join(lines)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    dry_run = '--dry-run' in sys.argv

    if not VERSIONS_FILE.exists():
        print(f"Error: {VERSIONS_FILE} not found. Run this script from the repo root.")
        sys.exit(1)

    print("Fetching GitHub releases...")
    all_releases = gh_releases()

    # Collect stable releases for v7+
    stable = []
    for r in all_releases:
        if not is_stable(r):
            continue
        parsed = parse_semver(r['tag_name'])
        if parsed and parsed[0] >= MIN_MAJOR:
            stable.append((parsed, r))

    if not stable:
        print("No stable releases found.")
        return

    max_stable_major = max(p[0] for p, _ in stable)
    print(f"Max stable major: {max_stable_major}")

    # Build GitHub data: gh_minors maps 'X.Y.0' -> {date, patches:[]}
    # Patches are associated with their minor version
    gh_minors = {}   # minor version string -> {'date': str, 'patches': []}
    gh_patches = {}  # patch version string -> {'minor': str, 'date': str}

    # Sort stable releases descending so newest-first processing works cleanly
    for parsed, r in sorted(stable, key=lambda x: x[0], reverse=True):
        major, minor, patch = parsed
        vs = f"{major}.{minor}.{patch}"
        date = format_date(r['published_at'])

        if patch == 0:
            gh_minors.setdefault(vs, {'date': date, 'patches': []})
        else:
            minor_vs = f"{major}.{minor}.0"
            gh_patches[vs] = {'minor': minor_vs, 'date': date}

    # Associate patches with their minor version
    for pv, pdata in gh_patches.items():
        minor_vs = pdata['minor']
        if minor_vs in gh_minors:
            gh_minors[minor_vs]['patches'].append({'version': pv, 'date': pdata['date']})
        # Patch for a minor version not yet on GitHub is unusual — skip silently.

    # Read and parse existing versions.ts
    content = VERSIONS_FILE.read_text()
    existing = parse_versions_ts(content)
    existing_by_version = {v['version']: v for v in existing}

    changes = []

    # Build merged version map starting from existing data
    merged = {v['version']: dict(v, patches=list(v['patches'])) for v in existing}

    # 1. Add new minor versions not yet in the file
    for vs, data in gh_minors.items():
        if vs not in merged:
            parsed = parse_semver(vs)
            major, minor, patch = parsed
            link = changelog_link(major, minor, patch, max_stable_major)
            github_url = f"https://github.com/mantinedev/mantine/releases/tag/{vs}"
            # Sort patches for new entries ascending (current convention)
            sorted_patches = sorted(
                data['patches'],
                key=lambda p: parse_semver(p['version']) or (0, 0, 0),
            )
            merged[vs] = {
                'version': vs,
                'date': data['date'],
                'github': github_url,
                'link': link,
                'patches': sorted_patches,
            }
            changes.append(f"  + Added minor version {vs}")

    # 2. Update links and add missing patches for existing versions
    for vs, v in merged.items():
        parsed = parse_semver(vs)
        if not parsed:
            continue
        major, minor, patch = parsed

        if major < MIN_MAJOR:
            continue

        # Update link if major is no longer the current one
        if major < max_stable_major:
            expected = changelog_link(major, minor, patch, max_stable_major)
            if v['link'] != expected:
                changes.append(f"  ~ Updated link for {vs}: {v['link']} → {expected}")
                v['link'] = expected

        # Add patches from GitHub that aren't in the file yet
        if vs in gh_minors:
            existing_patches = {p['version'] for p in v['patches']}
            for gh_patch in gh_minors[vs]['patches']:
                if gh_patch['version'] not in existing_patches:
                    v['patches'].append(gh_patch)
                    changes.append(f"  + Added patch {gh_patch['version']}")

    if not changes:
        print("Already up to date, nothing to commit.")
        return

    print(f"\nChanges ({len(changes)}):")
    for c in changes:
        print(c)

    # Sort all versions descending by semver for output
    sorted_versions = sorted(
        merged.values(),
        key=lambda v: parse_semver(v['version']) or (0, 0, 0),
        reverse=True,
    )

    new_content = generate_versions_ts(sorted_versions)

    if dry_run:
        print("\n-- DRY RUN: file not written --")
        return

    VERSIONS_FILE.write_text(new_content)
    print(f"\nWritten {VERSIONS_FILE}")

    subprocess.run(['git', 'add', str(VERSIONS_FILE)], check=True)
    result = subprocess.run(
        ['git', 'commit', '-m', '[mantine.dev] Update versions list'],
        capture_output=True, text=True,
    )
    if result.returncode == 0:
        print("Committed.")
    else:
        print("git commit returned non-zero (possibly nothing staged).")
        print(result.stderr.strip())


if __name__ == '__main__':
    main()
