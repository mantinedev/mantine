# TypeScript 7 migration — known problems

Status log for the TypeScript 7 upgrade branch. Records every problem we hit moving from `typescript@6.0.3` to `typescript@7.0.2`, its root cause, the fix currently applied, and — the reason this file exists — whether it is expected to resolve upstream (so we can wait before merging) or is permanent.

## TL;DR

TypeScript 7.0 is the native Go compiler rewrite ("Corsa" / `tsgo`), not an incremental release. Two independent things break, and they have very different outlooks:

- **The source problem (permanent, safe to ship):** one compound-component typing idiom breaks under TS7. The fix is a small, non-breaking source refactor that compiles identically on TS 6.x and 7.x. This will **not** "go away" upstream — it is intentional TS7 behavior — but our fix is permanent and independent of the compiler version, so it can ship in a patch regardless.
- **The toolchain problem (temporary, waiting on the ecosystem):** TS7 removed the classic JavaScript compiler API from the `typescript` package root. Every dev tool that calls that API (`ts.createProgram`, `ts.JsxEmit`, `ts.SyntaxKind`, …) crashes. The API is scheduled to return in **TypeScript 7.1**. These are the problems that may disappear once 7.1 ships and downstream libraries update — the ones worth waiting on.

Environment: `typescript` 7.0.2 (latest stable). `typescript@next` is `7.1.0-dev.*`. Node 26.x.

## Problem 1 — Compound-component types break for `export function` components

**Symptom:** ~288 typecheck errors under TS7, e.g. `Property 'Target' does not exist on type '{ (props): Element; displayName: string; … }'` for `Popover.Target`, `Popover.Dropdown`, `HoverCard.Group`, etc.

**Root cause:** the idiom is an expando static plus a same-named merged child namespace:

```ts
export function Popover(props) { /* … */ }
Popover.Target = PopoverTarget;                        // expando value
export namespace Popover {
  export namespace Target { export type Props = … }    // same-named namespace → shadows the value under TS7
}
```

TS7's native checker no longer merges an expando **function-declaration** static with a same-named child namespace; the namespace wins and the value is dropped. This only affects components declared with `export function` (Popover, HoverCard). Components declared `export const … = factory(...)` are unaffected — verified that `const` parents preserve both the `X.Sub` value and `X.Sub.Props` type natively on TS7. A repo-wide scan confirmed Popover and HoverCard were the only two `export function` compound components.

**Will it go away?** No — this is intentional. The TS team classifies expando/namespace merge differences as *Intentional* / *Won't Fix*:

- microsoft/typescript-go#3984 — "Bloomberg feedback for 7.0 beta" (aggregated; expando/namespace merge diffs marked Intentional / Won't Fix)
- microsoft/typescript-go#3970 — "Expando function namespaces are not merged" — closed, Intentional
- microsoft/typescript-go#1783 — expando vs declaration duplicate-identifier — closed, `wontfix`

**Fix applied (permanent, non-breaking):** replace the expando-plus-nested-namespace with an `export import` alias, and move the `Props` type onto the sub-component:

```ts
// sub-component file — factory const stays as-is; add a type-only namespace (merges fine with a const)
export const PopoverTarget = factory<PopoverTargetFactory>(/* … */);
export namespace PopoverTarget {
  export type Props = PopoverTargetProps;
}

// parent file — drop the expando assignment; alias the sub-component in
export function Popover(props) { /* … */ }
export namespace Popover {
  export import Target = PopoverTarget;   // provides BOTH the value and Target.Props
}
```

Verified: identical runtime `.js` and `.d.ts` emit on TS 6.0.3 and 7.0.2; the public API (`Popover.Target`, `Popover.Target.Props`, `HoverCard.Group.Props`, `HoverCard.Group.ContextValue`, flat `*Props` aliases) is preserved exactly; downstream consumers on TS 5.0 / 5.9 / 6.0 / 7.0 all typecheck against the built types. This is a semver-**patch**-safe change.

Files:

- `packages/@mantine/core/src/components/Popover/Popover.tsx`
- `packages/@mantine/core/src/components/Popover/PopoverTarget/PopoverTarget.tsx`
- `packages/@mantine/core/src/components/Popover/PopoverDropdown/PopoverDropdown.tsx`
- `packages/@mantine/core/src/components/Popover/PopoverContextMenu/PopoverContextMenu.tsx`
- `packages/@mantine/core/src/components/HoverCard/HoverCard.tsx`
- `packages/@mantine/core/src/components/HoverCard/HoverCardGroup/HoverCardGroup.tsx`

## Problem 2 — Classic Compiler API removed from the `typescript` package root

This is the umbrella cause for problems 2a and 2b. Under TS7, `require('typescript')` / `import ts from 'typescript'` resolves to a version stub (`lib/version.cjs`) that exports only `{ version, versionMajorMinor }`. The full API — `ts.sys`, `ts.SyntaxKind`, `ts.createProgram`, `ts.TypeChecker`, `ts.SymbolFlags`, `ts.JsxEmit`, `ts.forEachChild`, … — is gone from the package root (the redesigned API lives under the still-unstable `typescript/unstable/*` subpaths).

**Will it go away?** Partly yes — this is the reason to wait. The TS team is shipping the JS compiler API back in **TypeScript 7.1**. Once 7.1 lands and the affected libraries adopt it, these should be resolvable without our shims. Referenced by the TS 7.0 announcement and by the downstream issues below.

### Problem 2a — `scripts/list.ts` (our own compiler-API script)

