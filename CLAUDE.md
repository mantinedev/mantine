# CLAUDE.md

## Finalizing Your Work

Choose these commands to run after finalizing your work:

```bash
# Always run these commands before finalizing your work
npm run typecheck
npx eslint path/to/changed/files
npm run prettier:write path/to/changed/files

# Run tests for specific path related to your changes
npm run jest @mantine/charts
npm run jest path/to/changed/file.test.ts

# Run stylelint only if you have made changes to styles or CSS files
npm run stylelint

# Run this script if you've changed dependencies in any package.json
npm run syncpack
```

## Code Style

**Comments Guidelines:**
- **Do not include inline comments** that describe logic or implementation details unless explicitly requested
- **Always preserve documentation comments** on interfaces, types, and function parameters (JSDoc-style comments with `/** */`)
- The codebase prefers clean, self-documenting code for implementation
- Type definitions and public APIs should maintain their documentation comments
