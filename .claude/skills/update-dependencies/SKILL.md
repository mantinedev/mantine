---
name: update-dependencies
description: Update all dependencies to latest minor versions across the Mantine monorepo, validate, test, build, and generate a report. Use when the user wants to update dependencies, upgrade packages, run dependency maintenance, or asks to "update deps", "upgrade dependencies", "dependency update", "/update-dependencies".
---

# Update Dependencies

Update all dependencies to their latest minor versions, validate everything works, and produce a report.

## Steps

### 1. Update minor versions

Run `npx npm-check-updates` to update all package.json files to latest minor versions:

```bash
npx npm-check-updates --target minor -u --deep
```

### 2. Sync and install

```bash
npm run syncpack:fix
npm run syncpack:format
yarn install
```

If `npm run syncpack` (list-mismatches) still reports errors after fix, resolve them manually.

### 3. Run tests

```bash
npm run test:all
```

This runs oxfmt, syncpack, typecheck, lint, and jest.

If there are formatting/lint errors, fix them:
```bash
npm run format:write
npx eslint --fix packages apps/mantine.dev/src apps/help.mantine.dev/src scripts --cache
```

If there are type errors caused by updated packages (e.g., recharts changing generic type parameters), fix them with minimal changes — use type assertions or add missing type arguments. These are minor fixable errors.

Re-run `npm run test:all` to confirm fixes. If there are major errors that require significant refactoring, document them in the report but do not attempt large refactors.

### 4. Build packages

```bash
npm run build all
```

Verify no build errors. If there are errors, document them in the report.

### 5. Storybook

```bash
npm run storybook
```

Wait for Storybook to start (watch for "Storybook X.X started" or the local URL in output). Verify it starts without crash. Kill the process after confirming. Document any errors in the report.

### 6. Docs build

```bash
npm run docs:build
```

Verify it completes without errors. Document any errors in the report.

### 7. Check available major updates

Run ncu without `-u` to list available major updates (for the report only, do not install):

```bash
npx npm-check-updates --deep
```

Filter the output to show only major version bumps (where the major version number changed).

### 8. Generate report

Create `claude/{YYYY-month-DD}-dependencies-update.md` where month is lowercase full name (e.g., `2026-march-08-dependencies-update.md`).

Report format:

```markdown
# Dependencies Update — YYYY-MM-DD

## Updated packages (minor)

| Package | From | To |
|---------|------|----|
| package-name | 1.2.3 | 1.3.0 |
| ... | ... | ... |

## Validation results

- **syncpack**: PASS/FAIL (details if fail)
- **test:all**: PASS/FAIL (details if fail)
- **build**: PASS/FAIL (details if fail)
- **storybook**: PASS/FAIL (details if fail)
- **docs:build**: PASS/FAIL (details if fail)

## Errors encountered

(List any errors that were fixed or remain unresolved)

## Available major updates (not installed)

| Package | Current | Latest | Notes |
|---------|---------|--------|-------|
| package-name | 1.x | 2.x | |
| ... | ... | ... | |
```

### 9. Commit

If all validations pass (or only minor fixable issues were resolved), create a commit:

```
[core] Update minor dependencies version
```

Stage all changed `package.json` files, `yarn.lock`, and any files modified to fix minor errors.

If there are unresolved major errors, do NOT commit — only generate the report.