**Symptom:** `Property 'SymbolFlags' does not exist on type 'typeof import(".../typescript/lib/version")'` and similar; `npm run list` also crashes at runtime.

**Cause:** the script uses `ts.createProgram`, `ts.TypeChecker`, `ts.SymbolFlags`, AST walking — the classic API.

**Fix applied (temporary shim):** pinned a private classic compiler under an alias and imported from it.

- `package.json`: added `"typescript-api": "npm:typescript@6.0.3"`
- `scripts/list.ts`: `import ts from 'typescript'` → `import ts from 'typescript-api'`

**Candidate to remove when:** TS 7.1 restores the API (could then import from `typescript` again, if the API shape matches), or we rewrite against `typescript/unstable/*`.

### Problem 2b — `react-docgen-typescript` (third-party, via `mantine-docgen-script`)

**Symptom:** `npm run docs:docgen` crashes: `TypeError: Cannot read properties of undefined (reading 'React')` at `react-docgen-typescript/lib/parser.js` (`jsx: ts.JsxEmit.React`).

**Cause:** `react-docgen-typescript` does a bare `require('typescript')` and reads `ts.JsxEmit.React`; under TS7 `ts.JsxEmit` is `undefined`. We cannot edit the third-party package.

**Fix applied (temporary shim):** in the docgen entry, redirect the in-process `require('typescript')` to the pinned classic compiler before the require chain loads.

- `scripts/docgen/index.ts`: `Module._resolveFilename` patch mapping `typescript` → `typescript-api`, then load `mantine-docgen-script` via `createRequire`.

**Upstream issue (OPEN — watch this one):** styleguidist/react-docgen-typescript#538 — "Crashes with TypeScript 7 — compiler API removed from JS module" (filed 2026-07-09). Maintainer: *"TypeScript 7 isn't really possible for the project to support… It needs the API which they aren't shipping until TypeScript 7.1."* The same issue references TypeStrong/typedoc#3098 (typedoc has the identical problem). **This is the strongest "wait and see" candidate** — likely resolved once 7.1 ships and react-docgen-typescript releases an update, at which point our docgen shim can be deleted.

Note: Mantine's Storybook is `@storybook/nextjs` (webpack) and does not configure `react-docgen-typescript`, so the Storybook-via-Vite breakage described in #538 does not affect us. Only `docgen` and `list` are hit.

## Problem 3 — `baseUrl` removed (informational)

TS7 removed the `tsconfig` `baseUrl` option (`error TS5102: Option 'baseUrl' has been removed`). Not encountered in Mantine's own configs during this migration — only noticed while writing consumer test harnesses. Flagged here in case any config or downstream tooling still sets it.

## Non-issue — 3 × TS7006 implicit-any

`ColorInput.tsx`, `DateInput.tsx`, `TimePicker.tsx` briefly reported `Parameter 'event' implicitly has an 'any' type`. These were cascade artifacts of Problem 1 (contextual typing was lost while `Popover`'s types were broken). They self-resolved once Problem 1 was fixed. No code change needed.

## Two units — how to think about merging

The working tree currently mixes two independent concerns:

**Unit #1 — consumer-facing compat (permanent, patch-safe).** The 6 source files under Problem 1. Makes Mantine's *published types* work on TS7. Non-breaking, compiles identically on TS 6.x and 7.x, needs none of the toolchain shims. Can ship on the current TS 6.x in a patch and is unaffected by anything upstream.

**Unit #2 — internal compiler migration to TS7 (temporary, ecosystem-blocked).** The `typescript` 6→7 bump (root + both apps + lockfile), the `typescript-api` alias, and the `list.ts` / `docgen` shims. This is where all the fragility lives, and it is blocked on TS 7.1 + downstream library updates.

Options:

1. **Ship Unit #1 only, as a patch, on TS 6.x.** Every consumer gets TS7-compatible types today; revisit the internal migration after TS 7.1. Lowest risk.
2. **Keep the full branch on TS 7.0 now**, accepting the shims until the ecosystem catches up.
3. **Switch Unit #2 to the official side-by-side layout** (cleaner than per-tool shims — makes `typescript` resolve to the classic API globally, so all API-based tools work with no shims, and only the typecheck command points at the native binary):

   ```jsonc
   "devDependencies": {
     "@typescript/native": "npm:typescript@7.0.2",           // v7 native compiler → tsc/tsgo binary
     "typescript":        "npm:@typescript/typescript6@6.0.2" // classic v6 API for everything that imports 'typescript'
   }
   ```

   Both packages verified to exist on npm. From the TS 7.0 announcement's "running side-by-side" guidance and react-docgen-typescript#538. Choosing this deletes `typescript-api` and both shims.

## Watch list (revisit before merging Unit #2)

- **TypeScript 7.1 stable** ships the JS compiler API → unblocks Problems 2a and 2b.
- **styleguidist/react-docgen-typescript#538** closed / a release supporting TS7 → delete the `scripts/docgen` shim.
- **TypeStrong/typedoc#3098** — parallel signal for ecosystem readiness.
- Problem 1 is **not** on this list — it is intentional TS7 behavior and our fix is permanent regardless of the compiler version.

## Verification snapshot (current branch, on TS 7.0.2)

- `npm run typecheck` (root + both docs apps): 0 errors
- `npm run build` (full monorepo): pass
- `npm run jest` (Popover + HoverCard): 86/86
- `npm run docs:docgen` + `docs:count`: pass (with the shim)
- `npm run list @mantine/core`: works (with the alias)
- oxlint + syncpack: clean
- Consumer types on TS 5.0 / 5.9 / 6.0 / 7.0: full public API resolves
