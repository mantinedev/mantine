---
name: sync-versions
description: Sync Mantine GitHub releases into packages/@mantinex/mantine-meta/src/versions.ts. Use when the user wants to update the versions list, sync release dates, add missing patch versions, or update changelog links for older major versions. Triggers on requests like "sync versions", "update versions.ts", "add missing releases".
---

# Sync Versions

Run the bundled script from the repo root:

```bash
python3 .claude/skills/sync-versions/scripts/sync_versions.py
```

Use `--dry-run` to preview changes without writing or committing.

## What the script does

1. Fetches all releases from `mantinedev/mantine` via `gh api`
2. Ignores pre-releases (alpha, beta, rc, etc.) and drafts
3. Ignores versions below v7
4. Adds missing minor/major versions and their patches
5. Updates changelog links for older major versions to use their versioned subdomain (e.g. `v8.mantine.dev`) when a newer stable major exists
6. Commits with `[mantine.dev] Update versions list`

## Requirements

- Run from the repo root
- `gh` CLI must be authenticated with access to `mantinedev/mantine`
