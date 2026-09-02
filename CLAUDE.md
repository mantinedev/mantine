## Links

## Finalizing Your Work

Run these after every edit cycle — they take seconds:

```bash
npx oxlint -c oxlint.config.mjs path/to/changed/files
npm run format:write:files path/to/changed/files

# Run tests for specific path related to your changes
npm run jest @mantine/charts
npm run jest path/to/changed/file.test.ts
```

Run these **once**, before pushing or handing the work back — not after every commit:

```bash
npm run typecheck   # ~30s
npm run build       # ~5-20s

# Run stylelint only if you have made changes to styles or CSS files
npm run stylelint

# Run this script if you've changed dependencies in any package.json
npm run syncpack
```

When a task produces several commits, a single typecheck + build pass at the end covers all of them. `npm run jest` is ~2s per package, so run it as often as you like — it catches most real breakage long before typecheck would.

After running the commands above, check if `codex` CLI is available (`command -v codex`). If it is, run `/codex-code-review` to get an automated code review of unstaged changes and apply fixes.

## Code Style

**Comments Guidelines:**
- **Do not include inline comments** that describe logic or implementation details unless explicitly requested
- **Always preserve documentation comments** on interfaces, types, and function parameters (JSDoc-style comments with `/** */`)
- The codebase prefers clean, self-documenting code for implementation
- Type definitions and public APIs should maintain their documentation comments

## Writing MDX Files

**Markdown table syntax does not work.** The docs MDX pipeline (`apps/mantine.dev`, `apps/help.mantine.dev`) does not include `remark-gfm`, so pipe tables render as literal text on the page. Write tabular content either as a `<DataTable />` (available in every `apps/mantine.dev` mdx file without an import, see `MdxDataTable`) or as a regular list:

```mdx
<DataTable
  head={['Prop', 'Components']}
  data={[
    ['valueFormat', '`DateInput`, `DateTimePicker`'],
    ['weekdayFormat', '`Calendar`, `DatePicker`'],
  ]}
/>
```

## Tests

**Verifying a new regression test:** temporarily revert the fix, confirm the test fails, then restore the fix. Do this for tests that cover async, timing or lifecycle behavior — that is where a test silently passes for the wrong reason. Skip it for straightforward assertions, where it is pure overhead.

**`rerender` remounts unless the tree shape matches.** `render()` from `@mantine-tests/core` wraps its argument in a fragment, but `rerender(ui)` does not. Passing a differently shaped tree unmounts and remounts the subtree instead of updating it, so tests that change a prop silently test a fresh mount instead. Wrap `rerender` arguments in `<>...</>` to match:

```tsx
const { rerender } = render(<Provider adapter={a}>...</Provider>);
rerender(<><Provider adapter={b}>...</Provider></>);
```

**`StrictMode` does not double-invoke effects** in the jest environment, so a test that relies on it to reproduce a double-mount bug will pass whether or not the bug is fixed.

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
