---
name: init-changelog
description: Initialize changelog documentation for a new Mantine minor or major release. Use when the user wants to set up a new changelog page (e.g., "initialize changelog for 9.1.0", "setup release 9.2.0"). Triggers on requests mentioning new release changelog setup or initialization.
---

# Initialize Changelog

Set up changelog files for a new Mantine release. The user provides the version (e.g., `9.1.0`).

## Notation

Given version `X.Y.0`:
- **Dashed version**: `X-Y-0` (e.g., `9-1-0`)
- **Key digits**: version digits concatenated without dots (e.g., `910`, `7170` for `7.17.0`)
- **Previous release date**: the `date` field of the first entry in `allVersions` array in `packages/@mantinex/mantine-meta/src/versions.ts` — this is used as the placeholder date for the new release

## Steps

### 1. Read the previous release date

Read `packages/@mantinex/mantine-meta/src/versions.ts` and extract the `date` from the first entry in `allVersions`. This date string (e.g., `'May 26, 2026'`) is the placeholder date for the new release. Also note the previous version number.

### 2. Create the MDX changelog file

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

### 3. Add entry to mdx-meta-data.ts

Edit `apps/mantine.dev/src/mdx/data/mdx-meta-data.ts`. Insert a new changelog entry **after the last existing `Changelog*` entry** and **before `PreviousChangelogs`**.

Format (note ordinal suffix on date day, e.g., "26th", "8th", "1st", "2nd", "3rd"):

```ts
  ChangelogKEYDIGITS: {
    title: 'Version vX.Y.0',
    slug: '/changelog/X-Y-0',
    release: 'https://github.com/mantinedev/mantine/releases/tag/X.Y.0',
    date: 'MONTH DAYth, YEAR',
    searchTags: 'X-Y-0, KEYDIGITS',
  },
```

Use the previous release date (with ordinal suffix added to the day) as the placeholder.

### 4. Add entry to versions.ts

Edit `packages/@mantinex/mantine-meta/src/versions.ts`. Insert a new entry **at the top** of the `allVersions` array (before the current first entry).

```ts
  {
    version: 'X.Y.0',
    date: 'PREVIOUS_RELEASE_DATE',
    github: 'https://github.com/mantinedev/mantine/releases/tag/X.Y.0',
    link: 'https://mantine.dev/changelog/X-Y-0',
    patches: [],
  },
```

### 5. Commit

Commit all changes with message:

```
[mantine.dev] Initialize X.Y.0 release changelog
```
