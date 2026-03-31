# CLAUDE.md

## Links

- Testing guidelines – `llms/testing.md`

## Finalizing Your Work

Choose these commands to run after finalizing your work:

```bash
# Always run these commands before finalizing your work
npm run typecheck
npx eslint path/to/changed/files
npm run prettier:write:files path/to/changed/files

# Run tests for specific path related to your changes
npm run jest @mantine/charts
npm run jest path/to/changed/file.test.ts

# Run stylelint only if you have made changes to styles or CSS files
npm run stylelint

# Run this script if you've changed dependencies in any package.json
npm run syncpack
```

After running the commands above, check if `codex` CLI is available (`command -v codex`). If it is, run `/codex-code-review` to get an automated code review of unstaged changes and apply fixes.

## Code Style

**Comments Guidelines:**
- **Do not include inline comments** that describe logic or implementation details unless explicitly requested
- **Always preserve documentation comments** on interfaces, types, and function parameters (JSDoc-style comments with `/** */`)
- The codebase prefers clean, self-documenting code for implementation
- Type definitions and public APIs should maintain their documentation comments

## Commit conventions

Mantine is a monorepo, thus it is important to write correct commit messages to keep the git history clean and consistent. All commits made in this repository are divided into 3 groups:

- package commits – Related to any particular package.
- docs commits – Related to the documentation.
- core commits – Only related to repository tooling and not associated with any package.

Commit messages consists of 3 parts:
```
[area] Optional title: Message
```

Examples:
- `[core] Fix documentation deployment script` – Change made in repository script, it is not related to documentation or any package
- `[mantine.dev] Update report issues link` – Change related to documentation website
- `[@mantine/core] Button: Add theme focus styles` – Change in @mantine/core package at Button component
- `[@mantine/hooks] use-list-state: Add remove handler` – Change in @mantine/hooks package at use-list-state hook
