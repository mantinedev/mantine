---
name: new-mantine-release
description: Initialize a new Mantine minor or major release: creates a git branch, sets up the changelog MDX page, updates mdx-meta-data.ts and versions.ts, and commits. Use when the user wants to start a new release (e.g., "new release 9.1.0", "/new-mantine-release 9.1.0", "initialize 9.2.0 release").
---

# New Mantine Release

Set up everything needed to start a new release. The user provides the version (e.g., `9.1.0`).

## Notation

Given version `X.Y.0`:
- **Branch name**: `X.Y` (e.g., `9.1`)
- **Dashed version**: `X-Y-0` (e.g., `9-1-0`)
- **Key digits**: version digits concatenated without dots (e.g., `910`, `7170` for `7.17.0`)
- **Previous release date**: the `date` field of the first entry in `allVersions` in `packages/@mantinex/mantine-meta/src/versions.ts` — used as the placeholder date

## Steps

### 1. Create the git branch

```bash
git checkout -b X.Y
git config branch.X.Y.remote gitlab
git config branch.X.Y.merge refs/heads/X.Y
```

This creates branch `X.Y` and configures it to track the `gitlab` remote (not `origin`).

### 2. Read the previous release date

Read `packages/@mantinex/mantine-meta/src/versions.ts` and extract the `date` from the first entry in `allVersions` (e.g., `'May 26, 2026'`). This is the placeholder date for the new release.

### 3. Create the MDX changelog file

Create `apps/mantine.dev/src/pages/changelog/X-Y-0.mdx`:

```mdx
import { Layout } from '@/layout';
import { MDX_DATA } from '@/mdx';

export default Layout(MDX_DATA.ChangelogKEYDIGITS);

## Support Mantine development

You can now sponsor Mantine development with [OpenCollective](https://opencollective.com/mantinedev).
All funds are used to improve Mantine and create new features and components.

<SponsorButton />
```

Replace `KEYDIGITS` with the key digits (e.g., `Changelog910`).

### 4. Add entry to mdx-meta-data.ts

Edit `apps/mantine.dev/src/mdx/data/mdx-meta-data.ts`. Insert a new changelog entry **after the last existing `Changelog*` entry** and **before `PreviousChangelogs`**.

Format (note ordinal suffix on date day: "1st", "2nd", "3rd", "4th"…"26th"):

```ts
  ChangelogKEYDIGITS: {
    title: 'Version vX.Y.0',
    slug: '/changelog/X-Y-0',
    release: 'https://github.com/mantinedev/mantine/releases/tag/X.Y.0',
    date: 'MONTH DAYth, YEAR',
    searchTags: 'X-Y-0, KEYDIGITS',
  },
```

Use the previous release date (with ordinal suffix on the day number) as the placeholder.

### 5. Add entry to versions.ts

Edit `packages/@mantinex/mantine-meta/src/versions.ts`. Insert a new entry **at the top** of the `allVersions` array.

```ts
  {
    version: 'X.Y.0',
    date: 'PREVIOUS_RELEASE_DATE',
    github: 'https://github.com/mantinedev/mantine/releases/tag/X.Y.0',
    link: 'https://mantine.dev/changelog/X-Y-0',
    patches: [],
  },
```

### 6. Commit

```
[mantine.dev] Initialize X.Y.0 release changelog
```
