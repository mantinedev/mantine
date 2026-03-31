---
name: merge-cascade
description: Merge changes down the release branch chain (master → 9.0 → 9.1 → … → 9.X). Resolves merge conflicts, pushes to the correct remote per branch. Use when the user wants to cascade/propagate changes from master through all minor release branches (e.g., "merge cascade", "propagate master", "cascade merge", "/merge-cascade").
---

# Merge Cascade

Merge changes down the chain of release branches: `master → X.0 → X.1 → … → X.N`, resolving conflicts and pushing each branch to its configured remote.

## Arguments

- Optional: starting branch (default: `master`)
- Optional: ending branch (default: highest minor branch)

Examples: `/merge-cascade`, `/merge-cascade 9.0 9.2` (cascade from 9.0 to 9.2 only)

## Steps

### 1. Ensure clean working tree

Run `git status --porcelain`. If there are uncommitted changes, **stop** and ask the user to commit or stash first.

### 2. Discover the branch chain

Parse `.git/config` to find all version branches matching the pattern `X.Y` where X is the current major version. Determine the major version from the highest numbered branch (e.g., branches `9.0`, `9.1`, `9.2` → major = 9).

Build the ordered chain: `master → X.0 → X.1 → … → X.N` (sorted by minor version ascending).

If the user specified start/end branches, use only that sub-range of the chain.

For each branch, read its configured remote from `.git/config` (`branch.X.Y.remote`). The `master` branch remote is always `origin`.

Print the discovered chain for the user, for example:
```
Merge chain: master (origin) → 9.0 (origin) → 9.1 (gitlab) → 9.2 (gitlab)
```

### 3. Fetch latest from all involved remotes

**Critical:** The `master` branch is the source of truth and always lives on `origin` (GitHub). Always fetch `origin` **first and last** to ensure its tracking refs are never stale or overwritten by other remotes.

```bash
# Always fetch origin first
git fetch origin

# Fetch non-origin remotes
git fetch <other-remote>

# Always fetch origin again last (in case another remote's refspec overwrote origin refs)
git fetch origin
```

### 4. Update master from origin

After fetching, **hard-reset** master to `origin/master` to ensure it exactly matches the remote (in case local master diverged or was stale from a prior bad fetch):
```bash
git checkout master
git reset --hard origin/master
```

### 5. Execute merges sequentially

For each consecutive pair `(source, target)` in the chain:

#### 5a. Checkout target branch
```bash
git checkout <target>
```

#### 5b. Merge source into target
```bash
git merge <source> --no-edit
```

#### 5c. Handle merge conflicts

If there are conflicts, analyze them:

1. Run `git diff --name-only --diff-filter=U` to list conflicted files.
2. For each conflicted file, read the file and resolve the conflict:
   - **`package.json` / `yarn.lock` / version files**: Keep the target branch version (ours), as each branch has its own version. Use `git checkout --ours <file> && git add <file>`.
   - **Changelog / MDX files**: If conflict is in changelog entries, keep both sides (combine). Target branch entries go first.
   - **Code files**: Attempt to understand the conflict. If both sides made independent changes to different parts, combine them. If the conflict is a true divergence, **stop and ask the user** for guidance.
3. After resolving all conflicts, run:
   ```bash
   git add -A
   git commit --no-edit
   ```

If auto-resolution is not possible for any file, **stop the cascade**, show the user the conflicted files and diff, and ask how to proceed.

#### 5d. Push target branch
```bash
git push <target-remote> <target>
```

If push fails (e.g., rejected), **stop** and ask the user how to proceed.

### 6. Return to original branch

After all merges complete (or on failure), checkout the branch the user was on before the cascade started:
```bash
git checkout <original-branch>
```

### 7. Report

Print a summary:
```
Merge cascade complete:
  master → 9.0: ✓ (pushed to origin)
  9.0 → 9.1: ✓ (pushed to gitlab)
  9.1 → 9.2: ✓ (pushed to gitlab, 2 conflicts resolved)
```

If any step failed, report where it stopped and what needs manual attention.
